---
name: test-first
description: Build a feature or fix a bug test first, one thin vertical slice at a time, with tests at agreed seams that check behaviour rather than internals. Use when the person who asked wants work done test first, mentions red-green-refactor, or wants tests that survive a rewrite of the code they cover.
license: MIT
metadata:
  role: builder
  source_repo: mattpocock/skills
  source_commit: b0618bc436ad893b3c5e84e55fba86586d34a404
  source_paths: skills/engineering/tdd
---

# Test first

Work in a loop: write a test that fails (red), then write just enough to make
it pass (green). This Skill is what makes the loop produce tests worth
keeping. Every part of it applies on every cycle: read it before the loop and
keep it in view during the loop, not after.

Name tests and interfaces in the vocabulary the project already uses, and
keep to the decisions it has already recorded in the area you are working in.

## A good test

A good test checks behaviour through a public interface, never the details
behind it. The code inside can be rewritten completely and the test should
not notice. Read on its own, a good test is a line of specification: "a
customer can pay for a valid cart" says what the system can do, and it
survives a rewrite because it does not care how.

[tests.md](tests.md) has examples of good and bad tests; [mocking.md](mocking.md)
says what to fake and what never to fake.

## Seams

A seam is the public boundary a test stands at: the place where behaviour can
be observed without reaching inside. Tests live at seams, never against
internals.

Test only at seams agreed beforehand. Before writing any test, write down the
seams you mean to test and confirm them with the person who asked; write no
test at a seam they have not confirmed. Not everything can be tested, and
agreeing the seams first is how the effort lands on the critical paths and
the hard logic rather than on every edge case. For each seam you propose, say
in a line what it catches and what it misses.

When the right seam is itself in question (how deep a part should be, where
its boundary belongs, what its interface should expose), that is a design
question. Settle it before you test at the seam.

## What to avoid

- **Tests tied to the implementation.** They fake the code's own
  collaborators, test private functions, or check a result by going around
  the interface, for example by reading the database instead of asking the
  interface. The sign: the test breaks when the code is restructured though
  its behaviour has not changed.
- **Tests that agree by construction.** The expected value is worked out the
  same way the code works it out, so the test can never disagree with the
  code. Take expected values from a source independent of the code: a known
  literal, a worked example, the spec.
- **Horizontal slices.** Writing every test first and all the code after.
  Tests written in bulk check imagined behaviour: they pin down the shape of
  things rather than what a user sees, they stop noticing real changes, and
  they fix the structure of the tests before the implementation is
  understood. Work in vertical slices instead: one test, then the code that
  passes it, then the next. Each test is a tracer that follows what the last
  cycle taught you.

## The loop

- **Red before green.** Write the failing test first, then only the code that
  makes it pass. Do not write for tests that do not exist yet, and add nothing
  speculative.
- **One slice at a time.** One seam, one test, one minimal change per cycle.
- **Refactor after the loop, not inside it.** Restructuring belongs to review,
  once the slices are green, not to the red-to-green cycle.
