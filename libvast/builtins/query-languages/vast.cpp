//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/concept/parseable/vast/expression.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/concept/printable/to_string.hpp>
#include <vast/error.hpp>
#include <vast/legacy_pipeline.hpp>
#include <vast/plugin.hpp>

namespace vast::plugins::vast {

namespace {

auto parse(std::string_view repr, const record& config,
           std::unordered_set<std::string>& recursed)
  -> caf::expected<pipeline> {
  auto ops = std::vector<operator_ptr>{};
  // plugin name parser
  using parsers::plugin_name, parsers::chr, parsers::space,
    parsers::optional_ws_or_comment, parsers::end_of_pipeline_operator;
  const auto operator_name_parser = optional_ws_or_comment >> plugin_name;
  // TODO: allow more empty string
  while (!repr.empty()) {
    // 1. parse a single word as operator plugin name
    const auto* f = repr.begin();
    const auto* const l = repr.end();
    auto operator_name = std::string{};
    if (!operator_name_parser(f, l, operator_name)) {
      return caf::make_error(ec::syntax_error,
                             fmt::format("failed to parse pipeline '{}': "
                                         "operator name is invalid",
                                         repr));
    }
    // 2a. find plugin using operator name
    const auto* plugin = plugins::find<operator_plugin>(operator_name);
    // 2b. find alias definition in `vast.operators` (and `vast.operators`)
    auto new_config_prefix = "vast.operators";
    auto old_config_prefix = "vast.pipelines";
    auto definition = static_cast<const std::string*>(nullptr);
    auto used_config_prefix = std::string{};
    auto used_config_key = std::string{};
    for (auto prefix : {new_config_prefix, old_config_prefix}) {
      auto key = fmt::format("{}.{}", prefix, operator_name);
      auto type_clash = bool{};
      definition = get_if<std::string>(&config, key, &type_clash);
      if (type_clash) {
        return caf::make_error(ec::invalid_configuration,
                               fmt::format("malformed config: `{}` must "
                                           "be a record that maps to strings",
                                           prefix));
      }
      if (definition) {
        if (prefix == old_config_prefix) {
          VAST_WARN("configuring operator aliases with `{}` is deprecated, use "
                    "`{}` instead",
                    old_config_prefix, new_config_prefix);
        }
        used_config_prefix = prefix;
        used_config_key = key;
        break;
      }
    }
    if (plugin && definition) {
      return caf::make_error(ec::lookup_error,
                             "the operator {} is defined by a plugin, but also "
                             "by the `{}` config",
                             operator_name, used_config_prefix);
    }
    if (plugin) {
      // 3a. ask the plugin to parse itself from the remainder
      auto [remaining_repr, op] = plugin->make_operator(std::string_view{f, l});
      if (!op)
        return caf::make_error(ec::unspecified,
                               fmt::format("failed to parse pipeline '{}': {}",
                                           repr, op.error()));
      ops.push_back(std::move(*op));
      repr = remaining_repr;
    } else if (definition) {
      // 3b. parse the definition of the operator recursively
      auto [_, inserted] = recursed.emplace(operator_name);
      if (!inserted)
        return caf::make_error(ec::invalid_configuration,
                               fmt::format("the definition of "
                                           "`{}` is recursive",
                                           used_config_key));
      auto result = parse(*definition, config, recursed);
      recursed.erase(operator_name);
      if (!result)
        return caf::make_error(ec::invalid_configuration,
                               fmt::format("{} (while parsing `{}`)",
                                           result.error(), used_config_key));
      ops.push_back(std::make_unique<pipeline>(std::move(*result)));
      auto rest = optional_ws_or_comment >> end_of_pipeline_operator;
      if (!rest(f, l, unused))
        return caf::make_error(
          ec::unspecified,
          fmt::format("expected end of operator while parsing '{}'", repr));
      repr = std::string_view{f, l};
    } else {
      return caf::make_error(ec::syntax_error,
                             fmt::format("failed to parse pipeline '{}': "
                                         "operator '{}' does not exist",
                                         repr, operator_name));
    }
  }
  return pipeline{std::move(ops)};
}

class plugin final : public virtual legacy_language_plugin,
                     public virtual language_plugin {
  auto initialize(const record&, const record& global_config)
    -> caf::error override {
    config_ = global_config;
    return caf::none;
  }

  auto name() const -> std::string override {
    return "VAST";
  }

  auto parse_query(std::string_view query) const
    -> caf::expected<pipeline> override {
    auto recursed = std::unordered_set<std::string>{};
    return parse(query, config_, recursed);
  }

  [[nodiscard]] caf::expected<
    std::pair<expression, std::optional<legacy_pipeline>>>
  make_query(std::string_view query) const override {
    static const auto match_everything = expression{predicate{
      meta_extractor{meta_extractor::kind::type},
      relational_operator::not_equal,
      data{"this expression matches everything"},
    }};
    if (query.empty()) {
      return std::pair{
        match_everything,
        std::optional<legacy_pipeline>{},
      };
    }
    using parsers::space, parsers::expr, parsers::eoi,
      parsers::optional_ws_or_comment;
    // Try to parse pipline first, because e.g. `head` is both a valid
    // expression and a valid pipeline.
    auto parsed_pipeline = legacy_pipeline::parse("export", query);
    if (parsed_pipeline) {
      return std::pair{match_everything, std::move(*parsed_pipeline)};
    }
    auto f = query.begin();
    const auto l = query.end();
    auto parsed_expr = expression{};
    bool has_expr = true;
    const auto expr_parser = optional_ws_or_comment >> expr;
    if (!expr_parser(f, l, parsed_expr)) {
      VAST_DEBUG("failed to parse expr from '{}'", query);
      parsed_expr = match_everything;
      has_expr = false;
    }
    VAST_DEBUG("parsed expr = {}", parsed_expr);
    // <expr> | <pipeline>
    //       ^ we start here
    const auto has_no_pipeline_parser = optional_ws_or_comment >> eoi;
    if (has_no_pipeline_parser(f, l, unused)) {
      return std::pair{
        std::move(parsed_expr),
        std::optional<legacy_pipeline>{},
      };
    }
    if (has_expr) {
      const auto has_pipeline_parser = optional_ws_or_comment >> '|';
      if (!has_pipeline_parser(f, l, unused)) {
        return caf::make_error(ec::syntax_error,
                               fmt::format("failed to parse "
                                           "pipeline in query "
                                           "'{}': missing pipe",
                                           query));
      }
    }
    const auto pipeline_query = std::string_view{f, l};
    parsed_pipeline = legacy_pipeline::parse("export", pipeline_query);
    if (!parsed_pipeline) {
      return caf::make_error(ec::syntax_error,
                             fmt::format("failed to parse pipeline in query "
                                         "'{}': {}",
                                         query, parsed_pipeline.error()));
    }
    VAST_DEBUG("parsed pipeline = {}", pipeline_query);
    return std::pair{
      std::move(parsed_expr),
      std::move(*parsed_pipeline),
    };
  }

private:
  record config_;
};

} // namespace

} // namespace vast::plugins::vast

VAST_REGISTER_PLUGIN(vast::plugins::vast::plugin)