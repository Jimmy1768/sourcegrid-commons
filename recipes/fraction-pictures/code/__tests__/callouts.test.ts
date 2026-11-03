import { arrowsCross, matchChoices, planAnswers } from '../src/pictures/callouts';
import type { Arrow } from '../src/pictures/callouts';

const fractions = [
  { numerator: 1, denominator: 4 },
  { numerator: 1, denominator: 8 },
];

// Independently compare the spans of the horizontal/vertical leader lines.
function sharePoint(a: Arrow, b: Arrow): boolean {
  return (
    Math.max(Math.min(a.x1, a.x2), Math.min(b.x1, b.x2)) <=
      Math.min(Math.max(a.x1, a.x2), Math.max(b.x1, b.x2)) &&
    Math.max(Math.min(a.y1, a.y2), Math.min(b.y1, b.y2)) <=
      Math.min(Math.max(a.y1, a.y2), Math.max(b.y1, b.y2))
  );
}

describe('fraction answer callouts', () => {
  it.each(['1/4', '1/ 4', ' 1 / 4 '])('gives the exact words %s an arrow to the quarter', (words) => {
    const plan = planAnswers({
      model: 'circle', fractions, choices: [words], available: 360,
    });

    expect(plan.callouts).toHaveLength(1);
    expect(plan.callouts[0]).toMatchObject({ choice: 0, words, target: 0 });
    expect(plan.row).toEqual([]);
    expect(plan.labelled).toEqual([true, false]);
  });

  it('puts only the two exact fractions beside their pictures, leaving The quarter in the row', () => {
    const choices = ['1/4', '1/8', 'The quarter'];
    const plan = planAnswers({ model: 'circle', fractions, choices, available: 360 });

    expect(plan.callouts.map(({ choice, target, words }) => ({ choice, target, words }))).toEqual([
      { choice: 0, target: 0, words: '1/4' },
      { choice: 1, target: 1, words: '1/8' },
    ]);
    expect(plan.row.map((index) => choices[index])).toEqual(['The quarter']);
    expect(plan.labelled).toEqual([true, true]);
  });

  it('does not guess from a name, equivalent fraction, or surrounding words', () => {
    const choices = ['The quarter', '2/8', 'Choose 1/4', '1/4 please'];
    expect(matchChoices(choices, fractions)).toEqual([-1, -1, -1, -1]);
    const plan = planAnswers({ model: 'circle', fractions, choices, available: 360 });
    expect(plan.callouts).toEqual([]);
    expect(plan.row).toEqual([0, 1, 2, 3]);
    expect(plan.labelled).toEqual([false, false]);
  });

  it('keeps every picture label when there is no answer list', () => {
    const plan = planAnswers({ model: 'circle', fractions, choices: [], available: 360 });
    expect(plan.callouts).toEqual([]);
    expect(plan.row).toEqual([]);
    expect(plan.labelled).toEqual([false, false]);
  });

  it.each(['circle', 'strip'] as const)('keeps %s arrows separate and callout buttons at least 48 points', (model) => {
    const compared = Array.from({ length: 8 }, (_, index) => ({
      numerator: index + 1, denominator: 8,
    }));
    // Reverse answer order so placement cannot rely on the order of the shapes.
    const choices = compared.map((fraction) => `${fraction.numerator}/8`).reverse();

    [240, 360, 768].forEach((available) => {
      const plan = planAnswers({ model, fractions: compared, choices, available });
      expect(plan.callouts.length).toBeGreaterThanOrEqual(2);
      expect([...plan.callouts.map((callout) => callout.choice), ...plan.row].sort((a, b) => a - b))
        .toEqual(choices.map((_, index) => index));

      plan.callouts.forEach((callout, index) => {
        expect(callout.words).toBe(choices[callout.choice]);
        expect(callout.button.width).toBeGreaterThanOrEqual(48);
        expect(callout.button.height).toBeGreaterThanOrEqual(48);
        const arrow = callout.arrow;
        expect(arrow.x1 === arrow.x2 || arrow.y1 === arrow.y2).toBe(true);
        expect(Math.abs(arrow.x2 - arrow.x1) + Math.abs(arrow.y2 - arrow.y1)).toBeGreaterThan(0);
        plan.callouts.slice(index + 1).forEach((other) => {
          expect(sharePoint(arrow, other.arrow)).toBe(false);
        });
      });
    });
  });

  it('recognizes intersecting arrows as well as separated arrows', () => {
    const horizontal = { x1: 0, y1: 5, x2: 10, y2: 5 };
    expect(arrowsCross(horizontal, { x1: 5, y1: 0, x2: 5, y2: 10 })).toBe(true);
    expect(arrowsCross(horizontal, { x1: 10, y1: 5, x2: 20, y2: 5 })).toBe(true);
    expect(arrowsCross(horizontal, { x1: 0, y1: 10, x2: 10, y2: 10 })).toBe(false);
  });
});
