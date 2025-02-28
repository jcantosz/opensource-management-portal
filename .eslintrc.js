module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  overrides: [
    {
      files: [
        '**/*.js',
      ],
      rules: {
        'no-undef': 'off',
      },
      env: {
        es6: true,
      },
    },
    {
      files: [
        '**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-case-declarations': 'off',
        'no-constant-condition': 'off',
        'no-duplicate-case': 'off',
        'no-empty': 'off',
        'no-ex-assign': 'off',
        'no-inner-declarations': 'off',
        'no-prototype-builtins': 'off',
        'no-useless-catch': 'off',
        'no-useless-escape': 'off',
        'no-var': 'off',
        'prefer-const': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
      },
    },
  ],
  ignorePatterns: ['default-assets-package/thirdparty/**/*.js', 'dist/**/*.js'],
};
