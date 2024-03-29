module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    'max-len': ['error', { code: 150 }],
    'import/extensions': ['error', {
      js: 'always',
      jsx: 'always',
      json: 'always',
      scss: 'always',
    }],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', 'react'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
      ],
      rules: {
        'max-len': ['error', { code: 150 }],
        'import/extensions': ['error', {
          js: 'always',
          jsx: 'always',
          json: 'always',
          scss: 'always',
        }],
      },
    },
  ],
};
