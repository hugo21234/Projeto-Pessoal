export default [
  {
    ignores: [
      'node_modules/**',
      '.npm-cache/**',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      indent: ['warn', 2],
      quotes: ['warn', 'single', { avoidEscape: true }],
      semi: ['warn', 'always'],
      'no-undef': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-trailing-spaces': 'warn',
    },
  },
];
