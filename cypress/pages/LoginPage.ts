import { BasePage } from './BasePage';
import { selectors } from '../support/selectors';

export class LoginPage extends BasePage {
  visit(): void {
    cy.visit('/web/index.php/auth/login');
  }

  login(username: string, password: string): void {
    cy.get(selectors.login.usernameInput).clear().type(username);
    cy.get(selectors.login.passwordInput).clear().type(password, { log: false });
    cy.get(selectors.login.submitButton).click();
  }

  assertLoaded(): void {
    this.assertUrlContains('/auth/login');
    cy.get(selectors.login.submitButton).should('be.visible').and('be.enabled');
  }

  assertValidationMessage(message: string): void {
    cy.get(selectors.login.errorMessage).should('be.visible').and('contain.text', message);
  }
}
