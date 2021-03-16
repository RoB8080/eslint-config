export const base = {
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "array-callback-return": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "comma-dangle": ["error", "always-multiline"],
        "curly": "error",
        "eol-last": ["error", "always"],
        "eqeqeq": "error",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "key-spacing": "error",
        "max-lines": ["warn", { "max": 400 }],
        "no-trailing-spaces": ["error", { "ignoreComments": true }],
        "no-unneeded-ternary": "warn",
        "no-useless-return": "error",
        "object-curly-spacing": ["error", "always"],
        "prefer-const": "error",
        "prefer-destructuring": ["error", { "object": true, "array": false }],
        "prefer-promise-reject-errors": "error",
        "quotes": ["error", "single"],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }]
    }
}
export const ts = {
    "parserOptions": {
        "parser": "@typescript-eslint/parser"
    },
    "plugins": ["@typescript-eslint"],
    "extends": [
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-namespace": ["error", { "allowDeclarations": true }]
    }
}
export const vue = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "plugin:vue/vue3-recommended"
    ],
    "rules": {
        "vue/arrow-spacing": "error",
        "vue/camelcase": "error",
        "vue/block-spacing": "error",
        "vue/brace-style": "error",
        "vue/comma-dangle": ["error", "always-multiline"],
        "vue/component-name-in-template-casing": ["error", "kebab-case"],
        "vue/eqeqeq": "error",
        "vue/html-indent": ["error", 4],
        "vue/key-spacing": "error",
        "vue/match-component-file-name": "error",
        "vue/object-curly-spacing": ["warn", "always"]
    }
}
