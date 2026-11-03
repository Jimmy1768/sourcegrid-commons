import {
  circleParts,
  describeFraction,
  layoutPictures,
  stripParts,
} from '../src/pictures/geometry';

const quarter = { numerator: 1, denominator: 4 };

describe('fraction picture geometry', () => {
  it('divides a circle into four equal parts and shades the first clockwise quarter', () => {
    const parts = circleParts(quarter, 100, 0);

    expect(parts).toHaveLength(4);
    expect(parts.map((part) => part.shaded)).toEqual([true, false, false, false]);
    parts.forEach((part, index) => {
      expect(part.startAngle).toBeCloseTo(index * 90);
      expect(part.endAngle - part.startAngle).toBeCloseTo(90);
    });
    expect(parts[3].endAngle).toBeCloseTo(360);

    // Check the actual SVG sectors too: angle metadata alone cannot prove that
    // the drawn parts are equal. Traverse top, right, bottom, left, then top.
    const boundaries = [[50, 0], [100, 50], [50, 100], [0, 50], [50, 0]];
    parts.forEach((part, index) => {
      const numbers = (part.path.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
      expect(part.path.match(/[MLAZ]/g)).toEqual(['M', 'L', 'A', 'Z']);
      expect(numbers.slice(0, 2)).toEqual([50, 50]);
      expect(numbers.slice(2, 4)).toEqual(boundaries[index]);
      // Equal radii, no rotation, a short arc, and a clockwise sweep.
      expect(numbers.slice(4, 9)).toEqual([50, 50, 0, 0, 1]);
      expect(numbers.slice(9)).toEqual(boundaries[index + 1]);
    });
  });

  it('divides a strip into eight equal cells with the leftmost three shaded', () => {
    const parts = stripParts({ numerator: 3, denominator: 8 }, 160, 32, 0);

    expect(parts).toHaveLength(8);
    expect(parts.map((part) => part.shaded)).toEqual([
      true, true, true, false, false, false, false, false,
    ]);
    parts.forEach((part, index) => {
      expect(part.width).toBeCloseTo(20);
      expect(part.height).toBeCloseTo(32);
      expect(part.x).toBeCloseTo(index * 20);
      expect(part.y).toBeCloseTo(0);
    });
    expect(parts[7].x + parts[7].width).toBeCloseTo(160);
  });

  it('describes the circle without relying on colour or the visible fraction label', () => {
    expect(describeFraction('circle', quarter)).toBe('a circle in 4 equal parts, 1 shaded');
  });

  it.each(['circle', 'strip'] as const)('keeps compared %s wholes the same size', (model) => {
    const { boxes } = layoutPictures(model, 3, 360);

    expect(boxes).toHaveLength(3);
    boxes.forEach((box) => {
      expect(box.width).toBeGreaterThan(0);
      expect(box.height).toBeGreaterThan(0);
      expect(box.width).toBe(boxes[0].width);
      expect(box.height).toBe(boxes[0].height);
    });
  });
});
