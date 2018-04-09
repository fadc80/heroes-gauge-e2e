import * as protractor from 'protractor';
import * as webdriver from 'selenium-webdriver';

import { SiteMap } from '../site-map';

export abstract class PageObject {
  abstract path: string;
  
  constructor(
    protected browser: protractor.ProtractorBrowser,
    protected driver: webdriver.WebDriver,
    protected by: protractor.ProtractorBy,
    protected element: protractor.ElementHelper,
    protected expect: Chai.ExpectStatic) {
  }

  navigateTo(): webdriver.promise.Promise<void> {
    return this.browser.get(SiteMap.baseUrl + this.path);
  }

  waitForElementToBePresent(element, done){
    this.driver.wait(() => {
      if(element.isPresent()) {
        done();
        return true;
      } else {
        return false;
      }
    }, 60000);
  }

  waitForElementToBeDisplayed(element, done){
    this.driver.wait(() => {
      if(element.isDisplayed()) {
        done();
        return true;
      } else {
        return false;
      }
    }, 60000);
  }
}
