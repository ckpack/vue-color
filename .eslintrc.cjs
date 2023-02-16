module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'no-console': 'off',
    'vue/require-explicit-emits': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
};
