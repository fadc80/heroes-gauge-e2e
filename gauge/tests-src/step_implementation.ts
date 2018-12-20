import { Gauge, Step } from './interfaces';
import { ProtractorHelper } from './helpers/protractor.helper';
import { getProtractorAndChai } from './step_helpers';

import { SiteMap } from './structure/site-map';
import { DashboardPageObject } from './structure/page-objects/dashboard';
import { HeroesPageObject } from './structure/page-objects/heroes';

import { commonSteps } from './steps/common';
import { dashboardSteps } from './steps/dashboard';
import { heroesSteps } from './steps/heroes';

declare var gauge: Gauge;
declare var step: Step;
declare var beforeSuite: any;
declare var beforeScenario: any;
declare var afterScenario: any;
declare var afterSuite: any;

let protractorHelper: ProtractorHelper, expect: Chai.ExpectStatic;

[protractorHelper, expect] = getProtractorAndChai();

gauge.protractor = {
  browser: protractorHelper.browser,
  element: protractorHelper.browser.element,
  by: protractorHelper.by,
  driver: protractorHelper.driver
};

let siteMap: SiteMap = SiteMap.instance;

siteMap.pages['Dashboard'] = new DashboardPageObject(
  gauge.protractor.browser,
  gauge.protractor.driver,
  gauge.protractor.by,
  gauge.protractor.element,
  expect);

siteMap.pages['Heroes'] = new HeroesPageObject(
  gauge.protractor.browser,
  gauge.protractor.driver,
  gauge.protractor.by,
  gauge.protractor.element,
  expect);

gauge.siteMap = siteMap;
gauge.expect = expect;

gauge.screenshotFn = async() => {
  let picture: any;
  await gauge.protractor.driver.takeScreenshot().then(
    data => { picture = data.replace(/^data:image\/png;base64,/,'')}
  ).catch(e => console.log(e));
  return picture;
}

/**
 * Importa os steps definidos na pasta steps
 */
commonSteps(gauge, step);
dashboardSteps(gauge, step);
heroesSteps(gauge, step);

/**
 * Gauge Hooks - Ganchos de execução disponibilizados pelo Gauge
 */
beforeSuite((done) => {
  gauge.protractor.driver.manage().window().setPosition(0,0);
  gauge.protractor.driver.manage().window().setSize(1280, 1024);
});

beforeScenario(function () {
});

afterScenario(function () {
});

afterSuite((done) => {
  gauge.protractor.driver.quit().then(() => console.log(
    'Execution finished and Protractor was closed()!'));
});
