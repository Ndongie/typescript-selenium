"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const browser_1 = require("utils/browser");
const landing_page_1 = require("pages/landing.page");
let landingPage;
(0, mocha_1.describe)('Login functionlity', () => {
    (0, mocha_1.before)(() => __awaiter(void 0, void 0, void 0, function* () {
        const browser = yield new browser_1.BrowserGetter("chrome").getBrowser();
        landingPage = new landing_page_1.LandingPage(browser);
        yield landingPage.visit();
    }));
    (0, mocha_1.after)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield landingPage.quit();
    }));
    (0, mocha_1.it)('First Test', () => __awaiter(void 0, void 0, void 0, function* () {
        yield landingPage.authenticate('Testing', 'password');
    }));
});
