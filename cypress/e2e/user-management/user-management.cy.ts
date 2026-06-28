import { step } from '../../support/step';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { UserManagementPage } from '../../pages/UserManagementPage';
import { getRequiredEnv } from '../../support/env';
import { createUser } from '../../support/test-data';

describe('User Management Flow', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();
  const userManagementPage = new UserManagementPage();

  it.only('should create, edit and delete user', () => {
    const newUser = createUser();

    step('Navigate to User Management', () => {
      loginPage.visit();
      loginPage.login(getRequiredEnv('username'), getRequiredEnv('password'));

      cy.url().should('include', '/dashboard/index');
      dashboardPage.openUserManagement();
      cy.url().should('include', '/admin/viewSystemUsers');
    });

    step('Create new user', () => {
      userManagementPage.openAddUser();

      userManagementPage.selectUserRole('ESS');
      userManagementPage.enterEmployeeName(newUser.employeeName);
      userManagementPage.selectStatus('Enabled');
      userManagementPage.enterUsername(newUser.username);
      userManagementPage.enterPassword(newUser.password);
      userManagementPage.enterConfirmPassword(newUser.password);
      userManagementPage.clickSaveButton();
    });

    step('Verify user', () => {
      userManagementPage.getUserRow(newUser.username).within(() => {
        cy.contains(newUser.username).should('be.visible');
        cy.contains(newUser.role).should('be.visible');
        cy.contains(newUser.employeeName).should('be.visible');
        cy.contains(newUser.status).should('be.visible');
      });
    });

    step('Edit user', () => {
      userManagementPage.clickEditUser(newUser.username);
      userManagementPage.selectStatus('Disabled');
      userManagementPage.clickSaveButton();

      userManagementPage.getUserRow(newUser.username).should('contain.text', 'Disabled');
    });

    step('Delete user', () => {
      userManagementPage.clickDeleteUser(newUser.username);
      userManagementPage.clickConfirmDeleteUser();
      cy.contains('.oxd-table-card', newUser.username).should('not.exist');
    });
  });
});
