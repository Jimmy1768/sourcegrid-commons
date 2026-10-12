---
name: diagnose
description: Find the cause of a hard bug or a performance regression by first building a fast, reliable signal that fails on the bug, then reproducing, narrowing, testing ranked hypotheses and fixing behind a regression test. Use when something is broken, throwing, failing or slow, or the person who asked wants a bug diagnosed.
license: MIT
metadata:
  role: builder
  source_repo: mattpocock/skills
  source_commit: b0618bc436ad893b3c5e84e55fba86586d34a404
  source_paths: skills/engineering/diagnosing-bugs
---

# Diagnose

A discipline for hard bugs. Skip a phase only when you can say why it does not
apply.

Learn the parts of the system the bug touches in the project's own
vocabulary, and check the decisions the project has recorded in that area.

## Redact

This Skill has you show commands, output and captured material. Redact every
secret before you show anything: write `<REDACTED>` in its place. Keep
credentials in the environment the loop runs in, not in what you show.
Captured requests carry authorisation headers: quote only the lines that
carry the signal.

If the redacted material is not enough to diagnose the bug, say so and ask
the person who asked.

## Phase 1: build a feedback loop

This is the whole of the skill; everything after it is mechanical. With a
tight pass-or-fail signal that goes red on this bug, you will find the cause:
narrowing, hypothesis testing and instrumentation all simply consume it.
Without one, no amount of reading the code will save you.

Spend most of your effort here. Be inventive, and do not give up.

### Ways to build one, roughly in this order

1. A failing test at whatever seam reaches the bug: a unit test, an
   integration test, or a test of the whole system.
2. A script of HTTP requests against a running development server.
3. A command-line run with a fixture input, its output compared with a
   known-good copy.
4. A scripted browser that drives the interface and asserts on the page, the
   console or the network.
5. A replay of a captured trace: save a real request, payload or event log,
   and send it through the code path on its own.
6. A throwaway harness: start the smallest part of the system that reaches
   the bug, with its other dependencies faked, and trigger the bug with a
   single call.
7. A property or fuzz loop: if the bug is "sometimes the output is wrong",
   run a thousand random inputs and look for the failure.
8. A bisection harness: if the bug appeared between two known states (two
   versions of the code, of a dataset, of a dependency), automate "start at
   this state, check, repeat" so the search between them runs unattended.
9. A differential loop: run the same input through the old version and the
   new one, or two configurations, and compare the output.
10. A guided manual loop, as a last resort: if a person must act, script
    their steps for them so the loop stays structured, and capture what they
    see for you to read.

Build the right feedback loop and the bug is most of the way fixed.

### Tighten the loop

Once you have a loop, make it better:

- Faster: cache setup, skip unrelated start-up, narrow what runs.
- Sharper: assert on the specific symptom, not on "did not crash".
- More reliable: pin the time, seed the randomness, isolate the file system,
  freeze the network.

A slow loop that sometimes lies is barely better than none. A fast one that
always gives the same answer changes what you can do.

### Bugs that do not always happen

Aim for a higher reproduction rate, not a perfect one. Run the trigger a
hundred times, in parallel, under load; narrow the timing windows; add
delays. A bug that shows half the time can be debugged; one that shows once
in a hundred runs cannot, so keep raising the rate until it can.

### When you cannot build a loop

Stop and say so plainly, listing what you tried. Ask the person who asked
for one of: access to an environment where the bug happens; a redacted
captured artefact, such as a network log, a log dump, a crash dump or a
timestamped screen recording; or permission to add temporary instrumentation
in production. Do not go on to hypothesise without a loop.

### Phase 1 is done when

You can name one command that you have already run at least once (show the
command and its redacted output), and it is:

- **Red-capable**: it runs the real code path and checks for the exact
  symptom that was reported, so it can fail on this bug and pass once the bug
  is fixed. Running without an error is not enough.
- **Reliable**: it gives the same verdict every time (for bugs that do not
  always happen, a known and high reproduction rate).
- **Fast**: seconds, not minutes.
- **Unattended**: you can run it without anyone's help, except through a
  guided manual loop as above.

If you find yourself reading code to build a theory before this command
exists, stop. Jumping to a hypothesis is exactly the failure this discipline
prevents. No red-capable command, no Phase 2.

## Phase 2: reproduce and shrink

Run the loop and watch it go red.

Confirm that:

- the failure is the one the person who asked described, not a different
  failure nearby (the wrong bug leads to the wrong fix);
- it happens across repeated runs, or for bugs that do not always happen, at
  a rate high enough to work against;
- you have captured the exact symptom (the error, the wrong output, the slow
  timing), so the later phases can show the fix addresses it.

### Shrink

Once it is red, cut the case down to the smallest one that still fails.
Remove inputs, callers, configuration, data and steps one at a time,
re-running the loop after each cut, and keep only what the failure needs.

A minimal case shrinks the number of suspects in Phase 3, and it becomes the
regression test in Phase 5.

It is minimal when every remaining part matters: removing any one of them
makes the loop pass.

Do not go on until you have both reproduced and shrunk the case.

## Phase 3: hypothesise

Write three to five ranked hypotheses before testing any of them. A single
hypothesis anchors on the first plausible idea.

Each must be falsifiable, stating what it predicts:

> If X is the cause, then changing Y will make the bug go away, or changing
> Z will make it worse.

A hypothesis that predicts nothing is a hunch: sharpen it or drop it.

Show the ranked list to the person who asked before testing it. They often
know something that reorders it at once, or have already ruled one out. It
costs little and saves a lot, but do not wait on it: if they are not there,
go ahead with your own ranking.

## Phase 4: instrument

Each probe tests one prediction from Phase 3. Change one thing at a time.

In order of preference:

1. A debugger or an interactive session, where the environment has one: one
   well-placed breakpoint beats ten log lines.
2. Targeted log lines at the boundaries that tell the hypotheses apart.
3. Never "log everything and search".

Mark every temporary log line with one unique tag, such as `[DEBUG-a4f2]`, so
that removing them later is a single search. Untagged log lines get left
behind.

For a performance regression, log lines are usually the wrong tool. Measure
a baseline first, with a timing harness, a profiler or a query plan, then
narrow the search between the fast state and the slow one. Measure first,
fix second.

## Phase 5: fix behind a regression test

Write the regression test before the fix, but only where there is a correct
seam for it.

A correct seam is one where the test reproduces the bug as it really happens
at the place it is triggered. If the only seam available is too shallow (a
test of one caller when the bug needs several, a unit test that cannot
reproduce the chain of calls that set it off), a regression test there gives
false confidence.

If no correct seam exists, that is itself a finding: the structure of the
code is preventing this bug from being locked down. Say so in your report.

If a correct seam exists:

1. Turn the minimal case into a failing test at that seam.
2. Watch it fail. If you forced the failure by changing code or a fixture,
   compare against an untouched copy to prove your change took effect before
   you trust the result.
3. Apply the fix.
4. Watch the test pass.
5. Run the Phase 1 loop again against the original, unshrunk case.

## Phase 6: clean up

Before you call it done:

- The original case no longer reproduces: the Phase 1 loop passes.
- The regression test passes, or the missing seam is reported.
- Every tagged temporary log line is removed: search for the tag.
- Throwaway prototypes are deleted, or moved somewhere clearly marked as
  debugging material.
- The hypothesis that proved correct is stated in your report to the person
  who asked, so the next person to debug this learns from it.
