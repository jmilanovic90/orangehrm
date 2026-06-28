import { DashboardPage } from '../../pages/DashboardPage';
import { SideNavigation } from '../../pages/SideNavigation';

describe('Dashboard navigation', () => {
  const dashboardPage = new DashboardPage();
  const sideNavigation = new SideNavigation();

  beforeEach(() => {
    cy.login();
    dashboardPage.assertLoaded();
  });

  it('filters side navigation menu items', () => {
    sideNavigation.assertVisible();
    sideNavigation.search('Admin');
    sideNavigation.assertMenuItemVisible('Admin');
  });

  it('logs out from the user menu', () => {
    dashboardPage.logout();

    cy.url().should('include', '/auth/login');
  });
});
