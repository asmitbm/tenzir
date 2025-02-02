//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/concept/parseable/string/char_class.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/error.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/node_control.hpp>
#include <tenzir/pipeline.hpp>

#include <arrow/type.h>

namespace tenzir::plugins::import {

namespace {

class import_operator final : public crtp_operator<import_operator> {
public:
  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<std::monostate> {
    const auto start_time = std::chrono::steady_clock::now();
    // TODO: Some of the the requests this operator makes are blocking, so we
    // have to create a scoped actor here; once the operator API uses async we
    // can offer a better mechanism here.
    auto self = caf::scoped_actor{ctrl.self().system()};
    auto components = get_node_components<importer_actor>(self, ctrl.node());
    TENZIR_ASSERT_CHEAP(components);
    auto [importer] = std::move(*components);
    auto total_events = size_t{0};
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      total_events += slice.rows();
      // TODO: This temporary solution does not apply back-pressure.
      ctrl.self().send(importer, std::move(slice));
    }
    TENZIR_VERBOSE(
      "waiting for completion of import after input stream has ended");
    // We empirically need this sleep here for the flushing to take any effect
    // afterwards. I do not fully understand why, but since we're about to
    // rewrite this operator anyways to create partitions in-band and to
    // directly send then to the catalog we may as well leave this in here for
    // now. –- DL, Dec 2023
    std::this_thread::sleep_for(std::chrono::milliseconds{100});
    ctrl.self()
      .request(importer, caf::infinite, atom::flush_v)
      .await([]() {},
             [&](caf::error& err) {
               diagnostic::error(add_context(err, "could not flush importer"))
                 .emit(ctrl.diagnostics());
             });
    co_yield {};
    const auto elapsed = std::chrono::steady_clock::now() - start_time;
    const auto rate
      = static_cast<double>(total_events)
        / std::chrono::duration_cast<
            std::chrono::duration<double, std::chrono::seconds::period>>(
            elapsed)
            .count();
    TENZIR_DEBUG("imported {} events in {}{}", total_events, data{elapsed},
                 std::isfinite(rate)
                   ? fmt::format(" at a rate of {:.2f} events/s", rate)
                   : "");
  }

  auto name() const -> std::string override {
    return "import";
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)filter, (void)order;
    return optimize_result{std::nullopt, event_order::unordered, copy()};
  }

  friend auto inspect(auto& f, import_operator& x) -> bool {
    (void)f, (void)x;
    return true;
  }

  auto location() const -> operator_location override {
    return operator_location::remote;
  }

  auto internal() const -> bool override {
    return true;
  }
};

class plugin final : public virtual operator_plugin<import_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.sink = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"import", "https://docs.tenzir.com/next/"
                                            "operators/sinks/import"};
    parser.parse(p);
    return std::make_unique<import_operator>();
  }
};

} // namespace

} // namespace tenzir::plugins::import

TENZIR_REGISTER_PLUGIN(tenzir::plugins::import::plugin)
