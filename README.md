# @rob8080/eslint-config

A config mostly used by myself, including recommend extends from JS, TS & Vue, also with some additional rules.

All three parts can be used individually.

# Install

```shell
# Yarn
yarn add --dev eslint @rob8080/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-vue vue-eslint-parser

# NPM
npm install -D eslint @rob8080/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-vue vue-eslint-parser
```

* If you don't want use Typescript or Vue, just remove related packages from above.

# Usage

.eslintrc.js
```javascript
module.exports = {
    // ...
    extends: [
        // For normally usage
        '@rob8080/eslint-config'
        // Also configs can be seperately used
        // For plain JS only
        '@rob8080/eslint-config/lib/base',
        // For TS only
        '@rob8080/eslint-config/lib/ts',
        // For Vue only
        '@rob8080/eslint-config/lib/vue',
    ],
    // ...
}
```
