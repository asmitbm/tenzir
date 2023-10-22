//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/strip_leading_indentation.hpp"
#include "tenzir/format/arrow.hpp"

#include <tenzir/argument_parser.hpp>
#include <tenzir/as_bytes.hpp>
#include <tenzir/chunk.hpp>
#include <tenzir/concept/parseable/string/quoted_string.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/error.hpp>
#include <tenzir/generator.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/si_literals.hpp>
#include <tenzir/type.hpp>

#include <arrow/api.h>
#include <arrow/io/api.h>
#include <arrow/ipc/api.h>
#include <boost/asio.hpp>
#include <boost/process.hpp>
#include <caf/detail/scope_guard.hpp>

#include <mutex>
#include <queue>
#include <thread>

namespace bp = boost::process;

namespace tenzir::plugins::python {
namespace {

auto PYTHON_SCAFFOLD = R"_(
from pytenzir.tools.python_operator_executor import main

main()
)_";

class python_operator final : public crtp_operator<python_operator> {
public:
  python_operator() = default;

  explicit python_operator(std::string code) {
    code_ = std::move(code);
  }

  auto execute(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    try {
      bp::pipe std_out;
      bp::pipe std_in;
      auto path = bp::search_path("python");
      TENZIR_DEBUG("using {} as python executable", path.string());
      bp::opstream codepipe; // pipe to transmit the code
      // TODO: We should probably also redirect stderr here and attempt
      //       to attach it to the error message in case of an error.
      auto child = bp::child{path,
                             "-c",
                             PYTHON_SCAFFOLD,
                             fmt::to_string(codepipe.pipe().native_source()),
                             bp::std_out > std_out,
                             bp::std_in < std_in};
      codepipe << code_;
      codepipe.close();
      for (auto&& slice : input) {
        if (slice.rows() == 0) {
          co_yield {};
          continue;
        }
        auto batch = to_record_batch(slice);
        auto stream = arrow::io::BufferOutputStream::Create().ValueOrDie();
        auto writer = arrow::ipc::MakeStreamWriter(
                        stream, slice.schema().to_arrow_schema())
                        .ValueOrDie();
        auto status = writer->WriteRecordBatch(*batch);
        if (!status.ok()) {
          ctrl.abort(caf::make_error(
            ec::system_error, fmt::format("failed to write record batch")));
          co_return;
        }
        auto result = stream->Finish();
        if (!result.status().ok()) {
          ctrl.abort(caf::make_error(ec::system_error,
                                     fmt::format("failed to write input")));
          co_return;
        }
        std_in.write(reinterpret_cast<const char*>((*result)->data()),
                     detail::narrow<int>((*result)->size()));
        auto file = format::arrow::arrow_fd_wrapper{std_out.native_source()};
        auto reader = arrow::ipc::RecordBatchStreamReader::Open(&file);
        if (!reader.status().ok()) {
          ctrl.abort(caf::make_error(
            ec::system_error, fmt::format("failed to open reader: {}",
                                          reader.status().CodeAsString())));
          co_return;
        }
        auto foo = (*reader)->ReadNext();
        if (!foo.status().ok()) {
          ctrl.abort(caf::make_error(ec::logic_error,
                                     fmt::format("failed to read batch: {}",
                                                 foo.status().CodeAsString())));
          co_return;
        }
        auto output = table_slice{foo->batch};
        auto new_type = type{"tenzir.python", output.schema()};
        auto actual_result
          = arrow::RecordBatch::Make(new_type.to_arrow_schema(),
                                     static_cast<int64_t>(output.rows()),
                                     foo->batch->columns());
        output = table_slice{actual_result, new_type};
        output = tenzir::unflatten(output, ".");
        co_yield output;
      }
      std_in.close();
      child.wait();
    } catch (const std::exception& ex) {
      ctrl.abort(caf::make_error(ec::logic_error, fmt::to_string(ex.what())));
    }
    co_return;
  }

  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    return execute(std::move(input), ctrl);
  }

  auto to_string() const -> std::string override {
    return code_;
  }

  auto name() const -> std::string override {
    return "python";
  }

  auto optimize(expression const& /*filter*/, event_order /*order*/) const
    -> optimize_result override {
    // Note: The `unordered` means that we do not necessarily return the first
    // `limit_` events.
    return optimize_result{std::nullopt, event_order::unordered, copy()};
  }

  friend auto inspect(auto& f, python_operator& x) -> bool {
    return f.apply(x.code_);
  }

private:
  std::string code_ = {};
};

class plugin final : public virtual operator_plugin<python_operator> {
public:
  auto signature() const -> operator_signature override {
    return {
      .transformation = true,
    };
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto command = std::string{};
    auto parser = argument_parser{"python", "https://docs.tenzir.com/next/"
                                            "operators/transformations/python"};
    parser.add(command, "<command>");
    parser.parse(p);
    return std::make_unique<python_operator>(std::move(command));
  }
};

} // namespace
} // namespace tenzir::plugins::python

TENZIR_REGISTER_PLUGIN(tenzir::plugins::python::plugin)
