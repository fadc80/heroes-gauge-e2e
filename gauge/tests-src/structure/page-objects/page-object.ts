import { ProtractorBy, ElementHelper, ProtractorBrowser} from 'protractor';
import { SiteMap } from '../site-map';

export abstract class PageObject {
  abstract path: string;
  
  constructor(
    protected browser: ProtractorBrowser,
    protected driver: webdriver.WebDriver,
    protected by: ProtractorBy,
    protected element: ElementHelper,
    protected expect: Chai.ExpectStatic) {

  }

  navigateTo(): webdriver.promise.Promise<void> {
    return this.driver.get(SiteMap.baseUrl + this.path);
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
