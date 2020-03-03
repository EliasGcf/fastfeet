module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
		'airbnb',
		'prettier',
		'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: 'readonly',
	},
	parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
		'react',
		'prettier',
		'react-hooks',
		'eslint-plugin-import-helpers',
  ],
  rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.jsx', '.js']
			}
		],
		'import/prefer-default-export': 'off',
		'react/state-in-constructor' : 'off',
		'react/static-property-placement': 'off',
		'react/sort-comp': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-param-reassign': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-underscore-dangle': 'off',
		camelcase: 'off',
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: [
					'/^react/',
					'module',
					'/^~/',
					[ 'parent', 'sibling', 'index' ]],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
	settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
