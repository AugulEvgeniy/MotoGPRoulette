const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ch1gds',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('mochawesome/addContext')(on);
    },
    testIsolation: false,
    defaultCommandTimeout: 7000
  },
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  }
});
