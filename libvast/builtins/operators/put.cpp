//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/arrow_table_slice.hpp>
#include <vast/concept/parseable/to.hpp>
#include <vast/concept/parseable/vast/data.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/detail/narrow.hpp>
#include <vast/error.hpp>
#include <vast/legacy_pipeline.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice_builder.hpp>
#include <vast/type.hpp>

#include <arrow/array.h>
#include <fmt/format.h>

namespace vast::plugins::put {

namespace {

/// The parsed configuration.
struct configuration {
  std::vector<std::tuple<std::string, data>> extractor_to_value = {};
};

/// The confguration bound to a specific schema.
struct bound_configuration {
  /// Bind a *configuration* to a given schema.
  /// @param schema The schema to bind to.
  /// @param config The parsed configuration.
  static caf::expected<bound_configuration>
  make(const type& schema, const configuration& config) {
    auto result = bound_configuration{};
    const auto& schema_rt = caf::get<record_type>(schema);
    auto extensions = std::vector<std::tuple<std::string, data, type>>{};
    for (const auto& [extractor, value] : config.extractor_to_value) {
      bool found = false;
      // If the extractor resolves, we replace all matched fields.
      for (const auto& index :
           schema_rt.resolve_key_suffix(extractor, schema.name())) {
        found = true;
        result.transformations.push_back({index, make_replace(value)});
      }
      // If the extractor did not resolve, we instead add one new field at the
      // end.
      if (not found) {
        auto inferred_type = type::infer(value);
        if (not inferred_type)
          return caf::make_error(ec::logic_error,
                                 fmt::format("failed to infer type from '{}'",
                                             value));
        extensions.emplace_back(extractor, value, std::move(inferred_type));
      }
    }
    if (not extensions.empty())
      result.transformations.push_back(
        {{schema_rt.num_fields() - 1}, make_extend(std::move(extensions))});
    std::sort(result.transformations.begin(), result.transformations.end());
    result.transformations.erase(std::unique(result.transformations.begin(),
                                             result.transformations.end()),
                                 result.transformations.end());
    return result;
  }

  /// Create a transformation function for a single value.
  static indexed_transformation::function_type make_replace(data value) {
    auto inferred_type = type::infer(value);
    return
      [inferred_type = std::move(inferred_type),
       value = std::move(value)](struct record_type::field field,
                                 std::shared_ptr<arrow::Array> array) noexcept
      -> std::vector<
        std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>> {
      field.type = inferred_type;
      array = make_array(field.type, value, array->length());
      return {
        {
          std::move(field),
          std::move(array),
        },
      };
    };
  }

  /// Create a transformation function for a single value.
  static indexed_transformation::function_type
  make_extend(std::vector<std::tuple<std::string, data, type>> extensions) {
    return [extensions = std::move(extensions)](
             struct record_type::field field,
             std::shared_ptr<arrow::Array> array) noexcept {
      auto result = std::vector<
        std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>>{};
      const auto length = array->length();
      result.reserve(extensions.size() + 1);
      result.emplace_back(std::move(field), std::move(array));
      for (const auto& [name, value, type] : extensions) {
        auto& extension = result.emplace_back();
        extension.first.name = name;
        extension.first.type = type;
        extension.second = make_array(type, value, length);
      }
      return result;
    };
  }

  static auto make_array(const type& type, const data& value, int64_t length)
    -> std::shared_ptr<arrow::Array> {
    auto builder = type.make_arrow_builder(arrow::default_memory_pool());
    auto f = [&]<concrete_type Type>(const Type& type) {
      if (caf::holds_alternative<caf::none_t>(value)) {
        for (int i = 0; i < length; ++i) {
          const auto append_status = builder->AppendNull();
          VAST_ASSERT(append_status.ok(), append_status.ToString().c_str());
        }
      } else {
        for (int i = 0; i < length; ++i) {
          VAST_ASSERT(caf::holds_alternative<type_to_data_t<Type>>(value));
          const auto append_status
            = append_builder(type,
                             caf::get<type_to_arrow_builder_t<Type>>(*builder),
                             make_view(caf::get<type_to_data_t<Type>>(value)));
          VAST_ASSERT(append_status.ok(), append_status.ToString().c_str());
        }
      }
    };
    caf::visit(f, type);
    return builder->Finish().ValueOrDie();
  }

  /// The list of configured transformations.
  std::vector<indexed_transformation> transformations = {};
};

class put_operator : public logical_operator<events, events> {
public:
  explicit put_operator(configuration config) noexcept
    : config_{std::move(config)} {
    // nop
  }

  [[nodiscard]] auto make_physical_operator(const type& input_schema,
                                            operator_control_plane&) noexcept
    -> caf::expected<physical_operator<events, events>> override {
    auto bound_config = bound_configuration::make(input_schema, config_);
    if (!bound_config)
      return bound_config.error();
    return [transformations = std::move(bound_config->transformations)](
             generator<table_slice> input) -> generator<table_slice> {
      for (auto&& slice : input) {
        co_yield transform_columns(slice, transformations);
      }
    };
  }

  [[nodiscard]] auto to_string() const noexcept -> std::string override {
    auto map = std::vector<std::pair<std::string, data>>{
      config_.extractor_to_value.begin(), config_.extractor_to_value.end()};
    std::sort(map.begin(), map.end());
    auto result = std::string{"put"};
    bool first = true;
    for (auto& [key, value] : map) {
      if (first) {
        first = false;
      } else {
        result += ',';
      }
      result += fmt::format(" {}={}", key, value);
    }
    return result;
  }

  [[nodiscard]] auto predicate_pushdown(expression const&) const noexcept
    -> std::optional<std::pair<expression, logical_operator_ptr>> override {
    return {};
  }

private:
  /// The underlying configuration of the transformation.
  configuration config_ = {};
};

class plugin final : public virtual logical_operator_plugin {
public:
  caf::error initialize([[maybe_unused]] const record& plugin_config,
                        [[maybe_unused]] const record& global_config) override {
    return {};
  }

  [[nodiscard]] std::string name() const override {
    return "put";
  };

  [[nodiscard]] std::pair<std::string_view, caf::expected<logical_operator_ptr>>
  make_logical_operator(std::string_view pipeline) const override {
    using parsers::end_of_pipeline_operator, parsers::required_ws_or_comment,
      parsers::optional_ws_or_comment, parsers::extractor_value_assignment_list,
      parsers::data;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = required_ws_or_comment >> extractor_value_assignment_list
                   >> optional_ws_or_comment >> end_of_pipeline_operator;
    auto config = configuration{};
    if (!p(f, l, config.extractor_to_value)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error, fmt::format("failed to parse extend "
                                                      "operator: '{}'",
                                                      pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<put_operator>(std::move(config)),
    };
  }
};

} // namespace

} // namespace vast::plugins::put

VAST_REGISTER_PLUGIN(vast::plugins::put::plugin)
