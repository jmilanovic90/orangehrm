import { selectors } from '../support/selectors';

export class UserManagementPage {
  openAddUser(): void {
    cy.contains('button', 'Add').click();
  }

  clickEditUser(username: string): void {
    cy.contains(selectors.common.tableRow, username)
      .find(selectors.userManagement.editUserButton)
      .click();
  }

  clickDeleteUser(username: string): void {
    cy.contains(selectors.common.tableRow, username)
      .find(selectors.userManagement.deleteUserButton)
      .click();
  }

  clickConfirmDeleteUser(): void {
    cy.get(selectors.userManagement.confirmDeleteButton).click();
  }

  getUserRow(username: string) {
    return cy.contains(selectors.common.tableRow, username);
  }

  clickSaveButton(): void {
    cy.get(selectors.login.submitButton).click();
  }

  enterUsername(username: string): void {
    cy.contains(selectors.common.input, 'Username').find('input').clear().type(username);
  }

  enterPassword(password: string): void {
    cy.contains(selectors.common.input, 'Password').find('input').clear().type(password);
  }

  enterConfirmPassword(password: string): void {
    cy.contains(selectors.common.input, 'Confirm Password').find('input').clear().type(password);
  }

  enterEmployeeName(name: string): void {
    cy.contains(selectors.common.input, 'Employee Name').find('input').clear().type(name);

    cy.get(selectors.userManagement.dropdownAutoComplete).contains(name).click();
  }

  selectUserRole(role: 'Admin' | 'ESS'): void {
    cy.contains(selectors.common.input, 'User Role')
      .find(selectors.userManagement.userRoleDropdown)
      .click();

    cy.get(selectors.userManagement.dropdown)
      .contains(selectors.userManagement.dropdownOption, role)
      .click();
  }

  selectStatus(status: 'Enabled' | 'Disabled'): void {
    cy.contains(selectors.common.input, 'Status')
      .find(selectors.userManagement.userRoleDropdown)
      .click();

    cy.get(selectors.userManagement.dropdown)
      .contains(selectors.userManagement.dropdownOption, status)
      .click();
  }
}
