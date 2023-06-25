const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {
  // on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //you have to provide the path of the test script //will be stored as specPattern
    specPattern: 'cypress/Integration/example/*.js',
  },
  chromeWebSecurity: false
});