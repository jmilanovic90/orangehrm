import { selectors } from '../support/selectors';

export class DashboardPage {
  logout(): void {
    cy.get(selectors.dashboard.userDropdown).click();
    cy.get(selectors.dashboard.userDropdownMenu).contains('Logout').click();
  }

  getWidgetByName(widgetName: string) {
    return cy.contains(selectors.dashboard.dashboardWidget, widgetName);
  }
}
