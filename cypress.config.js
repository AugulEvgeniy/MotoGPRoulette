const { defineConfig } = require("cypress");
const addContext = require('mochawesome/addContext');


module.exports = defineConfig({
  videoCompression: false,
  projectId: 'ch1gds',
  e2e: {
    setupNodeEvents(on, config) {
      process.env.TERM = 'dumb';
      on('task', {
        logCatch(message) {
          console.log(message); // Handles all log messages
          return null;
        }}),
        addContext(on);
        return config;
    },
    testIsolation: false,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 30000
  }
});
