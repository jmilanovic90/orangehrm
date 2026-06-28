export function getRequiredEnv(name: string): string {
  const value = Cypress.env(name);

  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(
      `Missing Cypress env value: ${name}. Add it to cypress.env.json, CI secrets, or ORANGEHRM_* environment variables.`
    );
  }

  return value;
}
