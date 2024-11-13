import { WebDriver } from "selenium-webdriver";
import { describe, it, beforeEach, afterEach, before, after } from "mocha";
import {expect} from "chai"
import {config} from "../config/index"
import { BrowserGetter } from "utils/browser";
import { LandingPage } from "pages/landing.page";
let landingPage: LandingPage;

describe('Login functionlity', () => {
    before(async() => {
        const browser = await new BrowserGetter("chrome").getBrowser();
        landingPage = new LandingPage(browser);
        await landingPage.visit();
    });

    after(async () => {
        await landingPage.quit()
    });

    it('First Test', async () => {
        await landingPage.authenticate('Testing', 'password')
    });
})
