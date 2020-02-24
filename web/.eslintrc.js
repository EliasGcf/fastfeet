module.exports = {
  env: {
    browser: true,
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
		'eslint-plugin-import-helpers'
  ],
  rules: {
		camelcase: "off",
		'prettier/prettier': 'error',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx','.js'] }
    ],
		'import/prefer-default-export': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-props-no-spreading': 'off',
		'no-param-reassign': 'off',
		'no-alert': 'off',
		'no-underscore-dangle': 'off',
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: [
					'/^react/',
					'module',
					'/^~/',
					[ 'parent',	'sibling', 'index' ]],
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
	}
};
