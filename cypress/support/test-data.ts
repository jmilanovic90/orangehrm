import { faker } from '@faker-js/faker';

export function createUser() {
  return {
    username: `auto_${faker.string.alphanumeric(8)}`,
    password: 'Password123!',
    employeeName: 'Orange Test',
    role: 'ESS',
    status: 'Enabled'
  };
}

export const dashboardWidgets = [
  'Employee Distribution by Sub Unit',
  'Employee Distribution by Location',
  'Employees on Leave Today',
  'Time At Work',
  'Quick Launch',
  'Buzz Latest Posts',
  'My Actions'
];

export const invalidDashboardLabels = ['Invalid Department', 'Mars Office'];

export const vacancyFilters = {
  jobTitle: 'Payroll Administrator',
  hiringManager: 'mandaa user',
  vacancy: 'Payroll Administrator',
  statuses: ['Active', 'Closed']
};
