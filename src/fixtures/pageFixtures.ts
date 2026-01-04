import { UserAPI } from "../api/users/userAPI";
import { Banner, Toolbar } from "../pages/components/banner";
import { LandingPage } from "../pages/landingPage";
import { LoginPage } from "../pages/loginPage"
import { test as base } from '@playwright/test';

type pages = {
    login: LoginPage;
    landing: LandingPage;
    banner: Banner;
    toolbar: Toolbar;
    userAPI: UserAPI;
}

export const test = base.extend<pages>({
    login: async ({ page }, use) => {
        await use (new LoginPage(page));
    },

    landing: async ({ page }, use) => {
        await use (new LandingPage(page));
    },
    
    banner: async ({ page }, use) => {
        await use (new Banner(page));
    },

    toolbar: async ({ page }, use) => {
        await use (new Toolbar(page));
    },

    userAPI: async ({ page }, use) => {
        await use (new UserAPI(page));
    }
});