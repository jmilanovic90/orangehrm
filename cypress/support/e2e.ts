import './commands';
import 'allure-cypress';

Cypress.on('uncaught:exception', () => {
  return false;
});
