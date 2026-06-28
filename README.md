# OrangeHRM Cypress TypeScript E2E

This project contains a modular Cypress + TypeScript end-to-end automation suite for the
[OrangeHRM demo site](https://opensource-demo.orangehrmlive.com/).

## Tech Stack

- Cypress with TypeScript
- Page Object Model for reusable page behavior
- ESLint and Prettier for code quality
- Allure reporting
- GitHub Actions workflow with manual trigger

## Project Structure

```text
cypress/
  e2e/                 Test specifications grouped by feature
  fixtures/            Test data files
  pages/               Page Object Model classes
  support/             Commands, selectors, and global Cypress setup
.github/workflows/     Manual CI pipeline
```

## Configuration

Default configuration is defined in `cypress.config.ts`.

Environment values can be supplied in either of these ways:

1. Local `cypress.env.json` file, based on `cypress.env.example.json`
2. Shell environment variables:

```bash
CYPRESS_BASE_URL=https://opensource-demo.orangehrmlive.com
ORANGEHRM_USERNAME=Admin
ORANGEHRM_PASSWORD=admin123
```

`cypress.env.json` is intentionally ignored by Git so credentials are not committed.
Keep real login credentials in environment configuration only. Fixtures should contain regular
test data, such as invalid input values, search terms, or expected messages.

## Setup

Allure report generation through `allure-commandline` requires Java. Install Java 17 or newer
locally and make sure `JAVA_HOME` is configured before running `npm run allure:generate`.

```bash
npm install
```

## Run Tests

Open Cypress interactively:

```bash
npm run cy:open
```

Run headless tests:

```bash
npm test
```

Run tests with Allure results enabled:

```bash
npm run test:allure
```

Generate the Allure HTML report:

```bash
npm run allure:generate
```

Open the generated Allure report:

```bash
npm run allure:open
```

## Quality Gates

```bash
npm run lint
npm run format:check
```

Run the same combined checks used by CI:

```bash
npm run ci
```

## GitHub Actions

The workflow at `.github/workflows/manual-e2e.yml` runs only when manually triggered from the
GitHub Actions tab. It installs dependencies, runs linting and formatting checks, executes Cypress,
generates an Allure report, and uploads the report as an artifact.

Recommended repository settings:

- Add `ORANGEHRM_USERNAME` and `ORANGEHRM_PASSWORD` as required repository secrets.
- Optionally add `CYPRESS_BASE_URL` as a repository variable.

## Test Design Notes

- Page objects keep UI behavior reusable and separate from assertions in specs.
- Shared selectors are centralized in `cypress/support/selectors.ts`.
- Credentials and base URL are configurable so tests can run locally and in CI.
- Cypress retries are enabled in run mode to reduce transient demo-site failures.
- Allure report artifacts are generated in CI even when tests fail.
