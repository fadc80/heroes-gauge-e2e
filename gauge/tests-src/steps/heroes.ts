import * as webdriver from 'selenium-webdriver';
import * as protractor from 'protractor';

import { Gauge, Step } from '../interfaces';
import { SiteMap } from './../structure/site-map';
import { HeroesPageObject } from '../structure/page-objects/heroes';

export function heroesSteps(gauge: Gauge, step: Step) {
  
  let driver: webdriver.WebDriver = gauge.protractor.driver;
  let browser: protractor.ProtractorBrowser = gauge.protractor.browser;
  let element: protractor.ElementHelper = gauge.protractor.element;
  let by: protractor.ProtractorBy = gauge.protractor.by;
  let expect: Chai.ExpectStatic = gauge.expect;
  let siteMap: SiteMap = gauge.siteMap;

  let heroesPage = gauge.siteMap.getPageObject<HeroesPageObject>('Heroes');

  step("I delete <heroName> from the hero's list", (name, done) => {
      heroesPage.getHeroDeleteButton(name).click()
        .then(done).catch(error => done(error));
  });

  step("Then I see <hero> on the hero's list", (name, done) => {
      heroesPage.getHero(name).count().then(count => { 
        expect(count).to.equal(1); done();})
          .catch(error => done(error)); 
  });

  step("Then I don't see <hero> on the hero's list", (name, done) => {
    heroesPage.getHero(name).count().then(count => { 
      expect(count).to.equal(0); done();})
        .catch(error => done(error)); 
  });
}
