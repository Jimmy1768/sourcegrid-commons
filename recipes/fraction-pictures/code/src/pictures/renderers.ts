// The table from a block's first word to the renderer that draws it. The Booth
// reads the first word of a fenced block in the Tutor's reply, looks it up here,
// and hands the block's text to what it finds. A first word that is not in the
// table finds nothing, and the Booth shows the block as plain text, so an unknown
// block breaks nothing.
//
// The word fraction is the first entry. A model that comes later joins the table
// with one more line and its own renderer; nothing else here changes.

import type { ComponentType } from 'react';

import { FractionBlock, type FractionBlockProps } from './PictureWithAnswers';

// What every renderer is given: the block's text, and the Tutor's question and
// list of answers with the state of the child's reply to them.
export type BlockProps = FractionBlockProps;
export type BlockRenderer = ComponentType<BlockProps>;

export const renderers: Readonly<Record<string, BlockRenderer>> = {
  fraction: FractionBlock,
};

// The first word of a block: its text up to the first space or line end.
export function firstWord(text: string): string {
  return text.trimStart().split(/\s/, 1)[0] ?? '';
}

// The renderer for a block, or null when its first word is not in the table.
// Only the table's own words count: a block that starts with `constructor` or
// `toString` finds nothing.
export function rendererFor(text: string): BlockRenderer | null {
  const word = firstWord(text);
  return Object.prototype.hasOwnProperty.call(renderers, word) ? renderers[word] : null;
}
