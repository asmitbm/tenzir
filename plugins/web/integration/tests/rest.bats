# shellcheck disable=SC2016

: "${BATS_TEST_TIMEOUT:=120}"

DATADIR="$BATS_TEST_DIRNAME/../data/misc"

setup() {
  bats_load_library bats-support
  bats_load_library bats-assert
  bats_load_library bats-tenzir

  export_default_node_config
  export TENZIR_START__COMMANDS
  export TENZIR_PLUGINS=web
}

teardown() {
  teardown_node
}

wait_for_tcp() {
  port=$1
  timeout $BATS_TEST_TIMEOUT bash -c "until echo > /dev/tcp/127.0.0.1/$port; do sleep 0.2; done"
}

@test "status endpoint" {
  TENZIR_START__COMMANDS="web server --mode=dev --port=42025"
  setup_node_with_plugins web
  wait_for_tcp 42025

  check curl -XPOST http://127.0.0.1:42025/api/v0/status?component=filesystem
  check ! curl --fail-with-body -XPOST http://127.0.0.1:42025/api/v0/status?verbosity=!~asdf
}

@test "authenticated endpoints" {
  TENZIR_START__COMMANDS="web server --mode=upstream --port=42026"
  setup_node_with_plugins web
  wait_for_tcp 42026

  check curl -XPOST http://127.0.0.1:42026/api/v0/status
  token="$(tenzir-ctl web generate-token)"
  check curl -H "X-Tenzir-Token: ${token}" -XPOST http://127.0.0.1:42026/api/v0/status?component=filesystem
}

@test "TLS endpoints" {
  TENZIR_START__COMMANDS="web server --mode=server --certfile=${DATADIR}/server.pem --keyfile=${DATADIR}/server.key --port=42027"
  setup_node_with_plugins web
  wait_for_tcp 42027

  check ! curl --fail-with-body -XPOST http://127.0.0.1:42027/api/v0/status
  check ! curl --fail-with-body --cacert "${DATADIR}/client.pem" -XPOST https://127.0.0.1:42027/api/v0/status?component=filesystem
  token="$(tenzir-ctl web generate-token)"
  check curl -H "X-Tenzir-Token: ${token}" --cacert "${DATADIR}/client.pem" -XPOST https://127.0.0.1:42027/api/v0/status?component=filesystem
}
