import { ProtractorHelper } from './helpers/protractor.helper';

type ProtractorAndChaiExpect = [ProtractorHelper, Chai.ExpectStatic];

export function getProtractorAndChai(baseUrl?: string): ProtractorAndChaiExpect {
  let protractorHelper = new ProtractorHelper(baseUrl);
  let chai = require('chai');
  let chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  return [protractorHelper, chai.expect];
}

