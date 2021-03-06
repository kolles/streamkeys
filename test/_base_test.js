var chromedriver = require("selenium-webdriver/chrome");

/* globals */
global.expect = require("chai").expect;
global.shared = require("./shared/musicsite.js");
global.helpers = require("./shared/helpers.js");
global.test = require("selenium-webdriver/testing");

var chromeOptions = new chromedriver.Options(),
    extPath = "--load-extension=" + helpers.getPath(__filename, "streamkeys-ext/"),
    adblockPath = helpers.getPath(__filename, "adblockplus.crx");

console.log("Extension load path: " + extPath);

//chromeOptions.addExtensions(adblockPath);
chromeOptions.addArguments([extPath, "--log-level=0", "--test-type"]);
chromeOptions.setLoggingPrefs({browser: "ALL"});

/* exports */
module.exports = {
  getDriver: function() { return chromedriver.createDriver(chromeOptions); },
  loadSite: function(driver, url, callback) {
    driver.get(url).then(function() { callback(); } );
  }
};
