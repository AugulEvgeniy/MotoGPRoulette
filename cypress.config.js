const { defineConfig } = require("cypress");
const addContext = require('mochawesome/addContext');

module.exports = defineConfig({
  videoCompression: false,
  projectId: 'ch1gds',
  e2e: {
    setupNodeEvents(on, config) {
      // Task for logging
      on('task', {
        logCatch(message) {
          console.log(message);
          return null;
        }
      });

      // Mochawesome context
      addContext(on);

      // Return the config object
      return config;
    },
    testIsolation: false,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 30000
  }
});