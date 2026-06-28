import { step } from '../../support/step';
import { LoginPage } from '../../pages/LoginPage';
import { getRequiredEnv } from '../../support/env';
import { MyInfoPage } from '../../pages/MyInfoPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { Utils } from '../../support/utils';

describe('My Info - Attachments', () => {
  const loginPage = new LoginPage();
  const myInfoPage = new MyInfoPage();
  const dashboardPage = new DashboardPage();
  const utils = new Utils();

  it.only('should attach, verify and delete attachments', () => {
    const fileName = 'attachment-test.png';
    const description = 'Test attachment description';

    step('Navigate to My Info', () => {
      loginPage.visit();
      loginPage.login(getRequiredEnv('username'), getRequiredEnv('password'));

      cy.url().should('include', '/dashboard/index');
      dashboardPage.openMyInfo();
      cy.url().should('include', 'viewPersonalDetails');
    });

    step('Upload attachment with Description', () => {
      myInfoPage.openAddAttachment();

      utils.uploadFile(fileName);
      myInfoPage.enterAttachmentDescription(description);

      myInfoPage.clickSaveButton();
    });

    step('Verify attachment is saved', () => {
      myInfoPage.getAttachmentRow(fileName).within(() => {
        cy.contains(fileName).should('be.visible');
        cy.contains(description).should('be.visible');
      });
    });

    step('Download and confirm the attachment', () => {
      myInfoPage.getAttachmentRow(fileName).within(() => {
        myInfoPage.clickDownloadButton();
      });
      cy.readFile('cypress/downloads/attachment-test.png').should('exist');

      cy.task('deleteDownloads');
    });

    step('Delete the attachment and confirm its removal', () => {
      myInfoPage.getAttachmentRow(fileName).within(() => {
        myInfoPage.clickDeleteButton();
      });
      myInfoPage.clickConfirmDeleteButton();
      cy.contains('.oxd-table-card', fileName).should('not.exist');
    });
  });
});
