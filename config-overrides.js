const {
  override,
  useBabelRc,
  addLessLoader,
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addLessLoader({
    javascriptEnabled: true,
  }),
);
