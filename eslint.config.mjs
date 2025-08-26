import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginCypress from "eslint-plugin-cypress";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        Cypress: true,
        cy: true,
      },
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      pluginCypress.configs.recommended,
    ],
    rules: {
      "react/prop-types": "off",
      "cypress/no-unnecessary-waiting": "off"
    },
    settings: {
      react: { version: "detect" },
    },
  },
]);
