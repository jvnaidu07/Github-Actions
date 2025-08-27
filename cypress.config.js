const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: "https://www.globalsqa.com/demo-site/datepicker/",
      dragAndDrop: "https://www.globalsqa.com/demo-site/draganddrop/",
      dropDown: "https://www.globalsqa.com/demo-site/select-dropdown-menu/",
      fileUpload: "https://tus.io/demo",
      windowsHandle: "https://www.globalsqa.com/demo-site/frames-and-windows/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
