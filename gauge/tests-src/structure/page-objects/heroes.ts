
import { ProtractorBrowser, ProtractorBy, ElementHelper, ElementFinder, ElementArrayFinder } from 'protractor';

import { SiteMap } from '../site-map';

import { PageObject } from './page-object';

export class HeroesPageObject extends PageObject {

  path = '/heroes';

  constructor(
    protected browser: ProtractorBrowser,
    protected driver: webdriver.WebDriver,
    protected by: ProtractorBy,
    protected element: ElementHelper,
    protected expect: Chai.ExpectStatic) {
      super(browser, driver, by, element, expect);
  }

  public getHeroDeleteButton(name: string): ElementFinder {
    return this.getHero(name).all(this.by.css('button')).first();
  }

  public getHeroes(): ElementArrayFinder {
    return this.element.all(this.by.css('.heroes'));
  }

  public getHero(name: string): ElementArrayFinder {
    return this.getHeroes().all(this.by.cssContainingText('li', name));
  }
}
