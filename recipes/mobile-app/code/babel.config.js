// Expo's own Babel preset. Metro finds it on its own, but Jest's transform only
// reads this file, so without it the tests cannot read the app's JSX and
// TypeScript.
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
