//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/collect.hpp"
#include "vast/detail/string_literal.hpp"
#include "vast/diagnostics.hpp"
#include "vast/file.hpp"
#include "vast/parser_interface.hpp"
#include "vast/plugin.hpp"
#include "vast/table_slice.hpp"
#include "vast/test/stdin_file_inut.hpp"
#include "vast/test/test.hpp"
#include "vast/tql/parser.hpp"

#include <arrow/record_batch.h>
#include <caf/error.hpp>
#include <caf/test/dsl.hpp>

#include <filesystem>

using namespace vast;

using test::stdin_file_input;

namespace {

struct fixture {
  struct mock_control_plane final : operator_control_plane {
    auto self() noexcept -> execution_node_actor::base& override {
      FAIL("no mock implementation available");
    }

    auto node() noexcept -> node_actor override {
      FAIL("no mock implementation available");
    }

    auto abort(caf::error) noexcept -> void override {
      FAIL("no mock implementation available");
    }

    auto warn([[maybe_unused]] caf::error warning) noexcept -> void override {
      FAIL("no mock implementation available");
    }

    auto emit([[maybe_unused]] table_slice metrics) noexcept -> void override {
      FAIL("no mock implementation available");
    }

    [[nodiscard]] auto schemas() const noexcept
      -> const std::vector<type>& override {
      FAIL("no mock implementation available");
    }

    [[nodiscard]] auto concepts() const noexcept
      -> const concepts_map& override {
      FAIL("no mock implementation available");
    }

    auto diagnostics() noexcept -> diagnostic_handler& override {
      static auto diag = null_diagnostic_handler{};
      return diag;
    }
  };

  auto make_loader(std::string_view name, std::string args)
    -> std::unique_ptr<plugin_loader> {
    loader_plugin = vast::plugins::find<vast::loader_parser_plugin>(name);
    REQUIRE(loader_plugin);
    auto diag = null_diagnostic_handler{};
    auto p = tql::make_parser_interface(std::move(args), diag);
    return loader_plugin->parse_loader(*p);
  }

  fixture() {
    // TODO: Move this into a separate fixture when we are starting to test more
    // than one loader type.
    current_loader = [this] {
      auto result = make_loader("stdin", "")->instantiate(control_plane);
      REQUIRE(result);
      return std::move(*result);
    };
  }

  const vast::loader_parser_plugin* loader_plugin;
  std::function<auto()->generator<chunk_ptr>> current_loader;
  mock_control_plane control_plane;
};

} // namespace

FIXTURE_SCOPE(loader_plugin_tests, fixture)

TEST(stdin loader - process simple input) {
  stdin_file_input<"artifacts/inputs/simple.txt"> file;
  auto str = std::string{"foobarbaz\n"};
  auto str_chunk = chunk::copy(str);
  auto chunks = collect(current_loader());
  REQUIRE_EQUAL(chunks.size(), size_t{1});
  REQUIRE(std::equal(chunks.front()->begin(), chunks.front()->end(),
                     str_chunk->begin(), str_chunk->end()));
}

TEST(stdin loader - no input) {
  stdin_file_input<"artifacts/inputs/nothing.txt"> file;
  auto str = std::string{""};
  auto str_chunk = chunk::copy(str);
  auto chunks = collect(current_loader());
  REQUIRE(chunks.empty());
}

TEST(stdin loader - process input with linebreaks) {
  stdin_file_input<"artifacts/inputs/linebreaks.txt"> file;
  auto str = std::string{"foo\nbar\nbaz\n"};
  auto str_chunk = chunk::copy(str);
  auto chunks = collect(current_loader());
  REQUIRE_EQUAL(chunks.size(), size_t{1});
  REQUIRE(std::equal(chunks.front()->begin(), chunks.front()->end(),
                     str_chunk->begin(), str_chunk->end()));
}

TEST(stdin loader - process input with spaces and tabs) {
  stdin_file_input<"artifacts/inputs/spaces_and_tabs.txt"> file;
  auto str = std::string{"foo bar\tbaz\n"};
  auto str_chunk = chunk::copy(str);
  auto chunks = collect(current_loader());
  REQUIRE_EQUAL(chunks.size(), size_t{1});
  REQUIRE(std::equal(chunks.front()->begin(), chunks.front()->end(),
                     str_chunk->begin(), str_chunk->end()));
}

TEST(stdin loader - chunking longer input) {
  stdin_file_input<"artifacts/inputs/longer_input.txt"> file;
  constexpr auto max_chunk_size = size_t{16384};
  const auto file_size = std::filesystem::file_size(
    VAST_TEST_PATH "artifacts/inputs/longer_input.txt");
  auto chunks = collect(current_loader());
  REQUIRE_EQUAL(chunks.size(), size_t{3});
  REQUIRE_EQUAL(chunks[0]->size(), max_chunk_size);
  REQUIRE_EQUAL(chunks[1]->size(), max_chunk_size);
  REQUIRE_EQUAL(chunks[2]->size(), file_size - (max_chunk_size * 2));
}

TEST(stdin loader - one complete chunk) {
  stdin_file_input<"artifacts/inputs/one_complete_chunk.txt"> file;
  constexpr auto max_chunk_size = size_t{16384};
  auto str = std::string(max_chunk_size - 1, '1');
  str += '\n';
  auto str_chunk = chunk::copy(str);
  auto chunks = collect(current_loader());
  REQUIRE_EQUAL(chunks.size(), size_t{1});
  REQUIRE_EQUAL(chunks.front()->size(), max_chunk_size);
  REQUIRE(std::equal(chunks.front()->begin(), chunks.front()->end(),
                     str_chunk->begin(), str_chunk->end()));
}

TEST(file loader - parser deduction) {
  CHECK_EQUAL(make_loader("file", "--timeout 1s foo.csv")->default_parser(),
              "csv");
  CHECK_EQUAL(make_loader("file", "--timeout 1s foo.ndjson")->default_parser(),
              "json");
  CHECK_EQUAL(make_loader("file", "--timeout 1s eve.json")->default_parser(),
              "suricata");
  CHECK_EQUAL(make_loader("file", "--timeout 1s -")->default_parser(), "json");
}

TEST(file loader - nonexistent file) {
  CHECK_EQUAL(make_loader("file", "no-file-oops")->instantiate(control_plane),
              std::nullopt);
}

// TODO: Does not run unter Ubuntu CI unit test step.
/*
TEST(file loader - unreadable file) {
  auto current_epoch = std::time(nullptr);
  auto unique_temp_file
    = fmt::format("{}/read_restricted_{}.json",
                  std::filesystem::temp_directory_path(), current_epoch);
  file f{unique_temp_file};
  REQUIRE(f.open(file::write_only));
  REQUIRE(f.handle() > 0);
  std::filesystem::permissions(unique_temp_file,
                               std::filesystem::perms::group_write
                                 | std::filesystem::perms::owner_write
                                 | std::filesystem::perms::others_write);
  loader_plugin = vast::plugins::find<vast::loader_plugin>("file");
  auto args = std::vector<std::string>{unique_temp_file};
  REQUIRE(loader_plugin);
  REQUIRE_ERROR(loader_plugin->make_loader(args, control_plane));
  REQUIRE(f.close());
  CHECK(std::filesystem::remove_all(unique_temp_file));
}*/

FIXTURE_SCOPE_END()