module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
  },
  rules: {
    'consistent-return': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'no-restricted-globals': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'no-multi-assign': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-mixed-operators': 0,
    'no-unused-expressions': 0,
    'max-len': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': 0,
  },
};
