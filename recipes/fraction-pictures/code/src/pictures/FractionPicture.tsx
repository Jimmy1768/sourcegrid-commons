// Draws fraction pictures with react-native-svg: circles or strips, one size for
// every whole, the fraction in standard notation under each shape unless a button
// labels it, and a screen-reader text on each picture.
//
// It draws what it is given and decides nothing: format.ts reads the block,
// geometry.ts and callouts.ts place things. On the phone it draws natively; in
// plain React on the web, react-native-svg draws the same SVG.
//
// Colours come from the theme passed in. Every value has a plain default, so the
// picture draws with no theme at all.

import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

import { fractionText, type Fraction, type Model } from './format';
import {
  LABEL_HEIGHT,
  OUTLINE_WIDTH,
  circleParts,
  describeFraction,
  layoutPictures,
  stripParts,
  type Box,
  type Layout,
} from './geometry';

export interface PictureTheme {
  shaded: string; // the shaded parts
  unshaded: string; // the parts left clear
  outline: string; // the lines between parts and round the whole
  text: string; // the fraction under a shape
  arrow: string; // the arrows from buttons to shapes
  buttonBackground: string;
  buttonBorder: string;
  buttonText: string;
  pickedBackground: string; // the button the child picked, once the question is past
}

export const defaultTheme: PictureTheme = {
  shaded: '#4f8cff',
  unshaded: '#ffffff',
  outline: '#1f2937',
  text: '#111827',
  arrow: '#374151',
  buttonBackground: '#ffffff',
  buttonBorder: '#1f2937',
  buttonText: '#111827',
  pickedBackground: '#dbeafe',
};

// The defaults, with any value the caller passed laid over them.
export function resolveTheme(theme: Partial<PictureTheme> = {}): PictureTheme {
  const resolved = { ...defaultTheme };
  for (const key of Object.keys(theme) as (keyof PictureTheme)[]) {
    const value = theme[key];
    if (value) resolved[key] = value;
  }
  return resolved;
}

// The width a picture is drawn in when the caller names none.
export const DEFAULT_WIDTH = 320;

export interface FractionPictureProps {
  model: Model;
  fractions: readonly Fraction[];
  // Where each shape sits. PictureWithAnswers passes the one it planned, with
  // room kept for buttons; left out, the pictures are laid out in `width`.
  layout?: Layout;
  width?: number;
  // Per shape: true when a button names it, so the shape drops its label.
  // Left out, every shape shows its fraction.
  named?: readonly boolean[];
  theme?: Partial<PictureTheme>;
}

interface ShapeProps {
  model: Model;
  fraction: Fraction;
  box: Box;
  index: number;
  theme: PictureTheme;
}

function Shape({ model, fraction, box, index, theme }: ShapeProps) {
  const line = {
    stroke: theme.outline,
    strokeWidth: OUTLINE_WIDTH,
    strokeLinejoin: 'round' as const,
  };
  return (
    <Svg width={box.width} height={box.height} viewBox={`0 0 ${box.width} ${box.height}`}>
      {model === 'circle'
        ? circleParts(fraction, box.width).map((part) => (
            <Path
              key={part.index}
              testID={`part-${index}-${part.index}`}
              d={part.path}
              fill={part.shaded ? theme.shaded : theme.unshaded}
              {...line}
            />
          ))
        : stripParts(fraction, box.width, box.height).map((cell) => (
            <Rect
              key={cell.index}
              testID={`part-${index}-${cell.index}`}
              x={cell.x}
              y={cell.y}
              width={cell.width}
              height={cell.height}
              fill={cell.shaded ? theme.shaded : theme.unshaded}
              {...line}
            />
          ))}
    </Svg>
  );
}

export function FractionPicture({
  model,
  fractions,
  layout,
  width = DEFAULT_WIDTH,
  named = [],
  theme,
}: FractionPictureProps) {
  const colours = resolveTheme(theme);
  const plan = layout ?? layoutPictures(model, fractions.length, width);

  return (
    <View testID="fraction-picture" style={{ width: plan.width, height: plan.height }}>
      {fractions.map((fraction, index) => {
        const box = plan.boxes[index];
        if (!box) return null;
        return (
          // The shape and its label are one picture to a screen reader, which says
          // the text alternative once and not the label as well.
          <View
            key={`${index}-${fractionText(fraction)}`}
            testID={`picture-${index}`}
            accessible
            accessibilityRole="image"
            accessibilityLabel={describeFraction(model, fraction)}
            style={{
              position: 'absolute',
              left: box.x,
              top: box.y,
              width: box.width,
              height: box.height + LABEL_HEIGHT,
            }}
          >
            <Shape model={model} fraction={fraction} box={box} index={index} theme={colours} />
            {named[index] ? null : (
              <Text
                style={[
                  styles.label,
                  { top: box.height, width: box.width, color: colours.text },
                ]}
              >
                {fractionText(fraction)}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    left: 0,
    height: LABEL_HEIGHT,
    lineHeight: LABEL_HEIGHT,
    fontSize: 16,
    textAlign: 'center',
  },
});
