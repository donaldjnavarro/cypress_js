const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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
