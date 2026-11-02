// The geometry of fraction pictures. Pure code: numbers and strings in, numbers
// and strings out, nothing drawn here, so it reads the same on the phone and on
// the web. The only import is a pair of types.
//
// What it holds:
//   - the sectors of a circle: equal parts, the first starting at twelve o'clock
//     and the rest following clockwise;
//   - the cells of a strip: equal parts, the first at the left;
//   - the text alternative a screen reader speaks for each picture;
//   - the layout of the pictures: every whole the same size, and room left around
//     them for answer buttons with arrows (the rule that uses it is callouts.ts).

import type { Fraction, Model } from './format';

// Sizes, in points. The circles and strips are built from these.
export const OUTLINE_WIDTH = 2;
export const LABEL_HEIGHT = 22; // the fraction under a picture
export const MIN_TARGET = 48; // the least a button may be, high or wide
export const BUTTON_WIDTH = 56;
export const BUTTON_HEIGHT = 48;
export const ARROW_GAP = 20; // between a button and its shape, where the arrow runs
export const SIDE_BAND = ARROW_GAP + BUTTON_WIDTH; // room for a button left or right

const GAP = 8; // between shapes in a row
const ROW_GAP = 8; // between a label and the next row of shapes
const MIN_CIRCLE = 56; // not under a button's width, so buttons above never overhang
const MAX_CIRCLE = 112;
const MAX_SIDE_ROW = 3; // most circles in a row that has buttons at its left and right
const STRIP_HEIGHT = 30;
const STRIP_PITCH = STRIP_HEIGHT + LABEL_HEIGHT + ROW_GAP; // 60: room for a 48 button beside each strip
const MIN_STRIP_WIDTH = 120;
const MAX_STRIP_WIDTH = 360;

export interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

// One circle part: angles in degrees, clockwise from twelve o'clock.
export interface SectorPart {
  index: number;
  shaded: boolean;
  startAngle: number;
  endAngle: number;
  path: string; // an SVG path
}

// One strip part.
export interface CellPart {
  index: number;
  shaded: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

const round = (n: number): number => Math.round(n * 1000) / 1000;

function pointAt(centre: number, radius: number, degrees: number): string {
  const radians = (degrees * Math.PI) / 180;
  return `${round(centre + radius * Math.sin(radians))} ${round(centre - radius * Math.cos(radians))}`;
}

function sector(centre: number, radius: number, start: number, end: number): string {
  const large = end - start > 180 ? 1 : 0;
  return `M ${centre} ${centre} L ${pointAt(centre, radius, start)} A ${radius} ${radius} 0 ${large} 1 ${pointAt(centre, radius, end)} Z`;
}

// One part that is the whole circle: an arc cannot start and end at one point,
// so it is two half arcs.
function wholeCircle(centre: number, radius: number): string {
  const top = round(centre - radius);
  const bottom = round(centre + radius);
  return `M ${centre} ${top} A ${radius} ${radius} 0 1 1 ${centre} ${bottom} A ${radius} ${radius} 0 1 1 ${centre} ${top} Z`;
}

// The parts of a circle drawn in a square of `size` points. `denominator` equal
// parts; the first `numerator` are shaded, from twelve o'clock clockwise.
export function circleParts(fraction: Fraction, size: number, inset = OUTLINE_WIDTH / 2): SectorPart[] {
  const { numerator, denominator } = fraction;
  const centre = size / 2;
  const radius = centre - inset;
  return Array.from({ length: denominator }, (_, index) => {
    const startAngle = (index * 360) / denominator;
    const endAngle = ((index + 1) * 360) / denominator;
    return {
      index,
      shaded: index < numerator,
      startAngle,
      endAngle,
      path:
        denominator === 1
          ? wholeCircle(centre, radius)
          : sector(centre, radius, startAngle, endAngle),
    };
  });
}

// The cells of a strip drawn in a box of `width` by `height` points.
// `denominator` equal parts; the first `numerator` are shaded, from the left.
export function stripParts(
  fraction: Fraction,
  width: number,
  height: number,
  inset = OUTLINE_WIDTH / 2,
): CellPart[] {
  const { numerator, denominator } = fraction;
  const partWidth = (width - 2 * inset) / denominator;
  return Array.from({ length: denominator }, (_, index) => ({
    index,
    shaded: index < numerator,
    x: inset + index * partWidth,
    y: inset,
    width: partWidth,
    height: height - 2 * inset,
  }));
}

// What a screen reader says for a picture: a circle in 4 equal parts, 1 shaded.
export function describeFraction(model: Model, fraction: Fraction): string {
  const noun = model === 'circle' ? 'circle' : 'strip';
  const parts = fraction.denominator === 1 ? 'part' : 'parts';
  return `a ${noun} in ${fraction.denominator} equal ${parts}, ${fraction.numerator} shaded`;
}

// Where each picture sits. The frame is the shapes plus the strip under the last
// row, where the labels go. Its origin is the top left of the first shape;
// buttons sit outside it, at negative coordinates or beyond width and height.
export interface Layout {
  model: Model;
  boxes: Box[]; // one per fraction: the shape alone, not its label
  width: number;
  height: number;
  sideBands: boolean; // whether room was kept at the left and right for buttons
}

function fitCircles(count: number, room: number): { columns: number; size: number } {
  const usable = Math.max(MIN_CIRCLE, room);
  const columns = Math.max(1, Math.min(count, Math.floor((usable + GAP) / (MIN_CIRCLE + GAP))));
  const size = Math.min(MAX_CIRCLE, Math.floor((usable - (columns - 1) * GAP) / columns));
  return { columns, size };
}

function layoutCircles(count: number, available: number, reserveSides: boolean): Layout {
  const wide = fitCircles(count, available);
  const narrow = fitCircles(count, available - 2 * SIDE_BAND);
  // Buttons at the left and right need the circles in one short row.
  const sideBands = reserveSides && count <= MAX_SIDE_ROW && narrow.columns === count;
  const { columns, size } = sideBands ? narrow : wide;
  const rows = Math.ceil(count / columns);
  const stride = size + LABEL_HEIGHT + ROW_GAP;
  const boxes = Array.from({ length: count }, (_, i) => ({
    x: (i % columns) * (size + GAP),
    y: Math.floor(i / columns) * stride,
    width: size,
    height: size,
  }));
  return {
    model: 'circle',
    boxes,
    width: columns * size + (columns - 1) * GAP,
    height: (rows - 1) * stride + size + LABEL_HEIGHT,
    sideBands,
  };
}

function layoutStrips(count: number, available: number, reserveSides: boolean): Layout {
  const room = reserveSides ? available - 2 * SIDE_BAND : available;
  const width = Math.min(MAX_STRIP_WIDTH, Math.max(MIN_STRIP_WIDTH, Math.floor(room)));
  const boxes = Array.from({ length: count }, (_, i) => ({
    x: 0,
    y: i * STRIP_PITCH,
    width,
    height: STRIP_HEIGHT,
  }));
  return {
    model: 'strip',
    boxes,
    width,
    height: (count - 1) * STRIP_PITCH + STRIP_HEIGHT + LABEL_HEIGHT,
    sideBands: reserveSides,
  };
}

// The layout of `count` pictures in `available` points of width. Every whole is
// the same size, so fractions compared are compared fairly. Circles go in a row
// that wraps; strips are stacked, one under another, like a fraction wall.
// `reserveSides` keeps room at the left and right for buttons with arrows; ask
// for it only when some button names a drawn fraction.
export function layoutPictures(
  model: Model,
  count: number,
  available: number,
  reserveSides = false,
): Layout {
  if (count < 1) return { model, boxes: [], width: 0, height: 0, sideBands: false };
  return model === 'strip'
    ? layoutStrips(count, available, reserveSides)
    : layoutCircles(count, available, reserveSides);
}
