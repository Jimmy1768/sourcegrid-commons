// The pictures with the child's answers around them, for the web, with the
// browser's own svg and button elements. Buttons whose words are exactly a drawn
// fraction sit beside that shape with an arrow to it; every other button stays in
// the row under the question, with no arrow. A click sends the button's words.
// Only the newest question's buttons can be pressed: an older question fades, and
// the button the child picked is marked.
//
// This is the web version of PictureWithAnswers.tsx. React Native's platform-file
// convention picks that file on the phone (Metro) and this one in a web build that
// resolves the .web.tsx extension. It takes the same props and offers the same
// FractionBlock, but it pulls in no native code and no phone file: only react's
// types, the shared files (callouts.ts, format.ts, geometry.ts) and its web
// sibling FractionPicture.web.tsx.
//
// It decides nothing about where things go: callouts.ts plans that, geometry.ts
// sizes it, FractionPicture.web draws the shapes. This file puts the buttons and
// arrows where the plan says and wires the click.
//
// Whatever the block or the list holds, no answer is lost: a button the rule
// cannot place beside a shape is a plain button in the row.

import type { CSSProperties, ReactNode } from 'react';

import { extentOf, normalizeWords, planAnswers, type Arrow } from './callouts';
import {
  DEFAULT_WIDTH,
  FractionPicture,
  resolveTheme,
  type PictureTheme,
} from './FractionPicture.web';
import { readFractionBlock, type Fraction, type Model } from './format';
import { MIN_TARGET, describeFraction } from './geometry';

const NO_CHOICES: readonly string[] = [];
const HEAD_LENGTH = 9;
const HEAD_HALF_WIDTH = 5;

export interface AnswerProps {
  // The Tutor's list of answers: each string is a button's words.
  choices?: readonly string[];
  // Called with the button's words when the child clicks one.
  onAnswer?: (words: string) => void;
  // True for the newest question only. False fades the buttons and stops clicks.
  active?: boolean;
  // The words the child picked, once the question is past: that button is marked.
  picked?: string;
  // The question, drawn between the picture and the row of buttons that have no
  // shape. Leave it out when the caller already draws the question itself.
  question?: string;
  // The width the pictures and their buttons may take, in points.
  width?: number;
  theme?: Partial<PictureTheme>;
}

export interface PictureWithAnswersProps extends AnswerProps {
  model: Model;
  fractions: readonly Fraction[];
}

interface ChoiceButtonProps {
  words: string;
  hint?: string;
  testID: string;
  place?: CSSProperties;
  oneLine?: boolean;
  active: boolean;
  picked: boolean;
  theme: PictureTheme;
  onPress: () => void;
}

// One answer button. Callout buttons are placed by `place` at the planned size;
// row buttons are at least MIN_TARGET high and wide. Words are never changed.
function ChoiceButton({
  words,
  hint,
  testID,
  place,
  oneLine,
  active,
  picked,
  theme,
  onPress,
}: ChoiceButtonProps) {
  const style: CSSProperties = {
    ...buttonStyle,
    ...place,
    backgroundColor: picked ? theme.pickedBackground : theme.buttonBackground,
    borderColor: theme.buttonBorder,
    borderWidth: picked ? 3 : 1.5,
    color: theme.buttonText,
    opacity: active || picked ? 1 : 0.45,
    cursor: active ? 'pointer' : 'default',
    ...(oneLine ? oneLineStyle : null),
  };
  return (
    <button
      type="button"
      data-testid={testID}
      aria-label={words}
      aria-pressed={picked}
      title={hint}
      disabled={!active}
      onClick={onPress}
      style={style}
    >
      {words}
    </button>
  );
}

// The arrow's line, stopping where its head starts, and the head's triangle.
function arrowShape(arrow: Arrow, dx: number, dy: number) {
  const length = Math.hypot(arrow.x2 - arrow.x1, arrow.y2 - arrow.y1) || 1;
  const ux = (arrow.x2 - arrow.x1) / length;
  const uy = (arrow.y2 - arrow.y1) / length;
  const bx = arrow.x2 - ux * HEAD_LENGTH;
  const by = arrow.y2 - uy * HEAD_LENGTH;
  const px = -uy * HEAD_HALF_WIDTH;
  const py = ux * HEAD_HALF_WIDTH;
  return {
    x1: arrow.x1 + dx,
    y1: arrow.y1 + dy,
    x2: bx + dx,
    y2: by + dy,
    head: [
      `${arrow.x2 + dx},${arrow.y2 + dy}`,
      `${bx + px + dx},${by + py + dy}`,
      `${bx - px + dx},${by - py + dy}`,
    ].join(' '),
  };
}

interface ChoiceRowProps {
  choices: readonly string[];
  indices: readonly number[];
  active: boolean;
  pickedIndex: number;
  theme: PictureTheme;
  send: (words: string) => void;
}

// The buttons that have no shape to point at, together under the question.
function ChoiceRow({ choices, indices, active, pickedIndex, theme, send }: ChoiceRowProps) {
  if (indices.length === 0) return null;
  return (
    <div data-testid="choice-row" style={rowStyle}>
      {indices.map((i) => (
        <ChoiceButton
          key={i}
          testID={`choice-${i}`}
          words={choices[i]}
          place={rowButtonStyle}
          active={active}
          picked={i === pickedIndex}
          theme={theme}
          onPress={() => send(choices[i])}
        />
      ))}
    </div>
  );
}

function Question({ text, colour }: { text?: string; colour: string }): ReactNode {
  if (!text) return null;
  return <p style={{ ...questionStyle, color: colour }}>{text}</p>;
}

export function PictureWithAnswers({
  model,
  fractions,
  choices = NO_CHOICES,
  onAnswer,
  active = true,
  picked,
  question,
  width = DEFAULT_WIDTH,
  theme,
}: PictureWithAnswersProps) {
  const colours = resolveTheme(theme);
  const plan = planAnswers({ model, fractions, choices, available: width });
  const extent = extentOf(plan.layout, plan.callouts);
  const canvasWidth = plan.layout.width + extent.left + extent.right;
  const canvasHeight = plan.layout.height + extent.top + extent.bottom;

  const pickedWords = picked === undefined ? null : normalizeWords(picked);
  const pickedIndex =
    pickedWords === null ? -1 : choices.findIndex((c) => normalizeWords(c) === pickedWords);

  const send = (words: string) => {
    if (active && onAnswer) onAnswer(words);
  };

  return (
    <div data-testid="picture-with-answers" style={containerStyle}>
      <div
        data-testid="picture-canvas"
        style={{ position: 'relative', width: canvasWidth, height: canvasHeight }}
      >
        <div style={{ position: 'absolute', left: extent.left, top: extent.top }}>
          <FractionPicture
            model={model}
            fractions={fractions}
            layout={plan.layout}
            named={plan.labelled}
            theme={theme}
          />
        </div>

        {plan.callouts.length > 0 ? (
          // The arrows are decoration: the button's description and the picture's own
          // text alternative say what a screen reader needs.
          <svg
            aria-hidden="true"
            focusable="false"
            width={canvasWidth}
            height={canvasHeight}
            viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
            style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none' }}
          >
            {plan.callouts.map((callout) => {
              const shape = arrowShape(callout.arrow, extent.left, extent.top);
              return (
                <line
                  key={`line-${callout.choice}`}
                  data-testid={`arrow-${callout.choice}`}
                  x1={shape.x1}
                  y1={shape.y1}
                  x2={shape.x2}
                  y2={shape.y2}
                  stroke={colours.arrow}
                  strokeWidth={2}
                />
              );
            })}
            {plan.callouts.map((callout) => (
              <polygon
                key={`head-${callout.choice}`}
                points={arrowShape(callout.arrow, extent.left, extent.top).head}
                fill={colours.arrow}
              />
            ))}
          </svg>
        ) : null}

        {plan.callouts.map((callout) => (
          <ChoiceButton
            key={`callout-${callout.choice}`}
            testID={`callout-${callout.choice}`}
            words={callout.words}
            hint={describeFraction(model, callout.fraction)}
            oneLine
            place={{
              position: 'absolute',
              left: extent.left + callout.button.x,
              top: extent.top + callout.button.y,
              width: callout.button.width,
              height: callout.button.height,
            }}
            active={active}
            picked={callout.choice === pickedIndex}
            theme={colours}
            onPress={() => send(callout.words)}
          />
        ))}
      </div>

      <Question text={question} colour={colours.text} />
      <ChoiceRow
        choices={choices}
        indices={plan.row}
        active={active}
        pickedIndex={pickedIndex}
        theme={colours}
        send={send}
      />
    </div>
  );
}

export interface FractionBlockProps extends AnswerProps {
  // The text of the fenced block, as the Tutor wrote it.
  text: string;
}

// What the renderer table holds for the word fraction: reads the block and draws
// it. A block that does not read shows as its own text, with the answers in the
// row, so nothing breaks and no answer is lost.
export function FractionBlock({ text, ...answers }: FractionBlockProps) {
  const read = readFractionBlock(text);
  if (read.ok) {
    return (
      <PictureWithAnswers
        model={read.block.model}
        fractions={read.block.fractions}
        {...answers}
      />
    );
  }

  const { choices = NO_CHOICES, onAnswer, active = true, picked, question, theme } = answers;
  const colours = resolveTheme(theme);
  const pickedWords = picked === undefined ? null : normalizeWords(picked);
  return (
    <div data-testid="fraction-block-text" style={containerStyle}>
      <div style={{ color: colours.text, whiteSpace: 'pre-wrap' }}>{text}</div>
      <Question text={question} colour={colours.text} />
      <ChoiceRow
        choices={choices}
        indices={choices.map((_, i) => i)}
        active={active}
        pickedIndex={
          pickedWords === null ? -1 : choices.findIndex((c) => normalizeWords(c) === pickedWords)
        }
        theme={colours}
        send={(words) => {
          if (active && onAnswer) onAnswer(words);
        }}
      />
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
};

const questionStyle: CSSProperties = {
  margin: 0,
  fontSize: 16,
  textAlign: 'center',
};

const rowStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 8,
};

const rowButtonStyle: CSSProperties = {
  paddingLeft: 14,
  paddingRight: 14,
};

// A button is never under a fingertip high or wide. Its border is inside its
// size, so a thicker border on the picked one does not move or grow it.
const buttonStyle: CSSProperties = {
  boxSizing: 'border-box',
  minWidth: MIN_TARGET,
  minHeight: MIN_TARGET,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderRadius: 10,
  paddingLeft: 4,
  paddingRight: 4,
  paddingTop: 0,
  paddingBottom: 0,
  margin: 0,
  fontFamily: 'inherit',
  fontSize: 16,
  textAlign: 'center',
};

// A callout button keeps its words on one line, as the planned size is fixed.
const oneLineStyle: CSSProperties = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
