import { DashboardPage } from '../../pages/DashboardPage';
import { LoginPage } from '../../pages/LoginPage';
import { getRequiredEnv } from '../../support/env';

describe('Authentication', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('logs in with valid credentials and reaches the dashboard', () => {
    loginPage.login(getRequiredEnv('username'), getRequiredEnv('password'));

    dashboardPage.assertLoaded();
  });

  it('shows an error for invalid credentials', () => {
    cy.fixture('users').then(({ invalidUser }) => {
      loginPage.login(invalidUser.username, invalidUser.password);
    });

    loginPage.assertValidationMessage('Invalid credentials');
  });
});
