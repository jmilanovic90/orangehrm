import { LoginPage } from '../../pages/LoginPage';
import { getRequiredEnv } from '../../support/env';
import { SideNavigation } from '../../pages/SideNavigation';
import { RecruitmentPage } from '../../pages/RecruitmentPage';
import { vacancyFilters } from '../../fixtures/test-data';

describe('Recruitment - Vacancies', () => {
  const loginPage = new LoginPage();
  const sideNavigation = new SideNavigation();
  const recruitmentPage = new RecruitmentPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.login(getRequiredEnv('username'), getRequiredEnv('password'));
    sideNavigation.openRecruitment();
    recruitmentPage.openVacancies();
  });

  it('search shows correct results', () => {
    recruitmentPage.openVacancies();

    recruitmentPage.selectJobTitle(vacancyFilters.jobTitle);
    recruitmentPage.clickSearch();

    recruitmentPage.getResults().should('contain', vacancyFilters.jobTitle);

    recruitmentPage.selectVacancy(vacancyFilters.vacancy);
    recruitmentPage.clickSearch();

    recruitmentPage.getResults().should('have.length', 1);
    recruitmentPage.getResults().should('contain', vacancyFilters.vacancy);

    recruitmentPage.selectHiringManager(vacancyFilters.hiringManager);
    recruitmentPage.clickSearch();

    recruitmentPage.getResults().should('have.length', 1);
    recruitmentPage.getResults().should('contain', vacancyFilters.hiringManager);

    recruitmentPage.selectStatus(vacancyFilters.statuses[0]);
    recruitmentPage.clickSearch();

    recruitmentPage.getResults().should('have.length', 1);
    recruitmentPage.getResults().should('contain', vacancyFilters.statuses[0]);

    recruitmentPage.selectStatus(vacancyFilters.statuses[1]);
    recruitmentPage.clickSearch();

    recruitmentPage.getResults().should('have.length', 0);

    recruitmentPage.clickReset();
    recruitmentPage.getResults().should('have.length.greaterThan', 0);
  });
});
