# OrangeHRM Cypress TypeScript E2E

To run the tests in GitHub Actions, open the repository Actions tab, choose the **Manual Cypress E2E** workflow, click **Run workflow**, select the browser, and start the run. After the workflow finishes, the Allure report is published to GitHub Pages at [https://jmilanovic90.github.io/orangehrm/](https://jmilanovic90.github.io/orangehrm/).

## Project Overview

This project is an end-to-end automation suite for the [OrangeHRM demo site](https://opensource-demo.orangehrmlive.com/) using Cypress, TypeScript, the Page Object Model, reusable support utilities, dynamic test data, and Allure reporting.

Covered areas include:

- Authentication validation
- Dashboard widget checks
- User management create/edit/delete flow
- Recruitment vacancy search filters
- My Info attachment upload, download, and delete flow

## Tech Stack

- Cypress with TypeScript
- Page Object Model
- Faker for dynamic test data
- ESLint and Prettier
- Allure reporting
- GitHub Actions with manual workflow trigger
- GitHub Pages report publishing

## Prerequisites

Install these locally before running the suite:

- Node.js 22 or newer
- npm
- Java 17 or newer, required only when generating Allure HTML reports locally
- Chrome, if you want to run headed Chrome tests locally

## Setup

Install dependencies:

```bash
npm install
```

Create a local Cypress environment file if you want to run tests from your machine:

```json
{
  "username": "Admin",
  "password": "********"
}
```

Save it as `cypress.env.json`. This file is ignored by Git so credentials are not committed.

## Run Tests

Open Cypress interactively:

```bash
npm run cy:open
```

Run the full suite headlessly:

```bash
npm test
```

Run the full suite with Allure result generation:

```bash
npm run test:allure
```

Run tests in headed Chrome:

```bash
npx cypress run --headed --browser chrome
```

Run a single spec in headed Chrome:

```bash
npx cypress run --headed --browser chrome --spec "cypress/e2e/auth/login.cy.ts"
```

Generate the local Allure HTML report:

```bash
npm run allure:generate
```

Open the generated local Allure report:

```bash
npm run allure:open
```

Run static quality checks:

```bash
npm run lint
npm run format:check
```

## Project Structure

```text
.github/workflows/
  manual-e2e.yml                  Manual GitHub Actions workflow

cypress/
  e2e/                            Test specs grouped by feature
    auth/
    dashboard/
    myInfo/
    recruitments/
    user-management/

  fixtures/                       Static and generated test data helpers
    test-data.ts
    attachment-test.png

  pages/                          Page Object Model classes
    LoginPage.ts
    DashboardPage.ts
    UserManagementPage.ts
    RecruitmentPage.ts
    MyInfoPage.ts
    SideNavigation.ts

  support/                        Shared Cypress setup and reusable helpers
    commands.ts
    env.ts
    e2e.ts
    selectors.ts
    step.ts
    utils.ts

cypress.config.ts                 Cypress, Allure, environment, and task config
package.json                      Scripts and dependencies
tsconfig.json                     TypeScript configuration
eslint.config.js                  ESLint configuration
```

## Test Approach

Test files in `cypress/e2e` contain the test logic: scenario flow, assertions, and business intent. They should stay readable as user journeys.

Page files in `cypress/pages` contain element interaction logic: clicking buttons, filling fields, opening tabs, selecting dropdown values, and returning page-specific elements. This keeps selectors and UI manipulation out of the specs.

Shared selectors live in `cypress/support/selectors.ts` so commonly used locators can be maintained in one place.

Reusable Cypress behavior lives in `cypress/support/commands.ts`, including `cy.login()`.

Environment handling lives in `cypress/support/env.ts`, which fails fast when required credentials are missing.

General helpers live in `cypress/support/utils.ts`, such as file upload support.

Allure step wrapping lives in `cypress/support/step.ts`, which makes longer test flows easier to read in reports.

Test data lives in `cypress/fixtures/test-data.ts`. Non-sensitive data, filter values, invalid login values, dashboard labels, and Faker-powered dynamic user generation belong there. Real credentials should stay in `cypress.env.json`, CI secrets, or environment variables.

## Reporting

Allure is configured in `cypress.config.ts` through `allure-cypress`. The CI workflow generates the report after each run, uploads it as an artifact, and deploys it to GitHub Pages:

[https://jmilanovic90.github.io/orangehrm/](https://jmilanovic90.github.io/orangehrm/)

Local report generation requires Java:

```bash
npm run test:allure
npm run allure:generate
npm run allure:open
```

## Assumptions and Limitations

- The suite targets the public OrangeHRM demo site, so data and availability are not fully controlled by this project.
- The demo environment can change or reset, which may cause transient failures.
- UI-driven setup and cleanup are slower and more fragile than API-level setup and cleanup.
- Some test data depends on demo records already existing, such as employee names, hiring managers, and vacancies.
- Credentials are treated as environment configuration, not fixture data.
- Cypress retries are enabled in run mode to reduce noise from temporary demo-site instability.

## Suggestions for Improvement

- Expose test-support APIs for setup and cleanup actions, such as creating users, deleting users, creating vacancies, deleting attachments, and resetting test records before or after each test.
- Prefer API-based `beforeEach` and `afterEach` hooks for repeatable data state instead of relying only on UI cleanup.
- Add dedicated test data through a controlled test environment instead of depending on shared public demo records.
- Add tags or suites for smoke, regression, and destructive tests.
- Add stronger cleanup guards so test-created users or attachments are removed even when a test fails halfway through.
- Add visual or accessibility checks if those are part of the quality goals.
