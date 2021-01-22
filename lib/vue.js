module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            'jsx': true,
        },
    },
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/arrow-spacing': 'error',
        'vue/camelcase': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/eqeqeq': 'error',
        'vue/html-indent': ['error', 4],
        'vue/key-spacing': 'error',
        'vue/match-component-file-name': 'error',
        'vue/object-curly-spacing': ['warn', 'always'],
    },
}
