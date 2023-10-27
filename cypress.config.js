const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,
  retries:{
    runMode:1,
    openMode:0
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions:{
    configFile: 'reporter-config.json',
  },

  e2e: {
    baseUrl: 'https://demoqa.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
