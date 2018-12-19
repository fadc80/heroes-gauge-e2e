import * as protractor from 'protractor';
import * as webdriver from 'selenium-webdriver';

import { PageObject } from './page-object';

export class DashboardPageObject implements PageObject {

  path = '/dashboard';

  constructor(
    protected browser: protractor.ProtractorBrowser,
    protected driver: webdriver.WebDriver,
    protected by: protractor.ProtractorBy,
    protected element: protractor.ElementHelper,
    protected expect: Chai.ExpectStatic) {
  }

  public getHeroSearchBox(): protractor.ElementFinder {
    return this.element.all(this.by.id('search-box')).first();;
  }

  public getHeroSearchResults(): protractor.ElementArrayFinder {
    return this.element.all(this.by.css('.search-result li'));
  }

  public getHeroSearchResult(hero): protractor.ElementArrayFinder {
    return this.getHeroSearchResults().all(this.by.cssContainingText('a', hero));
  }
}
