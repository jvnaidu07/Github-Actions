const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: "https://www.globalsqa.com/demo-site/datepicker/",
      dragAndDrop: "https://www.globalsqa.com/demo-site/draganddrop/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
