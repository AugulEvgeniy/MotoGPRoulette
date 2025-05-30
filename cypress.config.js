const { defineConfig } = require("cypress");
const addContext = require('mochawesome/addContext');

module.exports = defineConfig({
  videoCompression: false,
  projectId: 'ch1gds',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/chrome',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Set TERM environment for CI
      process.env.TERM = 'xterm';
      
      // Task for logging
      on('task', {
        logCatch(message) {
          console.log(message);
          return null;
        }
      });

      // Proper Mochawesome context setup
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures > 0) {
          results.tests.forEach((test) => {
            if (test.state === 'failed') {
              addContext({ test }, {
                title: 'Screenshot',
                value: `assets/${spec.name}/${test.title}.png`
              });
            }
          });
        }
      });

      return config;
    },
    testIsolation: false,
    defaultCommandTimeout: 7000,
    pageLoadTimeout: 30000
  }
});