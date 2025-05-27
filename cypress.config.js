const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videoCompression: false,
  projectId: 'ch1gds',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logCatch(message) {
          console.log(message); // Handles all log messages
          return null;
        }}),
      // implement node event listeners here
    require('mochawesome/addContext')(on);
    },
    testIsolation: false,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 30000
  }
});
