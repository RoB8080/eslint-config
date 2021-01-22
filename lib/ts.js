module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-namespace': ['error', { 'allowDeclarations': true }],
    },
}
