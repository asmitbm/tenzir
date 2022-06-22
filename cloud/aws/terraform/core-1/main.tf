# The default provider manages VAST resources and other monitoring appliances
provider "aws" {
  region = var.region_name
  default_tags {
    tags = {
      module      = module.env.module_name
      provisioner = "terraform"
      stage       = terraform.workspace
    }
  }
}

resource "aws_ecr_repository" "vast_lambda" {
  name                 = "${module.env.module_name}-lambda-${module.env.stage}"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }

  lifecycle {
    ignore_changes = [tags["current"]]
  }
}

resource "aws_ecr_repository" "vast_server" {
  name                 = "${module.env.module_name}-fargate-${module.env.stage}"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }

  lifecycle {
    ignore_changes = [tags["current"]]
  }
}