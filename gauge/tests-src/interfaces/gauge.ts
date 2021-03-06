import * as webdriver from 'selenium-webdriver';

import { SiteMap } from './../structure/site-map';
import { ProtractorBy, ProtractorBrowser, ElementHelper } from 'protractor';

export interface GaugeHooks {
  beforeScenario: (callback: Function, options?: any) => void;

  afterScenario: (callback: Function, options?: any) => void;
  afterSuite: (callback: Function) => void;
  beforeSuite: (callback: Function) => void;
}
export interface Gauge {
  siteMap: SiteMap;
  expect: Chai.ExpectStatic;
  protractor: {
    driver: webdriver.WebDriver
    by: ProtractorBy,
    browser: ProtractorBrowser,
    element: ElementHelper
  };
  hooks: GaugeHooks;
  steps(desc: string, stepImpl: Function);
  screenshotFn;
}

export interface Step {
  (desc: string, stepImpl: Function): void;
  (desc: string[], stepImpl: Function): void;
}

export interface GaugeProtoTable {

  headers: {
    cells: string[]
  },
  rows: [
    {
      cells: [Object]
    }]
};
