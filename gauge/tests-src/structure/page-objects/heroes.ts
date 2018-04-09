import * as protractor from 'protractor';
import * as webdriver from 'selenium-webdriver';

import { PageObject } from './page-object';

export class HeroesPageObject extends PageObject {

  path = '/heroes';

  constructor(
    protected browser: protractor.ProtractorBrowser,
    protected driver: webdriver.WebDriver,
    protected by: protractor.ProtractorBy,
    protected element: protractor.ElementHelper,
    protected expect: Chai.ExpectStatic) {
      super(browser, driver, by, element, expect);
  }

  public getHeroDeleteButton(name: string): protractor.ElementFinder {
    return this.getHero(name).all(this.by.css('button')).first();
  }

  public getHeroes(): protractor.ElementArrayFinder {
    return this.element.all(this.by.css('.heroes'));
  }

  public getHero(name: string): protractor.ElementArrayFinder {
    return this.getHeroes().all(this.by.cssContainingText('li', name));
  }
}
