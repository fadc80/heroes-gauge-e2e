import * as protractor from 'protractor';
import * as webdriver from 'selenium-webdriver';

import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';

import { Runner, Config, ProtractorBrowser } from 'protractor';

let seleniumAddress = process.env.seleniumAddress;
let browser = process.env.browserName;

export class ProtractorHelper {
  driver: webdriver.WebDriver;
  browser: protractor.ProtractorBrowser;
  by: protractor.ProtractorBy;

  constructor(private baseUrl?: string, private properties?: any) {
    this.setupDriver();
  }

  quit(callback: Function) {
    this.driver.quit().then(() => callback());
  }

  private setupDriver() {

    let config: Config;
    let runner: Runner;

    config = {
      "capabilities": {
        "browserName": browser,
        "seleniumAddress": seleniumAddress
      },
      "allScriptsTimeout": 240000 
    }
    
    runner = new Runner(config);

    this.browser = runner.createBrowser(undefined);
    this.browser.useAllAngular2AppRoots();

    this.driver = this.browser.driver;

    this.by = protractor.ProtractorBrowser.By;
  }
}
