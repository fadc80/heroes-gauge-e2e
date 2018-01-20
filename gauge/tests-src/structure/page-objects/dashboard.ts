import { ProtractorBy, ElementFinder, ElementArrayFinder, ElementHelper, ProtractorBrowser } from 'protractor';

import { SiteMap } from '../site-map';
import { PageObject } from './page-object';

export class DashboardPageObject extends PageObject {

  path = '/dashboard';

  constructor(
    protected browser: ProtractorBrowser,
    protected driver: webdriver.WebDriver,
    protected by: ProtractorBy,
    protected element: ElementHelper,
    protected expect: Chai.ExpectStatic) {
      super(browser, driver, by, element, expect);
  }

  public getHeroSearchBox(): ElementFinder {
    return this.element.all(this.by.id('search-box')).first();;
  }

  public getHeroSearchResults(): ElementArrayFinder {
    return this.element.all(this.by.css('.search-result li'));
  }

  public getHeroSearchResult(hero): ElementArrayFinder {
    return this.getHeroSearchResults().all(this.by.cssContainingText('a', hero));
  }  
}
