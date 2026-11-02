// Reads a fraction block: the text of a fenced block in the Tutor's reply.
// Pure code with no imports, so the Booth and the phone app read it the same way.
//
// A block is:
//
//   fraction circle      <- the word fraction, then circle or strip
//   1/4                  <- one fraction per line, as a/b
//   1/8
//
// b is from 1 to 12 and a is from 0 to b. A block that does not read says so,
// and the caller shows its text instead. Nothing here throws.

export type Model = 'circle' | 'strip';

export interface Fraction {
  numerator: number;
  denominator: number;
}

export interface FractionBlock {
  model: Model;
  fractions: Fraction[];
}

export type ReadResult = { ok: true; block: FractionBlock } | { ok: false };

export const MAX_DENOMINATOR = 12;

const NOT_READ: ReadResult = { ok: false };
const LINE = /^(\d{1,2})\/(\d{1,2})$/;

// One fraction as a/b, or null when the line is not a fraction this format allows.
export function readFraction(line: string): Fraction | null {
  const found = LINE.exec(line.trim());
  if (!found) return null;
  const numerator = Number(found[1]);
  const denominator = Number(found[2]);
  if (denominator < 1 || denominator > MAX_DENOMINATOR) return null;
  if (numerator > denominator) return null;
  return { numerator, denominator };
}

// A fraction in standard notation: 1/4.
export function fractionText(fraction: Fraction): string {
  return `${fraction.numerator}/${fraction.denominator}`;
}

// The whole block, or { ok: false } when any part of it does not read: a first
// line that is not `fraction circle` or `fraction strip`, no fractions, or one
// bad line. Blank lines are skipped.
export function readFractionBlock(text: string): ReadResult {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '');

  const head = (lines[0] ?? '').split(/\s+/);
  if (head.length !== 2 || head[0] !== 'fraction') return NOT_READ;
  const model = head[1];
  if (model !== 'circle' && model !== 'strip') return NOT_READ;

  const rest = lines.slice(1);
  if (rest.length === 0) return NOT_READ;

  const fractions: Fraction[] = [];
  for (const line of rest) {
    const fraction = readFraction(line);
    if (fraction === null) return NOT_READ;
    fractions.push(fraction);
  }
  return { ok: true, block: { model, fractions } };
}
