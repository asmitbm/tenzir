from invoke import task, Context, Exit
import boto3
import botocore.client
import dynaconf
import time
import base64
import json
import io

VALIDATORS = [
    dynaconf.Validator("VAST_AWS_REGION", must_exist=True),
    dynaconf.Validator("VAST_CIDR", must_exist=True),
    dynaconf.Validator("VAST_PEERED_VPC_ID", must_exist=True),
    dynaconf.Validator("VAST_VERSION"),  # usually resolved lazily
    dynaconf.Validator("VAST_SERVER_STORAGE_TYPE", default="EFS"),
]

CMD_HELP = {
    "cmd": "A bash command to be executed. We recommand wrapping it with single quotes to avoid unexpected interpolations."
}


def conf(validators=[]) -> dict:
    """Load config starting with VAST_ from both env variables and .env file"""
    dc = dynaconf.Dynaconf(
        load_dotenv=True,
        envvar_prefix=False,
        validators=validators,
    )
    return {
        k: v
        for (k, v) in dc.as_dict().items()
        if k.startswith(("VAST_", "TF_", "AWS_"))
    }


##  Aliases

AWS_REGION = conf(VALIDATORS)["VAST_AWS_REGION"]
EXIT_CODE_VAST_SERVER_NOT_RUNNING = 8

CLOUDROOT = "."
REPOROOT = "../.."
TFDIR = f"{CLOUDROOT}/terraform"
DOCKERDIR = f"{CLOUDROOT}/docker"


## Helper functions


def aws(service):
    # timeout set to 1000 to be larger than lambda max duration
    config = botocore.client.Config(retries={"max_attempts": 0}, read_timeout=1000)
    return boto3.client(service, region_name=AWS_REGION, config=config)


def terraform_output(c: Context, step, key) -> str:
    return c.run(
        f"terraform -chdir={TFDIR}/{step} output --raw {key}", hide="out"
    ).stdout


def VAST_VERSION(c: Context):
    """If VAST_VERSION not defined, use latest release"""
    if "VAST_VERSION" in conf():
        return conf()["VAST_VERSION"]
    version = c.run(
        "git describe --abbrev=0 --match='v[0-9]*' --exclude='*-rc*'", hide="out"
    ).stdout.strip()
    return version


def env(c: Context) -> dict:
    return {
        **conf(VALIDATORS),
        "VAST_VERSION": VAST_VERSION(c),
    }


def auto_app_fmt(val: bool) -> str:
    if val:
        return "--terragrunt-non-interactive --auto-approve"
    else:
        return ""


## Tasks


@task
def fmt(c, fix=False):
    """Fix Terraform and Terragrunt formatting"""
    tf_fix = "" if fix else "--check"
    c.run(f"terraform fmt -recursive -diff {tf_fix}")
    tg_fix = "" if fix else "--terragrunt-check"
    c.run(f"terragrunt hclfmt {tg_fix}")


@task
def docker_login(c):
    """Login the Docker client to ECR"""
    token = aws("ecr").get_authorization_token()
    user_pass = (
        base64.b64decode(token["authorizationData"][0]["authorizationToken"])
        .decode()
        .split(":")
    )
    registry = token["authorizationData"][0]["proxyEndpoint"]
    c.run(
        f"docker login --username {user_pass[0]} --password-stdin {registry}",
        in_stream=io.StringIO(user_pass[1]),
    )


@task
def init_step(c, step):
    """Manually run terraform init on a specific step"""
    c.run(
        f"terragrunt init --terragrunt-working-dir {TFDIR}/{step}",
        env=env(c),
    )


@task
def deploy_step(c, step, auto_approve=False):
    """Deploy only one step of the stack"""
    init_step(c, step)
    c.run(
        f"terragrunt apply {auto_app_fmt(auto_approve)} --terragrunt-working-dir {TFDIR}/{step}",
        env=env(c),
        pty=True,
    )


@task
def deploy(c, auto_approve=False):
    """One liner build and deploy of the stack to AWS"""
    deploy_step(c, "core-1", auto_approve)
    deploy_step(c, "core-2", auto_approve)


@task(autoprint=True)
def current_image(c, repo_arn):
    """Get the current Lambda image URI. In case of failure, returns the error message instead of the URI."""
    try:
        tags = aws("ecr").list_tags_for_resource(resourceArn=repo_arn)["tags"]
    except Exception as e:
        return str(e)
    current = next(
        (tag["Value"] for tag in tags if tag["Key"] == "current"),
        "current-image-not-defined",
    )
    return current


@task(help={"type": "Can be either 'lambda' or 'fargate'"})
def deploy_image(c, type):
    """Build and push the image, fails if step 1 is not deployed"""
    image_url = terraform_output(c, "core-1", f"vast_{type}_repository_url")
    repo_arn = terraform_output(c, "core-1", f"vast_{type}_repository_arn")
    # get the digest of the current image
    try:
        current_img = current_image(c, repo_arn)
        c.run(f"docker pull {current_img}")
        old_digest = c.run(
            f"docker inspect --format='{{{{.RepoDigests}}}}' {current_img}",
            hide="out",
        ).stdout
    except:
        old_digest = "current-image-not-found"
    # build the image and get the new digest
    image_tag = int(time.time())
    version = VAST_VERSION(c)
    if version == "latest":
        c.run(f"docker build -t tenzir/vast:{image_tag} {REPOROOT}")
        version = image_tag
    c.run(
        f"docker build --build-arg VAST_VERSION={version} -f {DOCKERDIR}/{type}.Dockerfile -t {image_url}:{image_tag} {DOCKERDIR}"
    )
    new_digest = c.run(
        f"docker inspect --format='{{{{.RepoDigests}}}}' {image_url}:{image_tag}",
        hide="out",
    ).stdout
    # compare old an new digests
    if old_digest == new_digest:
        print("Docker image didn't change, skipping push")
        return
    # if a change occured, push and tag the new image as current
    c.run(f"docker push {image_url}:{image_tag}")
    aws("ecr").tag_resource(
        resourceArn=repo_arn,
        tags=[{"Key": "current", "Value": f"{image_url}:{image_tag}"}],
    )


@task(autoprint=True)
def get_vast_server(c, max_wait_time_sec=0):
    """Get the task id of the VAST server. If no server is running, it waits
    until max_wait_time_sec for a new server to be started."""
    cluster = terraform_output(c, "core-2", "fargate_cluster_name")
    family = terraform_output(c, "core-2", "vast_task_family")
    start_time = time.time()
    while True:
        task_res = aws("ecs").list_tasks(family=family, cluster=cluster)
        nb_vast_tasks = len(task_res["taskArns"])
        if nb_vast_tasks == 1:
            task_id = task_res["taskArns"][0].split("/")[-1]
            return task_id
        if nb_vast_tasks > 1:
            raise Exit(f"{nb_vast_tasks} VAST servers running", 1)
        if nb_vast_tasks == 0 and time.time() - start_time > max_wait_time_sec:
            raise Exit("No VAST server running", EXIT_CODE_VAST_SERVER_NOT_RUNNING)
        time.sleep(1)


@task
def start_vast_server(c):
    """Start the VAST server instance as an AWS Fargate task. Noop if a VAST server is already running"""
    cluster = terraform_output(c, "core-2", "fargate_cluster_name")
    service_name = terraform_output(c, "core-2", "vast_service_name")
    aws("ecs").update_service(cluster=cluster, service=service_name, desiredCount=1)
    task_id = get_vast_server(c, max_wait_time_sec=120)
    print(f"Started task {task_id}")


def stop_vast_task(c):
    "Stop the current running VAST Fargate Task"
    task_id = get_vast_server(c)
    cluster = terraform_output(c, "core-2", "fargate_cluster_name")
    aws("ecs").stop_task(task=task_id, cluster=cluster)
    return task_id


@task
def stop_vast_server(c):
    """Stop the VAST server instance"""
    cluster = terraform_output(c, "core-2", "fargate_cluster_name")
    service_name = terraform_output(c, "core-2", "vast_service_name")
    aws("ecs").update_service(cluster=cluster, service=service_name, desiredCount=0)
    task_id = stop_vast_task(c)
    print(f"Stopped task {task_id}")


@task
def restart_vast_server(c):
    """Stop the running VAST server Fargate task, the service starts a new one"""
    task_id = stop_vast_task(c)
    print(f"Stopped task {task_id}")
    task_id = get_vast_server(c, max_wait_time_sec=120)
    print(f"Started task {task_id}")


@task(autoprint=True)
def list_all_tasks(c):
    """List the ids of all tasks running on the ECS cluster"""
    cluster = terraform_output(c, "core-2", "fargate_cluster_name")
    task_res = aws("ecs").list_tasks(cluster=cluster)
    task_ids = [task.split("/")[-1] for task in task_res["taskArns"]]
    return task_ids


@task(autoprint=True, help=CMD_HELP)
def run_lambda(c, cmd):
    """Run ad-hoc VAST client commands from AWS Lambda"""
    lambda_name = terraform_output(c, "core-2", "vast_lambda_name")
    cmd_b64 = base64.b64encode(cmd.encode()).decode()
    lambda_res = aws("lambda").invoke(
        FunctionName=lambda_name,
        Payload=json.dumps({"cmd": cmd_b64}).encode(),
        InvocationType="RequestResponse",
    )
    if "FunctionError" in lambda_res:
        mess = f'{lambda_res["FunctionError"]}: {lambda_res["Payload"].read()}'
        raise Exit(message=mess, code=1)
    res = json.loads(lambda_res["Payload"].read())["result"]
    return res


@task(help=CMD_HELP)
def execute_command(c, cmd="/bin/bash"):
    """Run ad-hoc or interactive commands from the VAST server Fargate task"""
    task_id = get_vast_server(c)
    cluster = terraform_output(c, "core-2", "fargate_cluster_name")
    # if we are not running the default interactive shell, encode the command to avoid escaping issues
    if cmd != "/bin/bash":
        cmd = f"/bin/bash -c 'echo {base64.b64encode(cmd.encode()).decode()} | base64 -d | /bin/bash'"
    # we use the CLI here because boto does not know how to use the session-manager-plugin
    c.run(
        f"""aws ecs execute-command \
		--cluster {cluster} \
		--task {task_id} \
		--interactive \
		--command "{cmd}" \
        --region {AWS_REGION} """,
        pty=True,
    )


@task
def destroy_step(c, step, auto_approve=False):
    """Destroy resources of the specified step. Resources depending on it should be cleaned up first."""
    init_step(c, step)
    c.run(
        f"terragrunt destroy {auto_app_fmt(auto_approve)} --terragrunt-working-dir {TFDIR}/{step}",
        env=env(c),
        pty=True,
    )


@task
def destroy(c, auto_approve=False):
    """Tear down the entire terraform stack"""
    try:
        stop_vast_server(c)
    except Exception as e:
        print(str(e))
        print("Failed to stop tasks. Continuing destruction...")
    c.run(
        f"terragrunt run-all destroy {auto_app_fmt(auto_approve)} --terragrunt-working-dir {TFDIR}",
        env=env(c),
        pty=True,
    )