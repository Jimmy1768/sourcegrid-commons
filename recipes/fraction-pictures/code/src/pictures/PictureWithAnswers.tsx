// The pictures with the child's answers around them. Buttons whose words are
// exactly a drawn fraction sit beside that shape with an arrow to it; every other
// button stays in the row under the question, with no arrow. A tap sends the
// button's words. Only the newest question's buttons can be pressed: an older
// question fades, and the button the child picked is marked.
//
// It decides nothing about where things go: callouts.ts plans that, geometry.ts
// sizes it, FractionPicture draws the shapes. This file puts the buttons and
// arrows where the plan says and wires the tap.
//
// Whatever the block or the list holds, no answer is lost: a button the rule
// cannot place beside a shape is a plain button in the row.

import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import Svg, { Line, Polygon } from 'react-native-svg';

import { extentOf, normalizeWords, planAnswers, type Arrow } from './callouts';
import {
  DEFAULT_WIDTH,
  FractionPicture,
  resolveTheme,
  type PictureTheme,
} from './FractionPicture';
import { readFractionBlock, type Fraction, type Model } from './format';
import { MIN_TARGET, describeFraction } from './geometry';

const NO_CHOICES: readonly string[] = [];
const HEAD_LENGTH = 9;
const HEAD_HALF_WIDTH = 5;

export interface AnswerProps {
  // The Tutor's list of answers: each string is a button's words.
  choices?: readonly string[];
  // Called with the button's words when the child taps one.
  onAnswer?: (words: string) => void;
  // True for the newest question only. False fades the buttons and stops taps.
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
  place?: ViewStyle;
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
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={words}
      accessibilityHint={hint}
      accessibilityState={{ disabled: !active, selected: picked }}
      disabled={!active}
      onPress={onPress}
      style={[
        styles.button,
        place,
        {
          backgroundColor: picked ? theme.pickedBackground : theme.buttonBackground,
          borderColor: theme.buttonBorder,
          borderWidth: picked ? 3 : 1.5,
          opacity: active || picked ? 1 : 0.45,
        },
      ]}
    >
      <Text
        numberOfLines={oneLine ? 1 : undefined}
        style={[styles.buttonText, { color: theme.buttonText }]}
      >
        {words}
      </Text>
    </Pressable>
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
    <View testID="choice-row" style={styles.row}>
      {indices.map((i) => (
        <ChoiceButton
          key={i}
          testID={`choice-${i}`}
          words={choices[i]}
          place={styles.rowButton}
          active={active}
          picked={i === pickedIndex}
          theme={theme}
          onPress={() => send(choices[i])}
        />
      ))}
    </View>
  );
}

function Question({ text, colour }: { text?: string; colour: string }): ReactNode {
  if (!text) return null;
  return <Text style={[styles.question, { color: colour }]}>{text}</Text>;
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
    <View testID="picture-with-answers" style={styles.container}>
      <View testID="picture-canvas" style={{ width: canvasWidth, height: canvasHeight }}>
        <View style={{ position: 'absolute', left: extent.left, top: extent.top }}>
          <FractionPicture
            model={model}
            fractions={fractions}
            layout={plan.layout}
            named={plan.labelled}
            theme={theme}
          />
        </View>

        {plan.callouts.length > 0 ? (
          // The arrows are decoration: the button's hint and the picture's own text
          // alternative say what a screen reader needs.
          <View
            pointerEvents="none"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={StyleSheet.absoluteFill}
          >
            <Svg width={canvasWidth} height={canvasHeight}>
              {plan.callouts.map((callout) => {
                const shape = arrowShape(callout.arrow, extent.left, extent.top);
                return (
                  <Line
                    key={`line-${callout.choice}`}
                    testID={`arrow-${callout.choice}`}
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
                <Polygon
                  key={`head-${callout.choice}`}
                  points={arrowShape(callout.arrow, extent.left, extent.top).head}
                  fill={colours.arrow}
                />
              ))}
            </Svg>
          </View>
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
      </View>

      <Question text={question} colour={colours.text} />
      <ChoiceRow
        choices={choices}
        indices={plan.row}
        active={active}
        pickedIndex={pickedIndex}
        theme={colours}
        send={send}
      />
    </View>
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
    <View testID="fraction-block-text" style={styles.container}>
      <Text style={{ color: colours.text }}>{text}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
  question: {
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  rowButton: {
    paddingHorizontal: 14,
  },
  button: {
    minWidth: MIN_TARGET,
    minHeight: MIN_TARGET,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
