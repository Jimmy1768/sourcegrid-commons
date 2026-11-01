An Expo phone app: router navigation, sign-in against api-service, a settings screen and one test.

# Mobile app

## What it is

The base for a phone app built with Expo (SDK 54, React Native, TypeScript, expo-router). It signs in against the `api-service` base with `api-sign-in` laid on it, using the same email address and password the person uses on the web, and talks to it through the JSON API only, never through screens.

Three screens, in one stack:

- Sign in (`app/sign-in.tsx`): email address and password. A right password gets a token from the API, which goes into the device's secure store; a wrong one shows the API's own message and stores nothing.
- Home (`app/index.tsx`), the first screen: with no token stored it sends the person to sign in; with one it shows who is signed in, asked of the API with the token, and a link to Settings. A token the API refuses with a 401 is forgotten and the person goes back to sign in.
- Settings (`app/settings.tsx`): who is signed in, which server the app talks to, and a Sign out button. Signing out asks the API to revoke the token, then forgets it on the phone, even when the API cannot be reached.

The phone keeps one thing: the token, in the secure store (Keychain on iOS, Keystore on Android). Not the password, not the person's details.

`src/api.ts` is the small API client: status, sign in, sign out, the current person and a paged list, each a function that takes the token it needs. Every error the API answers has one shape, and the client throws it as one `ApiError` with the HTTP status and the code; a status of 0 means the API could not be reached. `src/session.ts` reads, saves and clears the token and gives screens a `useSession` hook. A screen reads the session when it opens, so signing in and out need no shared state.

### How to run it

No app store is involved. The app opens through a local preview, in the simulator or on the person's own phone.

1. Start the API. In an app built from `api-service` with `api-sign-in` laid on it, run `bin/setup` (it makes the development test login, `person@example.com` with the password `test-login`), then `bin/dev`. `bin/dev` listens on every address of the computer, at port 3000, so a phone on the same network can reach it.
2. In this app's folder run `npm ci`, then `npx expo start` (`npm start` is the same). Expo prints a QR code and a menu.
3. In the simulator: press `i` for the iOS Simulator (needs Xcode on a Mac) or `a` for an Android emulator (needs Android Studio and a virtual device). The app opens in it.
4. On the person's phone: install Expo Go, Expo's ready-made preview app, once. With the phone on the same Wi-Fi as the computer, scan the QR code: with the camera on an iPhone, or from inside Expo Go on Android. The app opens in Expo Go from the computer; nothing is built or published.
5. Sign in with the test login.

Where the API is: when `EXPO_PUBLIC_API_URL` is set, in the shell that starts Expo, it names the API whole, for instance `EXPO_PUBLIC_API_URL=http://192.168.1.20:3000 npx expo start`. When it is not set, the app takes the API to run on the computer that serves the app to the phone, at port 3000. An Android emulator reaches the computer at `10.0.2.2` and may need the variable. The calls go over plain http on the local network; an API on a server needs https.

`package-lock.json` is not carried: nothing here can resolve one. `npm ci` needs it, so whoever first builds from this Recipe runs `npm install` once, which makes it, and keeps it. The version ranges in `package.json` are Expo SDK 54's; `npx expo install --check` confirms them.

Left out, each its own feature or a later version: push notifications, deep links, camera, offline sync, store builds and updates, sign-up, password reset on the phone, sign-in through outside providers, and deployment.

## The files

- `package.json`: the app's scripts (`start`, `android`, `ios`, `test`, `lint`), Expo SDK 54 with `expo-router`, `expo-secure-store`, `expo-constants`, `expo-linking`, `expo-status-bar`, `react-native-screens` and `react-native-safe-area-context`; for development and test `jest` with the `jest-expo` preset (set in its `jest` field), `@testing-library/react-native`, `react-test-renderer`, `eslint` with `eslint-config-expo`, and `typescript`. `main` is `expo-router/entry`.
- `app.json`: the app's name, slug and URL scheme, the `expo-router` and `expo-secure-store` plugins, typed routes. It holds no server address.
- `tsconfig.json`: extends Expo's base, strict.
- `babel.config.js`: Expo's own Babel preset. Metro finds it on its own, but Jest's transform only reads this file, so without it the tests cannot read the app's JSX and TypeScript.
- `eslint.config.js`: Expo's own flat lint config, which `npx expo lint` runs, with Jest's names known to the tests.
- `.gitignore`: Expo's own. What it excludes (`node_modules/`, `.expo/`, local env files) is never part of this Recipe.
- `app/`: `_layout.tsx`, the stack and the status bar; `index.tsx`, the home screen; `sign-in.tsx`; `settings.tsx`.
- `src/`: `api.ts`, the API client and `ApiError`; `session.ts`, the token in the secure store and `useSession`.
- `__tests__/`: the reviewer's; see *The tests*.

## Generic names

- `mobile-app` and `Mobile app`: the app's name in `package.json` and `app.json` (`name` and `slug`), and the spec's name for the app. `mobileapp` is its URL scheme.
- `api-token`, the secure store key in `src/session.ts`: the name the token is kept under on the phone.
- `EXPO_PUBLIC_API_URL`: the environment variable that names the API's address.
- `/api/v1`, `email_address`, `device_name` and `Authorization: Bearer <token>`: the API's own names, from `api-service` and `api-sign-in`. A spec that renames them there renames them in `src/api.ts`.
- The sign-in, home and settings screens' words, and `Item`, the shape of the list's sample items: the project's own.

## What to wire

What a project connects to this base, and where:

- The API's address: `EXPO_PUBLIC_API_URL`, set in the shell that starts Expo, names the API whole. The client in `src/api.ts` is where every call to it is made, so a project that fixes the address, or renames the API's paths, changes it there and nowhere else. A server needs https.
- The token store: `src/session.ts` keeps the token in the device's secure store under the key `api-token`, and gives screens `useSession`. The screens read the session when they open, so nothing else is wired to it. A project that renames the key changes it in that one file.
- The Rails side: the API this app signs in against is an app built from `api-service` with `api-sign-in` laid on it, run with `bin/setup` and `bin/dev`. Without both, the sign-in call has nothing to answer it.
- The app's own names: the name, slug and URL scheme in `app.json` and the name in `package.json` are the project's own.
- The screens: the words on the sign-in, home and settings screens, and the shape of `Item` for the paged list, are the project's own. A new screen is a new file in `app/`, and expo-router makes its route.

## The tests

The tests are the reviewer's, written under `__tests__/` and run by Jest with Expo's own `jest-expo` preset. They prove:

- With no token stored, the app shows the sign-in screen.
- With a token stored, the app shows the home screen.

The house check runs this Recipe through four steps in its assembled folder: `npm ci`, `npx jest --ci`, `npx expo lint` and `npm audit`. Because this Recipe carries no `package-lock.json`, the check first runs `npm install` once to make it, then `npm ci`. Its record of the run says the Node version and the Expo SDK it tested against.

## Checks it meets

`none`: the Map this Recipe was built under lists no checks. What the tests model: the app shows the sign-in screen with no token and the home screen with one, which is the spec's own done example for the app; sign-in and sign-out against the API are proven on the API side by `api-sign-in`'s tests.
