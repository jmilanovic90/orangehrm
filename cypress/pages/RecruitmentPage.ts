import { selectors } from '../support/selectors';

export class RecruitmentPage {
  openVacancies(): void {
    cy.contains('a', 'Vacancies').click();
  }

  selectDropdownValue(selector: string, value: string) {
    cy.get(selector).click();
    cy.contains(selectors.recruitment.dropdownOption, value).click();
  }

  selectJobTitle(jobTitle: string) {
    this.selectDropdownValue(selectors.recruitment.jobTitleDropdown, jobTitle);
  }

  selectVacancy(vacancy: string) {
    this.selectDropdownValue(selectors.recruitment.vacancyDropdown, vacancy);
  }

  selectHiringManager(hiringManager: string) {
    this.selectDropdownValue(selectors.recruitment.hiringManagerDropdown, hiringManager);
  }

  selectStatus(status: string) {
    this.selectDropdownValue(selectors.recruitment.statusDropdown, status);
  }

  clickSearch() {
    cy.get(selectors.recruitment.searchButton).click();
  }

  clickReset() {
    cy.get(selectors.recruitment.resetButton).click();
  }

  getResults() {
    return cy.get(selectors.recruitment.resultRows);
  }
}
