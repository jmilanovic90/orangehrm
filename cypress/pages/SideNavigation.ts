export class SideNavigation {
  openUserManagement(): void {
    cy.contains('a', 'Admin').click();
  }

  openMyInfo(): void {
    cy.contains('a', 'My Info').click();
  }

  openDashboard(): void {
    cy.contains('a', 'Dashboard').click();
  }
}
