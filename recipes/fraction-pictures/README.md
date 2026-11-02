Fraction circles and strips drawn from a text block, with answer buttons and arrows to the shapes.

# Fraction pictures

## What it is

A feature for the phone app: one react-native-svg component that draws fractions as pictures, circles or strips, from a small block of text, and lets the child answer by tapping buttons placed around the picture, each with an arrow to the shape it names. React Native draws it on the phone and, through react-native-web, plain React draws the same shapes on the web, so the web app and the phone app copy one component. Nothing is stored and nothing is fetched: the picture is drawn on the device from the block's text. No chart library and no fraction library is used.

A block is the text of a fenced block in the Tutor's reply:

```
fraction circle
1/4
1/8
```

The first line is the word `fraction` and then `circle` or `strip`. After it, one fraction per line as `a/b`, with `b` from 1 to 12 and `a` from 0 to `b`. A block that does not read (a bad line, a denominator of 13, a numerator above its denominator, an unknown model) is shown as its own text, and nothing breaks.

What the child sees:

- A circle for `1/4` has four equal parts with one shaded, starting at twelve o'clock and going clockwise. A strip for `3/8` has eight equal parts with three shaded from the left.
- When fractions are compared, every whole is drawn the same size.
- Under each picture, its fraction in standard notation, unless a button labels it.
- Each picture has a screen-reader text, such as `a circle in 4 equal parts, 1 shaded`.
- Given the list `1/4`, `1/8` and `The quarter` over a picture of `1/4` and `1/8`, the first two buttons sit beside their shapes with arrows and those shapes drop their labels; `The quarter` stays in the row under the question with no arrow. A button gets an arrow only when its words are exactly a drawn fraction, spaces ignored. With no list, the picture shows its labels.
- Buttons are at least 48 points high and wide, sit on the side nearest their shape, and their arrows do not cross. A button the rule cannot place beside a shape stays in the row, so a plain button is the worst case, never a wrong one or a lost answer.
- A tap sends the button's words as the answer. Only the newest question's buttons can be pressed; an older question fades and the button picked is marked.

`renderers.ts` is the table from a block's first word to its renderer, with `fraction` the first entry. Finding the renderer is a lookup, and a first word not in the table finds nothing, so the caller shows the text.

### How to run it

No app store is involved. The picture opens through a local preview, in the simulator or on the person's own phone. This Recipe adds no screen of its own, so draw one block on a screen of the app to see it, for instance on the home screen:

```tsx
import { FractionBlock } from '../src/pictures/PictureWithAnswers';

<FractionBlock
  text={'fraction circle\n1/4\n1/8'}
  question="Which one is the quarter?"
  choices={['1/4', '1/8', 'The quarter']}
  onAnswer={(words) => console.log(words)}
/>
```

1. In the app's folder run `npm install` once if there is no `package-lock.json` yet (see *What to wire*), then `npm ci`, then `npx expo start`. Expo prints a QR code and a menu.
2. In the simulator: press `i` for the iOS Simulator (needs Xcode on a Mac) or `a` for an Android emulator (needs Android Studio and a virtual device). The app opens in it.
3. On the person's phone: install Expo Go, Expo's ready-made preview app, once. With the phone on the same Wi-Fi as the computer, scan the QR code: with the camera on an iPhone, or from inside Expo Go on Android. react-native-svg is part of Expo Go, so nothing is built or published.
4. Tap `1/4`: the words `1/4` reach `onAnswer`, and the buttons stay marked.

Left out: the Tutor learning to use pictures, the Booth taking this Recipe in, any model beyond circles and strips (number line, tape diagram, ten-frames, base-ten blocks, arrays), animation, drag answers, and any fraction or chart library.

## The files

Added, each under `code/src/pictures/`:

- `format.ts`: reads a block. Pure code with no imports. Gives the model and the fractions, or says it does not read, so the caller shows the text.
- `geometry.ts`: pure code. The sector paths of a circle (from twelve o'clock, clockwise), the cells of a strip (from the left), the text alternative, and the layout that draws every whole at one size and keeps room beside the pictures for buttons.
- `callouts.ts`: pure code. The callout rule: which buttons match a drawn fraction (exact words, spaces ignored), the side each sits on, arrows that do not cross, and the buttons left for the row.
- `FractionPicture.tsx`: draws the pictures in react-native-svg, one size for every whole, the fraction under each shape unless a button labels it, the accessibility label on each, and the theme with its plain defaults.
- `PictureWithAnswers.tsx`: the pictures with buttons around them, arrows to their shapes, the row of unmatched buttons under the question, a tap sending the button's words, older questions faded and the picked button marked. `FractionBlock` in the same file reads a block's text and draws it, or shows the text when it does not read.
- `renderers.ts`: the table from a block's first word to its renderer, with `fraction` the first entry, and `rendererFor`, the lookup.

Changed:

- `package.json`: the base's file whole, with `react-native-svg` added to its dependencies.

The rest of `code/` is the base's and stays as it is. `__tests__/` is the reviewer's; see *The tests*.

## Generic names

- `fraction`: the first word of a block, and the key of its entry in the table in `renderers.ts`. `circle` and `strip` are the two model words after it.
- `src/pictures/`: the folder the files go in. A project that moves it moves all six files together; they import one another by relative paths.
- `mobile-app`: the app's name in `package.json`, as the base has it. A project's own name replaces it there.
- The theme's names in `PictureTheme`: `shaded`, `unshaded`, `outline`, `text`, `arrow`, `buttonBackground`, `buttonBorder`, `buttonText` and `pickedBackground`. Each stands for a colour the project's own theme gives; the defaults are plain colours that work with no theme.
- The props `choices`, `onAnswer`, `active`, `picked` and `question`: the Tutor's list of answers, what a tap calls with the button's words, whether this is the newest question, the words the child picked, and the question's own words.
- `BUTTON_WIDTH`, `BUTTON_HEIGHT` and `MIN_TARGET` in `geometry.ts`: the size of an answer button and the least a button may be, 48 points.

## What to wire

What a project connects to this feature, and where:

- `package.json`: this Recipe's file replaces the base's, whole. It is the base's with one line added, `react-native-svg` at `15.12.1`, the version Expo SDK 54 asks for; `npx expo install --check` confirms it. The base carries no `package-lock.json`, and neither does this Recipe, so whoever first builds from it runs `npm install` once, which makes the lock file, and keeps it.
- Where a reply's text is drawn: this Recipe changes no screen, because only the project knows where a Tutor reply is drawn. Wherever that is, for each fenced block call `rendererFor(blockText)`; when it gives a renderer, draw `<Renderer text={blockText} question={...} choices={...} onAnswer={...} active={...} picked={...} theme={...} />`, and when it gives `null`, draw the text as it is. `question` and `choices` are the reply's own question and list. `active` is true only for the newest question, and `picked` is the words the child picked once it is past.
- The theme: pass the project's colours as `theme`, using the names in *Generic names*. Any value left out takes its default.
- The answer: `onAnswer` receives the button's words, exactly as the Tutor wrote them, and the project sends them as the child's reply.
- The web app: copy the six files under `src/pictures/` into it and draw through the same `renderers.ts` table. react-native-svg draws on the web through react-native-web, which the web app aliases `react-native` to; that is the web app's own wiring and a later piece of work, not this Recipe's.

## The tests

The tests are the reviewer's, written under `__tests__/` and run by Jest with Expo's own `jest-expo` preset, with `@testing-library/react-native` for the components. They prove:

- The parser: good blocks read; a bad line, a denominator of 13, a numerator above its denominator and an unknown model do not read.
- The geometry: parts are equal, shading starts at twelve o'clock going clockwise on a circle and from the left on a strip, and the text alternative for `1/4` on a circle is `a circle in 4 equal parts, 1 shaded`.
- The callout rule: an exact match with spaces ignored gets an arrow, `The quarter` stays in the row, no list keeps the labels, arrows do not cross, and a button is at least 48 points.
- The component: the labels, the fading of an older question, the marking of the picked button, and a tap sending the button's words.
- The table: the word `fraction` finds the fraction renderer, and an unknown word finds nothing.

The house check runs this Recipe through four steps on the base with this feature laid over it: `npm ci`, `npx jest --ci`, `npx expo lint` and `npm audit`. The Jest tests are proven by that check on the person's own machine, which has the network; no check inside a build installs anything. A build's own tests look only at the tree: the files are there, `package.json` pins react-native-svg, `recipe.yml` fits mobile-app, this README has its sections in order, and `DESIGN.md` is there.

## Checks it meets

`none`: the Map this Recipe was built under lists no checks. What the tests model: the spec's own done examples for the pictures, that a block with a first line `fraction circle` and lines `1/4` and `1/8` reads as two circle pictures, that a block that does not read shows as text, and that of the list `1/4`, `1/8` and `The quarter` only the first two get arrows.
