const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ch1gds',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    defaultCommandTimeout: 7000
  }
});
