module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      // Add any custom rules or overrides as needed
    }
  }