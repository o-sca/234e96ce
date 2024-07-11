module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    emcaFeatures: {
      jsx: true,
    },
    emcaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react"],
  ignorePatterns: ["node_modules/", "dist"],
  extends: ["semistandard", "eslint:recommended", "plugin:react/recommended"],
  rules: {
    "comma-dangle": "off",
    quotes: [2, "double"],
    "react/prop-types": "off",
    "space-before-function-paren": "off",
  },
};
