import { BasePage } from './BasePage';
import { selectors } from '../support/selectors';

export class DashboardPage extends BasePage {
  assertLoaded(): void {
    this.assertUrlContains('/dashboard/index');
    this.assertHeading('Dashboard');
  }

  logout(): void {
    cy.get(selectors.dashboard.userDropdown).click();
    cy.get(selectors.dashboard.userDropdownMenu).contains('Logout').click();
  }
}
