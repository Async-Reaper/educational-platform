module.exports = {
   env: {
      browser: true,
      es2021: true,
      jest: true,
   },
   extends: [
      'airbnb',
   ],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: [
      'react',
      'i18next',
   ],
   overrides: [
      {
         extends: [
            'airbnb-typescript',
         ],
         files: [
            '*.ts',
            '*.tsx',
         ],
         parserOptions: {
            project: ['./tsconfig.json'],
            ecmaVersion: 'latest',
         },
      },
   ],
   rules: {
      semi: 'error',
      indent: ['error', 3],
      'no-trailing-spaces': 'error',
      'no-tabs': 'off',
      'no-use-before-define': 'off',
      'no-mixed-spaces-and-tabs': ['off', 'smart-tabs'],
      'max-len': ['warn', { ignoreComments: true, code: 100 }],
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/indent': ['error', 3],
      'i18next/no-literal-string': ['error', { markupOnly: true }],
      'import/extensions': 'off',
      'import/no-unresolved': ['off', { caseSensitive: false }],
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-restricted-globals': 'off',
      'react/button-has-type': 'off',
      'react/default-props-match-prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-indent': ['error', 3],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
      'jsx-quotes': ['error', 'prefer-single'],
   },
};
