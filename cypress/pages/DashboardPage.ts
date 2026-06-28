import { selectors } from '../support/selectors';

export class DashboardPage {
  logout(): void {
    cy.get(selectors.dashboard.userDropdown).click();
    cy.get(selectors.dashboard.userDropdownMenu).contains('Logout').click();
  }

  openUserManagement(): void {
    cy.contains('a', 'Admin').click();
  }

  openMyInfo(): void {
    cy.contains('a', 'My Info').click();
  }
}
