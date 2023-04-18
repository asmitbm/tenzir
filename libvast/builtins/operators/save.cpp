//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/arrow_table_slice.hpp>
#include <vast/concept/convertible/data.hpp>
#include <vast/concept/convertible/to.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/element_type.hpp>
#include <vast/error.hpp>
#include <vast/pipeline.hpp>
#include <vast/plugin.hpp>
#include <vast/type.hpp>

#include <arrow/type.h>
#include <caf/expected.hpp>

#include <algorithm>
#include <utility>

namespace vast::plugins::save {

namespace {

/// The operator for saving data that will have to be joined later
/// during pipeline execution.
class save_operator final : public crtp_operator<save_operator> {
public:
  explicit save_operator(const saver_plugin& saver,
                         std::vector<std::string> args) noexcept
    : saver_plugin_{saver}, args_{std::move(args)} {
  }

  auto
  operator()(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> generator<std::monostate> {
    // TODO: Extend API to allow schema-less make_saver().
    auto new_saver = saver_plugin_.make_saver(args_, {}, ctrl);
    if (!new_saver) {
      ctrl.abort(new_saver.error());
      co_return;
    }
    for (auto&& x : input) {
      (*new_saver)(std::move(x));
      co_yield {};
    }
  }

  auto to_string() const -> std::string override {
    return fmt::format("save {}", saver_plugin_.name());
  }

private:
  const saver_plugin& saver_plugin_;
  std::vector<std::string> args_;
};

class plugin final : public virtual operator_plugin {
public:
  auto initialize(const record&, const record&) -> caf::error override {
    return {};
  }

  auto name() const -> std::string override {
    return "save";
  };

  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::optional_ws_or_comment, parsers::end_of_pipeline_operator,
      parsers::plugin_name, parsers::required_ws_or_comment;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = optional_ws_or_comment >> plugin_name
                   >> optional_ws_or_comment >> end_of_pipeline_operator;
    auto saver_name = std::string{};
    if (!p(f, l, saver_name)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error,
                        fmt::format("failed to parse save operator: '{}'",
                                    pipeline)),
      };
    }
    const auto* saver = plugins::find<saver_plugin>(saver_name);
    if (!saver) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::lookup_error,
                        fmt::format("no saver found for '{}'", saver_name)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<save_operator>(*saver, std::vector<std::string>{}),
    };
  }
};

} // namespace

} // namespace vast::plugins::save

VAST_REGISTER_PLUGIN(vast::plugins::save::plugin)
