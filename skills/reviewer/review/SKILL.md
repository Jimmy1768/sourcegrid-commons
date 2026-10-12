---
name: review
description: Review a change along two separate axes, Standards (does it follow the project's documented standards, plus a baseline of well-known code smells?) and Spec (does it do what its spec asked for?), and report the two side by side without merging them. Use when the person who asked wants a change reviewed.
license: MIT
metadata:
  role: reviewer
  source_repo: mattpocock/skills
  source_commit: b0618bc436ad893b3c5e84e55fba86586d34a404
  source_paths: skills/engineering/code-review
---

# Review

Review the change under review along two axes:

- **Standards**: does the change follow the project's documented standards
  for how code is written?
- **Spec**: does the change do what its spec asked for?

Review each axis on its own, without sight of the other's findings, so that
neither colours the other. How the two reviews are run is not this Skill's
concern; keeping them separate is.

## 1. Fix the change under review

Be sure what the change is: what it is compared against, and what it
contains. If the person who asked has not made that clear, ask. Before
reviewing anything, confirm that the change exists and is not empty; a
missing or empty change should stop the review here, not halfway through.

## 2. Find the spec

Look for the spec the change was meant to implement: wherever the change
itself points to it, or wherever the person who asked says it is. If you
cannot find it, ask them where it is. If there is none, the Spec axis reports
"no spec available" and does nothing else.

## 3. Find the standards

Find every document in the project that says how its code should be written.

On top of whatever the project documents, the Standards axis always applies
the baseline below: a fixed set of well-known code smells, from the catalogue
in Martin Fowler's *Refactoring*. It applies even when the project documents
nothing, under two rules:

- **The project wins.** A documented standard of the project always
  overrides the baseline. Where the project endorses something the baseline
  would flag, do not flag it.
- **Always a judgment call.** Each smell is a named heuristic ("possible
  Feature Envy"), never a hard violation. As with every standard here, skip
  anything the project's tooling already enforces.

Each smell below is what to look for, then the usual remedy. Match each
against the change.

- **Mysterious Name**: a function, variable or type whose name does not say
  what it does or holds. Rename it; if no honest name comes, the design is
  unclear.
- **Duplicated Code**: the same logic appears in more than one place in the
  change. Pull out the shared logic and call it from each place.
- **Feature Envy**: a method that works more with another object's data than
  its own. Move it to the data it uses.
- **Data Clumps**: the same few fields or parameters keep travelling
  together. Give them one type of their own and pass that.
- **Primitive Obsession**: a bare number or string standing in for an idea in
  the domain that deserves a type. Give the idea its own small type.
- **Repeated Switches**: the same chain of conditions on the same kind of
  value appears in several places. Replace it with polymorphism, or with one
  lookup the places share.
- **Shotgun Surgery**: one logical change needs scattered edits across many
  files. Gather what changes together into one module.
- **Divergent Change**: one file or module is changed for several unrelated
  reasons. Split it, so each part changes for one reason.
- **Speculative Generality**: abstractions, parameters or hooks added for
  needs the spec does not have. Remove them, and fold the code back until a
  real need appears.
- **Message Chains**: a caller walking a long chain of calls through objects
  it should not depend on. Hide the walk behind one method on the first
  object.
- **Middle Man**: a class or function that mostly passes calls on. Remove it
  and call the real target directly.
- **Refused Bequest**: a subclass or implementation that ignores or overrides
  most of what it inherits. Drop the inheritance and use composition.

## 4. Review each axis

**Standards.** Report, for each place in the change where it matters:

- every place the change breaks a documented standard, citing the standard
  (the document and the rule);
- every baseline smell you see, naming it and quoting the code.

Keep hard violations apart from judgment calls: breaking a documented
standard can be a hard violation, a baseline smell is always a judgment call,
and the project's documented standard overrides the baseline. Skip anything
tooling enforces. Keep the report under 400 words.

**Spec.** Report:

- what the spec asked for that is missing or only partly done;
- behaviour in the change that the spec did not ask for;
- what looks implemented but looks implemented wrongly.

Quote the line of the spec behind each finding. Keep the report under 400
words.

## 5. Report

Give the two reports under the headings **Standards** and **Spec**, as
written or lightly tidied. Do not merge them, and do not rank findings across
them.

End with one line: the number of findings on each axis, and the worst finding
within each axis, if there is one. Do not pick one worst finding across both
axes; that would be the ranking the separation exists to prevent.

## Why two axes

A change can pass one axis and fail the other:

- code that follows every standard but does the wrong thing passes Standards
  and fails Spec;
- code that does exactly what was asked but breaks the project's conventions
  passes Spec and fails Standards.

Reporting them apart stops one from hiding the other.
