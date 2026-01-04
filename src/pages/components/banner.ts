import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";


export class Banner extends BasePage {

    readonly toolbar: Toolbar;

    constructor(page: Page) {
        super(page);
        this.toolbar = new Toolbar(page);
    }
}

export class Toolbar extends BasePage {
  
  readonly home: Locator;
  readonly clients: Locator;
  readonly staff: Locator;
  readonly reports: Locator;
  readonly help: Locator;


  constructor(page: Page) {
    super(page);
    this.home = page.locator('button[name="home"]');
    this.clients = page.getByRole('button', { name: 'CLIENTS' });
    this.staff = page.getByRole('button', { name: 'Staff' });
    this.reports = page.getByRole('button', { name: 'reports' });
    this.help = page.getByRole('button', { name: 'help' });

  }

  async clickHome() {
    await this.home.click();
  }

  async clickClients() {
    await this.clients.click();
  }

  async clickStaff() {
    await this.staff.click();
  }

  async clickReports() {
    await this.reports.click();
  }

  async clickHelp() {
    await this.help.click();
  }

}