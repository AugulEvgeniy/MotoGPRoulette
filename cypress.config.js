const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videoCompression: false,
  projectId: 'ch1gds',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('mochawesome/addContext')(on);
    },
    testIsolation: false,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 30000
  }
});
