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
