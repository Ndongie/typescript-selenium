import { Builder } from "selenium-webdriver";
import { Options as ChromeOptions } from "selenium-webdriver/chrome";
import { Options as FirefoxOptions } from "selenium-webdriver/firefox"
import { Options as SafariOptions } from "selenium-webdriver/safari";
import { Options as EdgeOptions } from "selenium-webdriver/edge"

enum Browser {
    CHROME = 'chrome',
    FIREFOX = 'firefox',
    EDGE = 'egde',
    SAFARI = 'safari'
  }

  enum BrowserMode {
    HEADLESS = 'headless',
    MAXIMIZED = 'display',
  }

export class BrowserGetter{
    browserName: String;
    browserMode: String

    constructor(name: String){
        this.browserName = name.toLocaleLowerCase()
        this.browserMode = process.env.Browser_Mode.toLowerCase()
    }

    async getBrowser(){
        console.log(`Getting the ${this.browserName} browser `)
        const browserOptions = this.setBrowerOptions();

        if(this.browserName === Browser.CHROME){
            return await new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(browserOptions)
            .build()
        }
        else if(this.browserName === Browser.FIREFOX){
            return await new Builder()
            .forBrowser(Browser.CHROME)
            .setFirefoxOptions(browserOptions)
            .build()
        }
        else if(this.browserName === Browser.SAFARI){
            return await new Builder()
            .forBrowser(Browser.CHROME)
            .setSafariOptions(browserOptions)
            .build()
        }
        else if(this.browserName === Browser.EDGE){
            return await new Builder()
            .forBrowser(Browser.CHROME)
            .setEdgeOptions(browserOptions)
            .build()
        }
        else{
            console.log('Invalid browser.....')
        }
         
    }

    setBrowerOptions(){
        console.log('Setting the browser options')
        let options;

        if(this.browserMode === BrowserMode.HEADLESS){
            switch(this.browserName){
                case Browser.CHROME:
                    console.log('Setting options for the chrome browser')
                    options = new ChromeOptions(); 
                break;
                case Browser.FIREFOX:
                    console.log('Setting options for the firefox browser')
                    options = new FirefoxOptions(); 
                break;
                default:
                    console.log('Unknown browser')

            }

            options.addArguments(BrowserMode.HEADLESS);
            options.addArguments('window-size=1280,720');
            options.excludeSwitches('enable-logging');
            options.addArguments('disable-plugins');
        }
        else{
            switch(this.browserName){
                case Browser.CHROME:
                    options = new ChromeOptions(); 
                break;
                case Browser.FIREFOX:
                    options = new FirefoxOptions(); 
                break;
                default:
                    console.log('Unknown browser')

            }

            options.addArguments('start-maximized');
            options.excludeSwitches('enable-logging');
            options.addArguments('disable-plugins');
        }

        return options;
    }
}