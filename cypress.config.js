const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://d3.inc",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
