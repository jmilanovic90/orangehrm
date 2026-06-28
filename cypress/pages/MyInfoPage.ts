import { selectors } from '../support/selectors';

export class MyInfoPage {
  openAddAttachment(): void {
    cy.contains('button', 'Add').click();
  }

  enterAttachmentDescription(description: string): void {
    cy.get(selectors.myInfo.description).type(description);
  }

  clickSaveButton(): void {
    cy.get(selectors.login.submitButton).last().click();
  }

  getAttachmentRow(attachmentName: string) {
    return cy.contains(selectors.common.tableRow, attachmentName);
  }

  clickDownloadButton() {
    cy.get(selectors.myInfo.downloadButton).click();
  }

  clickDeleteButton() {
    cy.get(selectors.myInfo.deleteButton).click();
  }

  clickConfirmDeleteButton(): void {
    cy.get(selectors.myInfo.confirmDeleteButton).click();
  }
}
