const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
    screenshotsFolder: 'reports/screenshots',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: './vite.config.js',
    },
  },
});
