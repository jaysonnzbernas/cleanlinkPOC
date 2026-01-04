import { Page } from 'playwright';

export class BasePage {
  
  constructor(protected page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}