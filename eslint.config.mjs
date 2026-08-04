import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPlaywright from "eslint-plugin-playwright";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPlaywright.configs["flat/recommended"],
  eslintPluginPrettier,
  eslintConfigPrettier,
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "playwright-report/**",
      "test-results/**",
      "allure-results/**",
      "allure-report/**",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "playwright/no-wait-for-timeout": "warn",
      "prettier/prettier": "error",
    },
  },
);
