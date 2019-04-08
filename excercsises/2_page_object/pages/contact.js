var ContactPage = function () {

    this.get = function () {
        browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
    };

    this.findElementByText = function(text) {
        const selector = "//*[contains(text(), '" + text + "')]";
        return element(by.xpath(selector)).isDisplayed();
    };

    this.getSiteTitle = function () {
        return browser.driver.getTitle();
    };

    this.getInputNameElement = function(){
        const selector = "name";
        return element(by.id(selector));
    };

    this.getInputEmailElement = function(){
        const selector = "email"
        return element(by.id(selector));
    };

    this.getInputMessageElement = function(){
        const selector = "content"
        return element(by.id(selector));
    }

    this.pushSubmit = function(){
        element(by.buttonText('Submit')).click();
    };

    this.sendTextToElement = function(text, elem){
        elem.sendKeys(text);
    };


};

module.exports = new ContactPage();