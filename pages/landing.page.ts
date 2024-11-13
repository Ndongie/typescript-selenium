import { WebDriver, Locator, By } from "selenium-webdriver";
import { config } from "../config/index"

export class LandingPage{
    driver: WebDriver;
    signInButton: Locator;
    loginTypes: Locator;
 

    constructor(webdriver: WebDriver){
        this.driver = webdriver;
        this.signInButton = By.css('#loginDropdownToggler');
        this.loginTypes = By.css('nav.nav-group .login-types .login-type');    
    }

    async authenticate(username: String, password: String){
        await this.driver.findElement(this.signInButton).click();
        await this.driver.findElements(this.loginTypes)[0].sendKeys(username);
        // await this.driver.findElements(this.loginTypes)[1].sendKeys(password);
    }

    async visit(){
        const baseUrl = config.baseUrl;
        await this.driver.get(baseUrl);
    }

    async dispose() {
        await this.cleanup();
        await this.close();
      }
    
      async quit() {
        if (this.driver != null) {
          await this.driver.quit();
        }
      }
    
      async cleanup() {
        await this.driver.manage().deleteAllCookies();
      }
    
      async close() {
        await this.driver.close();
      }

}