---
name: spec
description: Write what has already been discussed into a spec of the problem, the solution and the decisions behind them, by synthesis rather than further interview. Use when the shape of a piece of work has been agreed and needs writing down before it is built.
license: MIT
metadata:
  role: aide
  source_repo: mattpocock/skills
  source_commit: b0618bc436ad893b3c5e84e55fba86586d34a404
  source_paths: skills/engineering/to-spec
---

# Spec

Write a spec from what you already know: the conversation so far and your
understanding of the work. This is synthesis, not an interview. If a decision
the spec needs is genuinely missing, say which one; do not start a new round
of questions.

## Before writing

1. Learn the current state of whatever the spec will change, if you have not
   already. Write in the vocabulary the project itself uses, and keep to the
   decisions it has already recorded in that area.
2. Sketch the seams where the work will be tested: the public boundaries
   where its behaviour can be observed without reaching inside. Prefer seams
   that already exist to new ones, and the highest seam that works to a lower
   one. The fewer seams the better; the ideal is one. Where a new seam is
   needed, propose it as high as it can go.
3. Check with the person who asked that these seams match what they expect.

## The spec

Use these sections, in this order.

### Problem

The problem, as the people who have it see it.

### Solution

The solution, also as they see it.

### User stories

A long, numbered list that covers every part of the work, each story in the
form:

1. As a <who>, I want <what>, so that <why>.

For example: "As a shop owner, I want each day's orders in one list, so that
I can pack them in a single pass." Err towards too many stories rather than
too few.

### Implementation decisions

The decisions already made: which parts are built or changed, the interfaces
between them, architectural choices, data shapes, contracts with other
systems, particular interactions, and any technical clarifications given
along the way.

Leave out file paths and code; they go stale quickly. The one exception is a
short fragment from a prototype that states a decision more exactly than
prose can, such as a state machine or a data shape. Keep only the part that
carries the decision, and say that it came from a prototype.

### Testing decisions

- What makes a good test here: it checks behaviour seen from outside, not how
  the inside works.
- Which parts will be tested, and at which of the seams above.
- Existing tests that the new ones should resemble.

### Out of scope

What this work does not cover.

### Further notes

Anything else whoever builds it should know.
