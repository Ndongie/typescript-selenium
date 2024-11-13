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
exports.LandingPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const index_1 = require("../config/index");
class LandingPage {
    constructor(webdriver) {
        this.driver = webdriver;
        this.signInButton = selenium_webdriver_1.By.css('#loginDropdownToggler');
        this.loginTypes = selenium_webdriver_1.By.css('nav.nav-group .login-types .login-type');
    }
    authenticate(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.findElement(this.signInButton).click();
            yield this.driver.findElements(this.loginTypes)[0].sendKeys(username);
            // await this.driver.findElements(this.loginTypes)[1].sendKeys(password);
        });
    }
    visit() {
        return __awaiter(this, void 0, void 0, function* () {
            const baseUrl = index_1.config.baseUrl;
            yield this.driver.get(baseUrl);
        });
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cleanup();
            yield this.close();
        });
    }
    quit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.driver != null) {
                yield this.driver.quit();
            }
        });
    }
    cleanup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.manage().deleteAllCookies();
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.close();
        });
    }
}
exports.LandingPage = LandingPage;
