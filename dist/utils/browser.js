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
exports.BrowserGetter = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
const firefox_1 = require("selenium-webdriver/firefox");
var Browser;
(function (Browser) {
    Browser["CHROME"] = "chrome";
    Browser["FIREFOX"] = "firefox";
    Browser["EDGE"] = "egde";
    Browser["SAFARI"] = "safari";
})(Browser || (Browser = {}));
var BrowserMode;
(function (BrowserMode) {
    BrowserMode["HEADLESS"] = "headless";
    BrowserMode["MAXIMIZED"] = "display";
})(BrowserMode || (BrowserMode = {}));
class BrowserGetter {
    constructor(name) {
        this.browserName = name.toLocaleLowerCase();
        this.browserMode = process.env.Browser_Mode.toLowerCase();
    }
    getBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Getting the ${this.browserName} browser `);
            const browserOptions = this.setBrowerOptions();
            if (this.browserName === Browser.CHROME) {
                return yield new selenium_webdriver_1.Builder()
                    .forBrowser(Browser.CHROME)
                    .setChromeOptions(browserOptions)
                    .build();
            }
            else if (this.browserName === Browser.FIREFOX) {
                return yield new selenium_webdriver_1.Builder()
                    .forBrowser(Browser.CHROME)
                    .setFirefoxOptions(browserOptions)
                    .build();
            }
            else if (this.browserName === Browser.SAFARI) {
                return yield new selenium_webdriver_1.Builder()
                    .forBrowser(Browser.CHROME)
                    .setSafariOptions(browserOptions)
                    .build();
            }
            else if (this.browserName === Browser.EDGE) {
                return yield new selenium_webdriver_1.Builder()
                    .forBrowser(Browser.CHROME)
                    .setEdgeOptions(browserOptions)
                    .build();
            }
            else {
                console.log('Invalid browser.....');
            }
        });
    }
    setBrowerOptions() {
        console.log('Setting the browser options');
        let options;
        if (this.browserMode === BrowserMode.HEADLESS) {
            switch (this.browserName) {
                case Browser.CHROME:
                    console.log('Setting options for the chrome browser');
                    options = new chrome_1.Options();
                    break;
                case Browser.FIREFOX:
                    console.log('Setting options for the firefox browser');
                    options = new firefox_1.Options();
                    break;
                default:
                    console.log('Unknown browser');
            }
            options.addArguments(BrowserMode.HEADLESS);
            options.addArguments('window-size=1280,720');
            options.excludeSwitches('enable-logging');
            options.addArguments('disable-plugins');
        }
        else {
            switch (this.browserName) {
                case Browser.CHROME:
                    options = new chrome_1.Options();
                    break;
                case Browser.FIREFOX:
                    options = new firefox_1.Options();
                    break;
                default:
                    console.log('Unknown browser');
            }
            options.addArguments('start-maximized');
            options.excludeSwitches('enable-logging');
            options.addArguments('disable-plugins');
        }
        return options;
    }
}
exports.BrowserGetter = BrowserGetter;
