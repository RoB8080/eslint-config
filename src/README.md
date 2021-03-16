# @package

A config mostly used by myself, including recommend extends from JS, TS & Vue, also with some additional rules.


# Install

```shell
# Yarn
yarn add --dev eslint @package

# NPM
npm install -D eslint @package
```

* Also add peer dependencies listed below

# Peer Dependencies
package|eslint-config|-base|-ts|-vue
-|-|-|-|-
eslint@>=7|✔️|✔️|✔️|✔️
@typescript-eslint/eslint-plugin@>=4.14.0|✔️||✔️|
@typescript-eslint/parser@>=4.14.0|✔️||✔️|
eslint-plugin-vue@>=7.4.0|✔️|||✔️
vue-eslint-parser@>=7.3.0|✔️|||✔️

# Usage

.eslintrc.js
```javascript
module.exports = {
    // ...
    extends: [
        '@package', // or other package
    ],
    // ...
}
```

# See also:
* [@rob8080/eslint-config](https://www.npmjs.com/package/@rob8080/eslint-config)
* [@rob8080/eslint-config-base](https://www.npmjs.com/package/@rob8080/eslint-config-base)
* [@rob8080/eslint-config-ts](https://www.npmjs.com/package/@rob8080/eslint-config-ts)
* [@rob8080/eslint-config-vue](https://www.npmjs.com/package/@rob8080/eslint-config-vue)
