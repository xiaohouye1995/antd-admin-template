module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  // rules: {
  //   "eqeqeq": 2, // 必须全等
  // }
};
