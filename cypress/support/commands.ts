import { LoginPage } from '../pages/LoginPage';
import { getRequiredEnv } from './env';

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add(
  'login',
  (username = getRequiredEnv('username'), password = getRequiredEnv('password')) => {
    const loginPage = new LoginPage();

    loginPage.visit();
    loginPage.login(username, password);
  }
);

export {};
