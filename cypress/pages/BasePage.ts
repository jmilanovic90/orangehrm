export abstract class BasePage {
  protected assertUrlContains(path: string): void {
    cy.url().should('include', path);
  }

  protected assertHeading(text: string): void {
    cy.contains('h6', text).should('be.visible');
  }
}
