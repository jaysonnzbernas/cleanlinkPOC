import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { Banner } from "./components/banner";

export class LandingPage extends BasePage {

    readonly banner: Banner;

    constructor(page: Page) {
        super(page);
        this.banner = new Banner(page);
       
    }

    async navigate() {
        await super.navigateTo('/#');
    }
}