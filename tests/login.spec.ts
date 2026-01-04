import { expect } from '@playwright/test';
import { test } from '../src/fixtures/pageFixtures';

test.describe('Login tests', () => {

  test.describe('Customer user tests', () => {
    test.use({ storageState: 'playwright/.auth/customer.json' });
  

    test('logon as customer', async ({ landing, toolbar }) => {

        await landing.navigate();
        await expect(toolbar.clients).toBeVisible();

    });

  });  

  test.describe('Client user tests', () => {
    test.use({ storageState: 'playwright/.auth/client.json' });
  

    test('logon as client', async ({ landing, toolbar }) => {

        await landing.navigate();
        await expect(toolbar.clients).toBeVisible();

    });

});
  

 

});