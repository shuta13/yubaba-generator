module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "no-extra-semi": "warn",
    "no-undef": "warn",
    "no-console": "off",
    "quotes": ["error", "single"],
    "space-before-blocks": ["warn", { "classes": "always", "functions": "always", "keywords": "always" }]
  }
}
