module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    emcaFeatures: {
      jsx: true
    },
    emcaVersion: "latest",
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["node_modules/", "dist"],
  extends: ["semistandard", "eslint:recommended", "plugin:react/recommended"],
  rules: {
    trailingComma: 0,
    quotes: [2, "double"]
  }
};
