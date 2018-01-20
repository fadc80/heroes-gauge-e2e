import * as protractor from 'protractor';
import * as webdriver from 'selenium-webdriver';

import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';
import * as ie from 'selenium-webdriver/ie';

import { ProtractorBrowser } from 'protractor';

let chromeCapabilities = webdriver.Capabilities.chrome();
let chromeOptions = new chrome.Options();

let firefoxCapabilities = webdriver.Capabilities.firefox();
let firefoxOptions = new firefox.Options();

let ieCapabilities = webdriver.Capabilities.ie();
let ieOptions = new ie.Options();

let seleniumAddress = process.env.seleniumAddress;
let browser = process.env.browserName;

export class ProtractorHelper {
  driver: webdriver.WebDriver;
  timeout = 240000; //4 minutos
  winHandleBefore: any;
  browser: protractor.ProtractorBrowser;
  protractor: protractor.Ptor;
  by: protractor.ProtractorBy;

  constructor(private baseUrl?: string, private properties?: any) {
    this.setupDriver();
  }

  quit(callback: Function) {
    this.driver.quit().then(() => callback());
  }

  private setupDriver() {

    let builder = new webdriver.Builder()
      .usingServer(seleniumAddress);

    if (browser==="Chrome") {
      builder = builder
        .withCapabilities(chromeCapabilities)
        .setChromeOptions(chromeOptions);
    }

    if (browser==="Firefox") {
      builder = builder
        .withCapabilities(firefoxCapabilities)
        .setFirefoxOptions(firefoxOptions);
    }

    if (browser==="IE") {
      builder = builder
        .withCapabilities(ieCapabilities)
        .setIeOptions(ieOptions);
    }

    this.driver = builder.build();

    this.driver.manage().timeouts().setScriptTimeout(this.timeout);

    let winHandleBefore;

    this.driver.getWindowHandle().then(function (result) {
      winHandleBefore = result;
    });

    this.browser = new ProtractorBrowser(this.driver);
    this.browser.useAllAngular2AppRoots();

    this.protractor = protractor;
    this.by = protractor.ProtractorBrowser.By;
  }
}

// implementar baseado em https://github.com/AndrewKeig/protractor-cucumber/blob/master/lib/index.js
