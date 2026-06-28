import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';

const env = {
  ...(process.env.ORANGEHRM_USERNAME ? { username: process.env.ORANGEHRM_USERNAME } : {}),
  ...(process.env.ORANGEHRM_PASSWORD ? { password: process.env.ORANGEHRM_PASSWORD } : {})
};

export default defineConfig({
  projectId: '6j111b',
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL ?? 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 1,
      openMode: 0
    },
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results'
      });

      return config;
    }
  },
  env
});
