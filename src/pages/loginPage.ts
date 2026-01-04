import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {

    readonly emailAddress: Locator
    private password: Locator
    private loginButton: Locator
    
    constructor(page: Page) {
        super(page);
        this.emailAddress = page.getByPlaceholder('Email Address');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async navigate() {
        await super.navigateTo('/#/login');
    }

    async enterEmailAddress(email: string) {
        await this.emailAddress.fill(email);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }   
}
