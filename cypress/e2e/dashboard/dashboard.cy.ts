import { LoginPage } from '../../pages/LoginPage';
import { getRequiredEnv } from '../../support/env';
import { SideNavigation } from '../../pages/SideNavigation';
import { dashboardWidgets, invalidDashboardLabels } from '../../support/test-data';
import { DashboardPage } from '../../pages/DashboardPage';

describe('Dashboard', () => {
  const loginPage = new LoginPage();
  const sideNavigation = new SideNavigation();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.login(getRequiredEnv('username'), getRequiredEnv('password'));
    sideNavigation.openDashboard();
  });

  it('shows all necessary widgets', () => {
    dashboardWidgets.forEach((widgetName) => {
      dashboardPage.getWidgetByName(widgetName).should('be.visible');
    });
  });

  it.only("doesn't show invalid labels", () => {
    invalidDashboardLabels.forEach((label) => {
      cy.contains(label).should('not.exist');
    });
  });
});
