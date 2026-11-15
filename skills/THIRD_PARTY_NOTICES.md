# Third-party notices

## How a built Skill records its source

A Skill built from someone else's work records in its own header:

- `source_fingerprint: sha256:<64 hex digits>` — the SHA-256 of the source's
  files at `source_commit`: the files named in `source_paths`, taken in the
  order `source_paths` lists them, each file's bytes followed by one NUL byte
  (`0x00`), joined in that order.
- `adaptation: rewritten` or `adaptation: pointed` — `rewritten` means the
  Skill keeps the source's judgment in our own words; `pointed` means the
  Skill only points at the source and reproduces none of its text.

A source under AGPL, or under mixed or unclear licensing, is only ever pointed at: none of its text is copied or rewritten into a Skill.

A Skill's own values live in its own header; this file states the rule.

## mattpocock/skills

- Source: https://github.com/mattpocock/skills
- Commit: `b0618bc436ad893b3c5e84e55fba86586d34a404`
- Licence: MIT

These Skills adapt it. Each keeps its source's judgment, rewritten, and
leaves out its source's process.

| Skill | Adapted from (paths at the commit above) |
| --- | --- |
| `aide/interview` | `skills/productivity/grilling`, `skills/productivity/grill-me` |
| `aide/spec` | `skills/engineering/to-spec` |
| `builder/test-first` (with `tests.md`, `mocking.md`) | `skills/engineering/tdd` (with its `tests.md`, `mocking.md`) |
| `builder/diagnose` | `skills/engineering/diagnosing-bugs` (its `scripts/` not carried) |
| `reviewer/review` | `skills/engineering/code-review` |

The source's licence:

```
MIT License

Copyright (c) 2026 Matt Pocock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
