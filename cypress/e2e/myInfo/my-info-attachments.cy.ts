import { step } from '../../support/step';
import { LoginPage } from '../../pages/LoginPage';
import { getRequiredEnv } from '../../support/env';
import { MyInfoPage } from '../../pages/MyInfoPage';
import { SideNavigation } from '../../pages/SideNavigation';
import { Utils } from '../../support/utils';

describe('My Info - Attachments', () => {
  const loginPage = new LoginPage();
  const myInfoPage = new MyInfoPage();
  const sideNav = new SideNavigation();
  const utils = new Utils();
  const fileName = 'attachment-test.png';
  const description = 'Test attachment description';

  it('should attach, verify and delete attachments', () => {
    step('Navigate to My Info', async  () => {
      loginPage.visit();
      loginPage.login(getRequiredEnv('username'), getRequiredEnv('password'));

      cy.url().should('include', '/dashboard/index');
      sideNav.openMyInfo();
      cy.url().should('include', 'viewPersonalDetails');
    });

    step('Upload attachment with Description', async () => {
      myInfoPage.openAddAttachment();

      utils.uploadFile(fileName);
      myInfoPage.enterAttachmentDescription(description);

      myInfoPage.clickSaveButton();
    });

    step('Verify attachment is saved', async () => {
      myInfoPage.getAttachmentRow(fileName).within(() => {
        cy.contains(fileName).should('be.visible');
        cy.contains(description).should('be.visible');
      });
    });

    step('Download and confirm the attachment', async () => {
      myInfoPage.getAttachmentRow(fileName).within(() => {
        myInfoPage.clickDownloadButton();
      });
      cy.readFile('cypress/downloads/attachment-test.png').should('exist');

      cy.task('deleteDownloads');
    });

    step('Delete the attachment and confirm its removal', async () => {
      myInfoPage.getAttachmentRow(fileName).within(() => {
        myInfoPage.clickDeleteButton();
      });
      myInfoPage.clickConfirmDeleteButton();
      cy.contains(fileName).should('not.exist');
    });
  });
});
