import * as allure from 'allure-js-commons';

export function step(name: string, action: () => void): void {
  allure.step(name, action);
}
