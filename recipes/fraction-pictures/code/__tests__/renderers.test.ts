import { FractionBlock } from '../src/pictures/PictureWithAnswers';
import { firstWord, rendererFor, renderers } from '../src/pictures/renderers';

describe('picture renderer table', () => {
  it('maps the word fraction to the fraction block renderer', () => {
    expect(renderers.fraction).toBe(FractionBlock);
    expect(rendererFor('fraction circle\n1/4\n1/8')).toBe(FractionBlock);
    expect(rendererFor('fraction strip\n3/8')).toBe(FractionBlock);
  });

  it('leaves unknown block types for the caller to show as text', () => {
    expect(rendererFor('unknown circle\n1/4')).toBeNull();
  });

  it('looks up the first word, ignoring leading whitespace', () => {
    const text = ' \n  fraction circle\n1/4';
    expect(firstWord(text)).toBe('fraction');
    expect(rendererFor(text)).toBe(FractionBlock);
  });
});
