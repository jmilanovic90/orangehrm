import { LoginPage } from '../../pages/LoginPage';
import { getRequiredEnv } from '../../support/env';
import { invalidUser } from '../../fixtures/test-data';

describe('Authentication', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('shows an error for invalid credentials', () => {
    loginPage.login(invalidUser.username, invalidUser.password);

    loginPage.assertValidationMessage('Invalid credentials');
  });

  it('shows an error for empty credentials', () => {
    loginPage.clickSubmit();

    loginPage.getRequiredMessage('username').should('contain.text', 'Required');
    loginPage.getRequiredMessage('password').should('contain.text', 'Required');
  });

  it('logs in with valid credentials and reaches the dashboard', () => {
    loginPage.login(getRequiredEnv('username'), getRequiredEnv('password'));

    cy.url().should('include', '/dashboard/index');
    cy.get('h6').contains('Dashboard').should('be.visible');
  });
});
