module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    "airbnb-typescript",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
    createDefaultProgram: true,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    indent: "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/indent": "off",
    "react/require-default-props": [0],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "class-methods-use-this": [0],
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
