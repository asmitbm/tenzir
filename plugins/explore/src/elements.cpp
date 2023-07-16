//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "explore/elements.hpp"

#include <vast/detail/string.hpp>

namespace vast::plugins::explore {

using namespace ftxui;

auto logo() -> Element {
  const auto *logo = R"__(
     @@@@@@@@@@@@@@@@@@@@    &@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@
            @@@@@@@@@    @@@@@@@@@
           @@@@@@@@@    @@@@@@@@@
          @@@@@@@@@    @@@@@@@@@
         @@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@
       @@@@@@@@@@@@@@@@@@@@@@
      @@@@@@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@@@
    )__";
  auto split = detail::split(logo, "\n");
  Elements elements;
  elements.reserve(split.size());
  for (const auto& line : split)
    elements.push_back(text(std::string{line}));
  return vbox(elements);
}

} // namespace vast::plugins::explore
