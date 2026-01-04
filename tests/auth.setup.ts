import { test as setup} from '../src/fixtures/pageFixtures';
import { expect } from '@playwright/test';

const customerFile = 'playwright/.auth/customer.json';

setup('authenticate as customer', async ({page, login, toolbar, userAPI}) => {
    const customerResponse = userAPI.getCustomerUserResp();

    await login.navigate();
    await login.enterEmailAddress('KimACTCustomerPos');
    await login.enterPassword('123456');
    await login.clickLoginButton();

    const response = await customerResponse;
    expect(response.status()).toBe(200);

    const json = await response.json();
    console.log('Authenticated User Type:', json.header.values.type);

    await expect(json.header.values.type).toBe('Customer');

    await page.context().storageState({ path: customerFile });
});

const clientFile = 'playwright/.auth/client.json';

setup('authenticate as client', async ({page, login, toolbar, userAPI }) => {
    const clientResponse = userAPI.getClientUserResp();

    await login.navigate();
    await login.enterEmailAddress('FernLaneClientPositive');
    await login.enterPassword('123456');
    await login.clickLoginButton();

   const response = await clientResponse;
    expect(response.status()).toBe(200);

    const json = await response.json();
    console.log('Authenticated User Type:', json.header.values.type);

    await expect(json.header.values.type).toBe('Client');


    await page.context().storageState({ path: clientFile });
});