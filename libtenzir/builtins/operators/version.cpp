//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/series_builder.hpp>

namespace tenzir::plugins::version {

namespace {

class version_operator final : public crtp_operator<version_operator> {
public:
  version_operator() = default;

  auto operator()(operator_control_plane&) const -> generator<table_slice> {
    auto builder = series_builder{};
    auto event = builder.record();
    event.field("version", tenzir::version::version);
    event.field("major", std::stoull(tenzir::version::major));
    event.field("minor", std::stoull(tenzir::version::minor));
    event.field("patch", std::stoull(tenzir::version::patch));
    event.field("tweak", std::stoull(tenzir::version::tweak));
    co_yield builder.finish_assert_one_slice("tenzir.version");
  }

  auto name() const -> std::string override {
    return "version";
  }

  auto location() const -> operator_location override {
    return operator_location::local;
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)order;
    (void)filter;
    return do_not_optimize(*this);
  }

  friend auto inspect(auto& f, version_operator& x) -> bool {
    return f.object(x)
      .pretty_name("tenzir.plugins.version.version_operator")
      .fields();
  }
};

class plugin final : public virtual operator_plugin<version_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"version", "https://docs.tenzir.com/next/"
                                             "operators/sources/version"};
    parser.parse(p);
    return std::make_unique<version_operator>();
  }
};

} // namespace

} // namespace tenzir::plugins::version

TENZIR_REGISTER_PLUGIN(tenzir::plugins::version::plugin)
