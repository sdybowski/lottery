module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:flowtype/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
				"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"flowtype"
	],
	"rules": {
		"indent": [
				"error",
				"tab",
				{ "SwitchCase": 1 }
		],
		"quotes": [
				"error",
				"single"
		],
		"semi": [
				"error",
				"always"
		],
		"prefer-template": "error",
		"object-curly-spacing": ["error", "always"],
		"comma-dangle": ["error", "always-multiline"],
	}
};
