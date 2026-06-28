const common = {
  fileInput: 'input[type="file"]'
};

export class Utils {
  uploadFile(fileName: string, selector = common.fileInput): void {
    cy.get(selector).selectFile(`cypress/fixtures/${fileName}`, {
      force: true
    });
  }
}

export const utils = new Utils();
