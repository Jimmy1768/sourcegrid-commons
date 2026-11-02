# Gridpath math pictures

A draft for discussion, 2026-11-02. Fractions only; the other models are named and designed when their stage comes.

This design is kept beside the fraction-pictures Recipe, so whoever copies the Recipe knows why it is as it is.

## Principles

- **Industry-standard, nothing invented.** The models are the ones maths teaching already uses, under their own names.
- **The models are the Tutor's tools.** The Tutor decides which to use from the context. If one still confuses the child, it tries another, not the same one again.
- **The story is the Tutor's, the shape is ours.** The Tutor may say pizza, cake or chocolate. The Booth draws the same shapes every time. A picture names a model, never a story.
- **The picture shows, the Tutor explains.** The shape makes the difference visible; the Tutor's words give the why.
- **Answers are buttons, never the shape.** A shape can be too thin to tap. The child answers with buttons placed around the picture, each with an arrow to the thing it names.

## Models for fractions

The fraction circle: a circle cut into equal parts, some shaded, an area model.

The fraction strip: a bar cut into equal parts, some shaded. Strips stacked under one whole make a fraction wall.

Rules:

- Compared fractions share one whole size.
- Parts are equal.
- Shading starts at twelve o'clock and goes clockwise on a circle, and starts from the left on a strip.
- The fraction in standard notation sits under each picture, unless it is asked about.
- Each picture has a screen-reader text, such as a circle in 4 equal parts, 1 shaded.

Named for later stages: the number line, the tape diagram, ten-frames and counters, base-ten blocks, arrays.

## How a picture travels

A fenced block in the Tutor's reply, drawn by the Booth as GitHub draws a mermaid block. The first line is `fraction` and then `circle` or `strip`. One fraction per line as a/b, b from 1 to 12, a from 0 to b. A block that does not read shows as text. The reply's format is unchanged and nothing changes in the kernel.

## How the child answers

Callouts, the leader-line labels of textbook diagrams. Khan Academy's Perseus label-image widget (MIT) puts answer markers on a picture in the same spirit. Each thing asked about gets a button outside the picture with an arrow to it.

The button is full size whatever the shape. WCAG 2.5.8 asks for at least 24 CSS pixels, Apple 44 points, Material 48; the Recipe keeps to 48. Buttons sit on the side nearest their target and arrows do not cross. A tap sends the button's words as the answer; the Tutor reads it and teaches. Only the newest question's buttons can be pressed; older ones fade, and the picked one is marked.

## How the Tutor learns it (later)

One rule in the Tutor's Map: these models are your tools; when a fraction can be seen, show it in the block, with the model that fits and the same model for each fraction compared; if a picture did not land, try another.

## Which buttons get arrows

Only the Tutor knows it is asking about the picture, so the Booth does not guess from the words around it. The buttons come from the reply's question and list.

A button whose words are exactly a fraction drawn in the picture above it (spaces ignored) sits beside that shape with an arrow, and the shape drops its label. Any other button stays in the row under the question.

If the Tutor words a choice differently, the button stays in the row with no arrow and the child can still answer. If it writes no list, the picture shows with its labels. The worst case is a plain button, never a wrong one or a lost answer.

## Where it lives

What to show is the Delegate's judgement; no second model chooses.

The renderer and its format live in the commons as a Recipe: finished, tested code a builder reads whole and copies into the Booth, the copy-in model of shadcn/ui (MIT). Others, such as Mermaid (MIT) and Vega-Lite (BSD-3-Clause), join the same way when a project needs them.

Finding the renderer is a lookup: a table from a block's first word to the renderer copied.

Drawing is the Booth's, in its drawing of a reply's words, in plain SVG coloured from the Booth's theme variables. The Recipe draws with react-native-svg, so one component serves the Booth and the Expo app; no chart or fraction library is used.

Writing the format is the Delegate's own. A specialist role earns its place only when a format is too heavy to write reliably.

## Not in the first version

The Tutor learning to use pictures, the Booth taking the Recipe in, any model beyond circles and strips, Mermaid and Vega-Lite blocks, animation, drag answers, and any fraction or chart library.
