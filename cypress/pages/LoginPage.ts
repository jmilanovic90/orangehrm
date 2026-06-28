import { selectors } from '../support/selectors';

export class LoginPage {
  visit(): void {
    cy.visit('/web/index.php/auth/login');
  }

  login(username: string, password: string): void {
    cy.get(selectors.login.usernameInput).clear().type(username);
    cy.get(selectors.login.passwordInput).clear().type(password, { log: false });

    this.clickSubmit();
  }

  clickSubmit(): void {
    cy.get(selectors.login.submitButton).click();
  }

  assertLoaded(): void {
    cy.url().should('include', '/auth/login');
    cy.get(selectors.login.submitButton).should('be.visible').and('be.enabled');
  }

  assertValidationMessage(message: string): void {
    cy.get(selectors.login.errorMessage).should('be.visible').and('contain.text', message);
  }

  getRequiredMessage(field: string) {
    return cy
      .get(`input[name="${field}"]`)
      .parents(selectors.common.input)
      .find(selectors.login.requiredField);
  }
}
