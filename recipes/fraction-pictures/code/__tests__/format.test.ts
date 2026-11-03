import { readFractionBlock } from '../src/pictures/format';

describe('fraction block format', () => {
  it('reads a circle block with a quarter and an eighth', () => {
    expect(readFractionBlock('fraction circle\n1/4\n1/8')).toEqual({
      ok: true,
      block: {
        model: 'circle',
        fractions: [
          { numerator: 1, denominator: 4 },
          { numerator: 1, denominator: 8 },
        ],
      },
    });
  });

  it.each([
    ['a bad line', 'fraction circle\n1/4\nnot a fraction'],
    ['a bad line in a strip', 'fraction strip\n3/8\nnot a fraction'],
    ['a denominator of 13', 'fraction circle\n1/13'],
    ['a numerator above its denominator', 'fraction circle\n5/4'],
    ['an unknown model', 'fraction unknown\n1/4'],
  ])('does not read %s', (_reason, source) => {
    expect(readFractionBlock(source)).toEqual({ ok: false });
  });

  it('reads a strip, including zero and the whole', () => {
    expect(readFractionBlock('fraction strip\n0/8\n8/8')).toEqual({
      ok: true,
      block: {
        model: 'strip',
        fractions: [
          { numerator: 0, denominator: 8 },
          { numerator: 8, denominator: 8 },
        ],
      },
    });
  });
});
