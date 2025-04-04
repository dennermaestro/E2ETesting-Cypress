const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://demoqa.com",
    pageLoadTimeout: 120000 // wait until the loading of the screen is fully completed
    
  }
});