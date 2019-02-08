// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath();
process.env.FIREFOX_BIN = require('puppeteer-firefox').executablePath();

var defaultConfig = require('./karma.conf');

module.exports = function (config) {
  defaultConfig(config);
  config.set({
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: [ '-headless' ]
      }
    },
    singleRun: true
  });
};
