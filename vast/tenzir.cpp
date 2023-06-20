//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/application.hpp"
#include "vast/concept/convertible/to.hpp"
#include "vast/data.hpp"
#include "vast/default_configuration.hpp"
#include "vast/detail/settings.hpp"
#include "vast/detail/signal_handlers.hpp"
#include "vast/factory.hpp"
#include "vast/format/reader_factory.hpp" // IWYU pragma: keep
#include "vast/format/writer_factory.hpp" // IWYU pragma: keep
#include "vast/logger.hpp"
#include "vast/module.hpp"
#include "vast/modules.hpp"
#include "vast/plugin.hpp"
#include "vast/scope_linked.hpp"
#include "vast/signal_reflector.hpp"
#include "vast/tql/parser.hpp"

#include <arrow/util/compression.h>
#include <caf/actor_system.hpp>
#include <caf/fwd.hpp>

#include <csignal>
#include <cstdlib>
#include <iostream>
#include <string_view>
#include <thread>
#include <unordered_map>

int main(int argc, char** argv) {
  using namespace vast;
  // Set a signal handler for fatal conditions. Prints a backtrace if support
  // for that is enabled.
  std::signal(SIGSEGV, fatal_handler);
  std::signal(SIGABRT, fatal_handler);
  // Mask SIGINT and SIGTERM so we can handle those in a dedicated thread.
  auto sigset = termsigset();
  pthread_sigmask(SIG_BLOCK, &sigset, nullptr);
  // Set up our configuration, e.g., load of YAML config file(s).
  default_configuration cfg;
  if (auto err = cfg.parse(argc, argv)) {
    std::cerr << "failed to parse configuration: " << to_string(err)
              << std::endl;
    return EXIT_FAILURE;
  }
  auto loaded_plugin_paths = plugins::load({VAST_BUNDLED_PLUGINS}, cfg);
  if (!loaded_plugin_paths) {
    fmt::print(stderr, "{}\n", loaded_plugin_paths.error());
    return EXIT_FAILURE;
  }
  // Initialize factories.
  factory<format::reader>::initialize();
  factory<format::writer>::initialize();
  // Application setup.
  auto [root, root_factory] = make_application(argv[0]);
  if (!root)
    return EXIT_FAILURE;
  // Parse the CLI.
  auto invocation
    = parse(*root, cfg.command_line.begin(), cfg.command_line.end());
  if (!invocation) {
    if (invocation.error()) {
      render_error(*root, invocation.error(), std::cerr);
      return EXIT_FAILURE;
    }
    // Printing help/documentation texts returns caf::no_error, and we want to
    // indicate success when printing the help/documentation texts.
    return EXIT_SUCCESS;
  }
  // Merge the options from the CLI into the options from the configuration.
  // From here on, options from the command line can be used.
  detail::merge_settings(invocation->options, cfg.content,
                         policy::merge_lists::yes);
  // Tweak CAF parameters in case we're running a client command.
  const auto app_path = std::string_view{argv[0]};
  const auto last_slash = app_path.find_last_of('/');
  const auto app_name = last_slash == std::string_view::npos
                          ? app_path
                          : app_path.substr(last_slash + 1);
  if (app_name == "vast" || app_name == "tenzir-ctl") {
    bool is_server = invocation->full_name == "start"
                     || invocation->full_name == "exec"
                     || caf::get_or(cfg.content, "vast.node", false);
    std::string_view max_threads_key = "caf.scheduler.max-threads";
    if (!is_server
        && !caf::holds_alternative<caf::config_value::integer>(cfg,
                                                               max_threads_key))
      cfg.set(max_threads_key, 2);
  }
  // Create log context as soon as we know the correct configuration.
  auto log_context = create_log_context(*invocation, cfg.content);
  if (!log_context)
    return EXIT_FAILURE;
  // Print the configuration file(s) that were loaded.
  if (!cfg.config_file_path.empty())
    cfg.config_files.emplace_back(std::move(cfg.config_file_path));
  for (const auto& file : loaded_config_files())
    VAST_INFO("loaded configuration file: {}", file);
  // Print the plugins that were loaded, and errors that occured during loading.
  for (const auto& file : *loaded_plugin_paths)
    VAST_VERBOSE("loaded plugin: {}", file);
  // Initialize successfully loaded plugins.
  if (auto err = plugins::initialize(cfg)) {
    VAST_ERROR("failed to initialize plugins: {}", err);
    return EXIT_FAILURE;
  }
  // Eagerly verify that the Arrow libraries we're using have Zstd support so
  // we can assert this works when serializing record batches.
  {
    const auto default_compression_level
      = arrow::util::Codec::DefaultCompressionLevel(arrow::Compression::ZSTD);
    if (!default_compression_level.ok()) {
      VAST_ERROR("failed to configure Zstd codec for Apache Arrow: {}",
                 default_compression_level.status().ToString());
      return EXIT_FAILURE;
    }
    auto compression_level
      = caf::get_or(cfg, "vast.zstd-compression-level",
                    default_compression_level.ValueUnsafe());
    auto min_level
      = arrow::util::Codec::MinimumCompressionLevel(arrow::Compression::ZSTD);
    auto max_level
      = arrow::util::Codec::MaximumCompressionLevel(arrow::Compression::ZSTD);
    if (!min_level.ok()) {
      VAST_ERROR("unable to configure Zstd codec for Apache Arrow: {}",
                 min_level.status().ToString());
      return EXIT_FAILURE;
    }
    if (!max_level.ok()) {
      VAST_ERROR("unable to configure Zstd codec for Apache Arrow: {}",
                 max_level.status().ToString());
      return EXIT_FAILURE;
    }
    if (compression_level < min_level.ValueUnsafe()
        || compression_level > max_level.ValueUnsafe()) {
      VAST_ERROR("Zstd compression level '{}' outside of valid range [{}, {}]",
                 compression_level, min_level.ValueUnsafe(),
                 max_level.ValueUnsafe());
      return EXIT_FAILURE;
    }
    auto codec
      = arrow::util::Codec::Create(arrow::Compression::ZSTD, compression_level);
    if (!codec.ok()) {
      VAST_ERROR("failed to create Zstd codec for Apache Arrow: {}",
                 codec.status().ToString());
      return EXIT_FAILURE;
    }
  }
  // Warn if vast.pipeline-triggers are defined, as the functionality went away
  // alongside the old pipeline executor.
  if (caf::get_if<caf::settings>(&cfg, "vast.pipeline-triggers")) {
    VAST_WARN("the 'vast.pipeline-triggers' option is no longer functional"
              "use inline import and export pipelines instead");
  }
  // Set up the modules singleton.
  auto module = load_module(cfg);
  if (not module) {
    VAST_ERROR("failed to read schema dirs: {}", module.error());
    return EXIT_FAILURE;
  }
  auto taxonomies = load_taxonomies(cfg);
  if (not taxonomies) {
    VAST_ERROR("failed to load concepts: {}", taxonomies.error());
    return EXIT_FAILURE;
  }
  modules::init(*module, std::move(taxonomies->concepts));
  // Set up pipeline aliases.
  using namespace std::literals;
  auto aliases = std::unordered_map<std::string, std::string>{};
  for (auto prefix : {"vast.operators"sv, "vast.pipelines"sv}) {
    if (auto const* settings = caf::get_if<caf::settings>(&cfg, prefix)) {
      if (prefix == "vast.pipelines") {
        VAST_WARN("the config section `vast.pipelines` is deprecated, use "
                  "`vast.operators` instead");
      }
      auto r = to<record>(*settings);
      if (!r) {
        VAST_ERROR("could not load `{}`: invalid record", prefix);
        return EXIT_FAILURE;
      }
      for (auto&& [name, value] : *r) {
        auto* definition = caf::get_if<std::string>(&value);
        if (!definition) {
          VAST_ERROR("could not load `{}`: alias `{}` does not "
                     "resolve to a string",
                     prefix, name);
          return EXIT_FAILURE;
        }
        aliases.emplace(std::move(name), *definition);
      }
    }
  }
  tql::set_operator_aliases(std::move(aliases));
  // Lastly, initialize the actor system context, and execute the given
  // command. From this point onwards, do not execute code that is not
  // thread-safe.
  auto sys = caf::actor_system{cfg};
  // The reflector scope variable cleans up the reflector on destruction.
  scope_linked<signal_reflector_actor> reflector{
    sys.spawn<caf::detached>(signal_reflector)};
  std::atomic<bool> stop = false;
  // clang-format off
  auto signal_monitoring_thread = std::thread([&]()
#if VAST_GCC
      // Workaround for an ASAN bug that only occurs with GCC.
      // https://gcc.gnu.org/bugzilla//show_bug.cgi?id=101476
      __attribute__((no_sanitize_address))
#endif
      {
        int signum = 0;
        sigwait(&sigset, &signum);
        VAST_DEBUG("received signal {}", signum);
        if (!stop)
          caf::anon_send<caf::message_priority::high>(
            reflector.get(), atom::internal_v, atom::signal_v, signum);
      });
  // clang-format on
  // Put it into the actor registry so any actor can communicate with it.
  sys.registry().put("signal-reflector", reflector.get());
  auto run_error = caf::error{};
  if (auto result = run(*invocation, sys, root_factory); !result)
    run_error = std::move(result.error());
  else
    caf::message_handler{[&](caf::error& err) {
      run_error = std::move(err);
    }}(*result);
  sys.registry().erase("signal-reflector");
  stop = true;
  if (pthread_cancel(signal_monitoring_thread.native_handle()) != 0)
    VAST_ERROR("failed to cancel signal monitoring thread");
  signal_monitoring_thread.join();
  pthread_sigmask(SIG_UNBLOCK, &sigset, nullptr);
  if (run_error) {
    render_error(*root, run_error, std::cerr);
    return EXIT_FAILURE;
  }
  return EXIT_SUCCESS;
}
