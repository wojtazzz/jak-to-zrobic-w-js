var clc = require("cli-color");

class Page {

    constructor() {
        this.logEnabled = true;
    }

    load(url) {
        this.log("load", url);
        browser.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js" + url);
    }

    getTitle() {
        return browser.driver.getTitle();
    }
    log() {
        if (this.logEnabled) {
            console.error.apply(console, [clc.cyan("DEBUG|")].concat(Array.prototype.slice.call(arguments)));
        }
    }
    waitForElement(elem, time) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(elem), time, "Element still not exist");
    }
}
module.exports = Page;