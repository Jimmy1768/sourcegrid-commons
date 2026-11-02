// The callout rule: which answer buttons get an arrow to a drawn fraction, the
// side each sits on, and arrows that do not cross. Pure code: numbers and strings
// in, numbers and strings out, nothing drawn here.
//
// The rule, in words:
//   - A button whose words are exactly a fraction drawn in the picture, spaces
//     ignored, is a callout. It sits beside that shape with an arrow, and the
//     shape drops its label because the button names it.
//   - Any other button stays in the row under the question, with no arrow.
//   - A shape has one button. A second button with the same words for a fraction
//     already named, and a button that has no free side, stay in the row. The
//     worst case is a plain button, never a wrong one or a lost answer.
//   - A callout sits on the side nearest its shape: left, right, top or bottom.
//     Buttons are BUTTON_WIDTH by BUTTON_HEIGHT points, never under 48.
//   - Arrows are straight, horizontal or vertical, and every one is checked: it
//     crosses no other arrow, passes through no other shape or label and no other
//     button, and no two buttons overlap. A side that fails is skipped for the
//     next nearest; none left, and the button stays in the row.
//
// Coordinates are the layout's: the origin is the top left of the first shape.
// Buttons sit outside the layout, at negative coordinates or past its width and
// height; extentOf says how much room they need.

import { fractionText, type Fraction, type Model } from './format';
import {
  ARROW_GAP,
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  LABEL_HEIGHT,
  SIDE_BAND,
  layoutPictures,
  type Box,
  type Layout,
} from './geometry';

export type Side = 'left' | 'right' | 'top' | 'bottom';

// The order a tie between two equally near sides is settled in.
const SIDES: Side[] = ['left', 'right', 'top', 'bottom'];

const TOP_BAND = ARROW_GAP + BUTTON_HEIGHT; // room above the layout for a button

// An arrow runs from its button (x1, y1) to its shape (x2, y2). It is always
// horizontal or vertical.
export interface Arrow {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface Callout {
  choice: number; // the button's place in the Tutor's list
  words: string; // the button's words, as the Tutor wrote them: what a tap sends
  target: number; // the shape it names: its place among the picture's fractions
  fraction: Fraction;
  side: Side;
  button: Box;
  arrow: Arrow;
}

export interface Plan {
  layout: Layout;
  callouts: Callout[];
  row: number[]; // the places in the list of the buttons that stay in the row, in order
  labelled: boolean[]; // per shape: true when a button names it, so it drops its label
}

// Room the buttons need outside the layout, in points, on each side.
export interface Extent {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

// Words with every space taken out: "1 / 4" and "1/4" are the same words.
export function normalizeWords(words: string): string {
  return words.replace(/\s+/g, '');
}

// For each button, the shape it names, or -1 when its words are not exactly a
// drawn fraction. A shape is named once: the first button for it wins, and when
// the same fraction is drawn twice, two buttons take the two shapes in order.
export function matchChoices(
  choices: readonly string[],
  fractions: readonly Fraction[],
): number[] {
  const taken = new Set<number>();
  return choices.map((words) => {
    const said = normalizeWords(words);
    const target = fractions.findIndex((f, i) => !taken.has(i) && fractionText(f) === said);
    if (target >= 0) taken.add(target);
    return target;
  });
}

// The room an arrow takes, as a box. An arrow is horizontal or vertical, so its
// box is the arrow itself, with no width or no height.
function span(arrow: Arrow): Box {
  return {
    x: Math.min(arrow.x1, arrow.x2),
    y: Math.min(arrow.y1, arrow.y2),
    width: Math.abs(arrow.x2 - arrow.x1),
    height: Math.abs(arrow.y2 - arrow.y1),
  };
}

// Two boxes that share a point, edges included.
function touch(a: Box, b: Box): boolean {
  return (
    a.x <= b.x + b.width && b.x <= a.x + a.width && a.y <= b.y + b.height && b.y <= a.y + a.height
  );
}

// Two boxes that share an area, edges not counted.
function overlap(a: Box, b: Box): boolean {
  return a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;
}

// Whether two arrows cross, meet or run along one another. Arrows are always
// horizontal or vertical, so sharing a point in their boxes is crossing.
export function arrowsCross(a: Arrow, b: Arrow): boolean {
  return touch(span(a), span(b));
}

// How far a shape is from a side of the layout: the nearer, the likelier its
// button sits there.
function distance(layout: Layout, box: Box, side: Side): number {
  switch (side) {
    case 'left':
      return box.x;
    case 'right':
      return layout.width - (box.x + box.width);
    case 'top':
      return box.y;
    case 'bottom':
      return layout.height - (box.y + box.height);
  }
}

// Where the button and its arrow go for a shape on a side.
function position(layout: Layout, box: Box, side: Side): { button: Box; arrow: Arrow } {
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  switch (side) {
    case 'left':
      return {
        button: { x: -SIDE_BAND, y: cy - BUTTON_HEIGHT / 2, width: BUTTON_WIDTH, height: BUTTON_HEIGHT },
        arrow: { x1: -ARROW_GAP, y1: cy, x2: box.x, y2: cy },
      };
    case 'right':
      return {
        button: {
          x: layout.width + ARROW_GAP,
          y: cy - BUTTON_HEIGHT / 2,
          width: BUTTON_WIDTH,
          height: BUTTON_HEIGHT,
        },
        arrow: { x1: layout.width + ARROW_GAP, y1: cy, x2: box.x + box.width, y2: cy },
      };
    case 'top':
      return {
        button: { x: cx - BUTTON_WIDTH / 2, y: -TOP_BAND, width: BUTTON_WIDTH, height: BUTTON_HEIGHT },
        arrow: { x1: cx, y1: -ARROW_GAP, x2: cx, y2: box.y },
      };
    case 'bottom':
      return {
        button: {
          x: cx - BUTTON_WIDTH / 2,
          y: layout.height + ARROW_GAP,
          width: BUTTON_WIDTH,
          height: BUTTON_HEIGHT,
        },
        arrow: { x1: cx, y1: layout.height + ARROW_GAP, x2: cx, y2: box.y + box.height },
      };
  }
}

// A shape with the room its label takes under it: what an arrow must not cross.
function withLabel(box: Box): Box {
  return { ...box, height: box.height + LABEL_HEIGHT };
}

// Whether a button and arrow may be added to those already placed.
function fits(
  layout: Layout,
  target: number,
  placed: readonly Callout[],
  button: Box,
  arrow: Arrow,
): boolean {
  const reach = span(arrow);
  const others = layout.boxes.filter((_, i) => i !== target).map(withLabel);
  if (others.some((o) => overlap(reach, o) || overlap(button, o))) return false;
  return placed.every(
    (p) =>
      !overlap(button, p.button) &&
      !touch(reach, p.button) &&
      !touch(span(p.arrow), button) &&
      !arrowsCross(arrow, p.arrow),
  );
}

function placeAll(
  layout: Layout,
  choices: readonly string[],
  targets: readonly number[],
  fractions: readonly Fraction[],
): Callout[] {
  const placed: Callout[] = [];
  const used: Record<Side, number> = { left: 0, right: 0, top: 0, bottom: 0 };

  choices.forEach((words, choice) => {
    const target = targets[choice];
    const box = layout.boxes[target];
    const fraction = fractions[target];
    if (target < 0 || !box || !fraction) return;

    // Nearest side first. A tie goes to the side with fewer buttons, then to the
    // order left, right, top, bottom.
    const candidates = SIDES.map((side, order) => ({
      side,
      order,
      distance: distance(layout, box, side),
    }))
      .filter(({ side }) => layout.sideBands || side === 'top' || side === 'bottom')
      .sort(
        (a, b) =>
          a.distance - b.distance || used[a.side] - used[b.side] || a.order - b.order,
      );

    for (const { side } of candidates) {
      const { button, arrow } = position(layout, box, side);
      if (!fits(layout, target, placed, button, arrow)) continue;
      placed.push({ choice, words, target, fraction, side, button, arrow });
      used[side] += 1;
      return;
    }
  });

  return placed;
}

// The whole plan for a picture and the Tutor's list of answers, in `available`
// points of width: the layout (one size for every whole, room kept at the sides
// only when some button names a drawn fraction), the callouts, the buttons left
// for the row, and which shapes drop their label. With no list the plan has no
// callouts and every shape keeps its label.
export function planAnswers(input: {
  model: Model;
  fractions: readonly Fraction[];
  choices: readonly string[];
  available: number;
}): Plan {
  const { model, fractions, choices, available } = input;
  const targets = matchChoices(choices, fractions);
  const wantsArrows = targets.some((t) => t >= 0);

  let layout = layoutPictures(model, fractions.length, available, wantsArrows);
  const callouts = wantsArrows ? placeAll(layout, choices, targets, fractions) : [];
  if (wantsArrows && callouts.length === 0) {
    // Nothing could be placed: do not keep room for buttons that are not there.
    layout = layoutPictures(model, fractions.length, available, false);
  }

  const named = new Set(callouts.map((c) => c.choice));
  return {
    layout,
    callouts,
    row: choices.map((_, i) => i).filter((i) => !named.has(i)),
    labelled: fractions.map((_, i) => callouts.some((c) => c.target === i)),
  };
}

// The room the callouts' buttons need outside the layout, so a caller can size
// its canvas and move everything in by the left and top amounts.
export function extentOf(layout: Layout, callouts: readonly Callout[]): Extent {
  let left = 0;
  let top = 0;
  let right = 0;
  let bottom = 0;
  for (const { button } of callouts) {
    left = Math.max(left, -button.x);
    top = Math.max(top, -button.y);
    right = Math.max(right, button.x + button.width - layout.width);
    bottom = Math.max(bottom, button.y + button.height - layout.height);
  }
  return { left, top, right, bottom };
}
