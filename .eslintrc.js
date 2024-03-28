module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['only-warn', 'react', 'import'],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    semi: 'off',
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    indent: 'off',
    quotes: 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-trailing-spaces': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/prop-types': 'off',
    '@next/next/no-img-element': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/lib/**',
            group: 'external',
          },
          {
            pattern: '{types/*,@/types*,./types,@/types/*}',
            group: 'type',
          },
          {
            pattern:
              '{hooks,@/hooks/**/*,./hooks/**,./use**,../use**,../../use**,../../../use**,,../../hooks/**,./_hooks/**,../../../_hooks/**,@/hooks/*}',
            group: 'internal',
          },
          {
            pattern: '{utils/**/*,./utils,../utils,../../utils,../../../utils,@/utils/*}',
            group: 'type',
          },
          {
            pattern: '{@/constants/*,./constants}',
            group: 'type',
          },
          {
            pattern:
              '{states/**/*,./states*,./**/states*,../states*,../../states*,../../../states*,,../../../../states*,**/**/**/states*,@/states/**/*,}',
            group: 'type',
          },
          {
            pattern: '@/services/**',
            group: 'type',
          },
          {
            pattern: '{./helpers,./data,./config,./defaults,../../../defaults}',
            group: 'type',
          },
          {
            pattern:
              '{components,components/_common/**,@/components,@/components/**,svgs,@/assets/**/*,@/app/**,routes/**,public/**,@/containers/*,@/containers/**/*,}',
            group: 'index',
          },
          {
            pattern: '{styles,./*.scss,../*.scss,../*.module.scss,/*.css,../*.css}',
            group: 'index',
          },
        ],
        groups: [
          ['external', 'builtin'],
          ['type', 'internal', 'object'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  ignorePatterns: ['.*.js', 'node_modules/'],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
