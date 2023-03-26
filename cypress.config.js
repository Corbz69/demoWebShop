const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      //'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      "cypress/e2e/RegisterUser.spec.cy.js",
      "cypress/e2e/LoginUser.spec.cy.js"
    ],
  },
});
