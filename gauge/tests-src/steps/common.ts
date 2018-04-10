import * as webdriver from 'selenium-webdriver';
import * as protractor from 'protractor';

import { Gauge, Step } from '../interfaces';

export function commonSteps(gauge: Gauge, step: Step) {
  
  let driver: webdriver.WebDriver = gauge.protractor.driver;
  let browser: protractor.ProtractorBrowser = gauge.protractor.browser;
  let element: protractor.ElementHelper = gauge.protractor.element;
  let by: protractor.ProtractorBy = gauge.protractor.by;
  let expect: Chai.ExpectStatic = gauge.expect;

  step('I load the <page-name> page', (pageName, done) => {
    browser.get(gauge.siteMap.getUrl(pageName)).then(()=> done())
      .catch(error => done(error));
  });

  step('I click on the <button-name> navigation button', (buttonName, done) => {
    element.all(by.cssContainingText('a', buttonName)).first().click()
      .then(()=>done()).catch(error => done(error));
  });

  step('I click on the <button-name> button',  (buttonName, done) => {
    element.all(by.cssContainingText('button', buttonName)).first().click()
      .then(()=>done()).catch(error => done(error));
  });

  step('Then I see the <page-title> header', (pageTitle, done) => {
    element.all(by.cssContainingText('h3', pageTitle)).first().isDisplayed()
      .then(displayed => { expect(displayed).to.equal(true); done(); })
      .catch(error => done(error));
  });

  step('I type <text> on the <label> field', (text, label, done) => {
    try {
      let labelElement = element.all(by.cssContainingText('label', label)).first();
      let inputElement = labelElement.all(by.css('input')).first();
      inputElement.clear().then(() => {
        inputElement.sendKeys(text).then(()=>done())
        .catch(e => done(e));
      }).catch(e => done(e));
    } catch(error) {
      done(error);
    }
  });

  step('I wait for a while...', (done) => {
    driver.sleep(3000).then(done);
  });

}
