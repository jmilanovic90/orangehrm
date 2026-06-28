import { selectors } from '../support/selectors';

export class SideNavigation {
  assertVisible(): void {
    cy.get(selectors.sideNav.container).should('be.visible');
  }

  search(menuItem: string): void {
    cy.get(selectors.sideNav.searchInput).clear().type(menuItem);
  }

  open(menuItem: string): void {
    cy.get(selectors.sideNav.menuItem).contains(menuItem).click();
  }

  assertMenuItemVisible(menuItem: string): void {
    cy.get(selectors.sideNav.menuItem).contains(menuItem).should('be.visible');
  }
}
