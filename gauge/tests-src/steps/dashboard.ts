import * as protractor from 'protractor';

import { ElementFinder } from 'protractor';

import { Gauge, Step } from '../interfaces';
import { SiteMap } from './../structure/site-map';
import { DashboardPageObject } from '../structure/page-objects/dashboard';

export function dashboardSteps(gauge: Gauge, step: Step) {

  let driver: webdriver.WebDriver = gauge.protractor.driver;
  let browser: protractor.ProtractorBrowser = gauge.protractor.browser;
  let element: protractor.ElementHelper = gauge.protractor.element;
  let by: protractor.ProtractorBy = gauge.protractor.by;
  let expect: Chai.ExpectStatic = gauge.expect;
  let siteMap: SiteMap = gauge.siteMap;

  let dashboardPage = gauge.siteMap.getPageObject<DashboardPageObject>('Dashboard');

  step('I type <text> on the search field', (text, done) => {
    dashboardPage.getHeroSearchBox().clear().then(() => {
      dashboardPage.getHeroSearchBox().sendKeys(text).then(done)
        .catch(e => done(e));
    }).catch(e => done(e));
  });

  step("Then I see no heroes on the search's result", (done) => {
    dashboardPage.getHeroSearchResults().count().then(count => 
      { expect(count).to.equal(0); done(); })
        .catch(error => done(error));
  });

  step("Then I see <number> heroes on the search's result", (number, done) => {
    dashboardPage.getHeroSearchResults().count().then(count => 
      { expect(count).to.equal(+number); done(); })
        .catch(error => done(error));
  });

  step("The search's result contains <hero>", (hero, done) => {
    dashboardPage.getHeroSearchResult(hero).count().then(count => 
      { expect(count).to.equal(1); done(); })
        .catch(error => done(error));    
  });  
}
