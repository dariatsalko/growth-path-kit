// @ts-check

import eslint from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/dist/**",
      "**/build",
      ".yarn",
      ".vscode",
      "/public",
      "assets",
      "**/*.min.js",
      "**/bundle*.js",
      "**/vendor*.js",
      "**/lib/**/*.js",
      "**/.next/**",
      "**/coverage/**",
      "**/*.config.js",
      "postcss.config.js",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react"], // React imports
            ["^@?\\w"], // Packages
            ["^node:"], // Node.js builtins
            ["^\\."], // Relative imports
            ["^"], // Absolute imports
            ["^\\u0000"], // Side effect imports
            ["^.+\\.s?c?s?ss$"], // CSS and SCSS files
          ],
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Using TypeScript for prop validation
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Relaxed rules for better development experience
      "@typescript-eslint/no-explicit-any": "warn",
      "no-irregular-whitespace": "error",
    },
  }
);
