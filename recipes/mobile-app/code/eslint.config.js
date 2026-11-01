// Expo's own lint, which `npx expo lint` runs: the flat config Expo's template
// ships, with Jest's names known to the tests so they are not reported as
// undefined.
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

const jestGlobals = {
  describe: "readonly",
  it: "readonly",
  test: "readonly",
  expect: "readonly",
  jest: "readonly",
  beforeEach: "readonly",
  afterEach: "readonly",
  beforeAll: "readonly",
  afterAll: "readonly",
};

module.exports = defineConfig([
  expoConfig,
  {
    files: ["**/__tests__/**", "**/*.test.{js,jsx,ts,tsx}"],
    languageOptions: { globals: jestGlobals },
  },
  {
    ignores: ["dist/*", ".expo/*", "node_modules/*"],
  },
]);
