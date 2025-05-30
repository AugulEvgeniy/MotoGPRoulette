const { defineConfig } = require("cypress");
const addContext = require('mochawesome/addContext');

module.exports = defineConfig({
  videoCompression: false,
  projectId: 'ch1gds',
  e2e: {
    setupNodeEvents(on, config) {
      // Set TERM environment variable
      process.env.TERM = 'xterm';
      
      // Task for logging
      on('task', {
        logCatch(message) {
          console.log(message);
          return null;
        }
      });

      // Proper mochawesome context setup
      on('after:run', (results) => {
        addContext({ test }, results);
      });

      return config;
    },
    testIsolation: false,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 30000
  }
});