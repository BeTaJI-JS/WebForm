module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "sort-keys/sort-keys-fix": 1, // Сортировка свойств объектов в алфавитном порядке (asc)
    "react/jsx-fragments": 0, // Разрешает использовать JSX фрагменты вместо `<div>`
    "sort-destructure-keys/sort-destructure-keys": 2, // Сортировка параметров деструктуризации в алфавитном порядке (asc)
    "react/button-has-type": 0, // Разрешает `<button>` без указания типа (button или submit)
    "import/order": [
      // Порядок импортов
      1, //
      {
        alphabetize: {
          // Сортировка импортов в алфавитном порядке
          caseInsensitive: true, // Игнорировать регистр
          order: "asc", // Сортировка в алфавитном порядке
        },
        pathGroupsExcludedImportTypes: ["error", "react"],
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always", // Новые строки между импортами
        pathGroups: [
          // Группировка импортов
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "external",
            pattern: "react-dom",
            position: "before",
          },
          {
            group: "internal",
            pattern: "assets/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "components/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "store",
            position: "after",
          },
          {
            group: "internal",
            pattern: "store/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "ui/**",
            position: "after",
          },
        ],
      },
    ],
  },
};
