var Contact = function () {

    this.get = function () {
        browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
    };

    this.findElementByText = function(text) {
        return element(by.xpath("//*[contains(text(), '" + text + "')]")).isDisplayed();
    };

    this.getSiteTitle = function () {
        return browser.driver.getTitle();
    };

    this.getInputNameElement = function(){
        return element(by.id("name"));
    };

    this.getInputEmailElement = function(){
        return element(by.id("email"));
    };

    this.getInputMessageElement = function(){
        return element(by.id('content'));
    }

    this.pushSubmit = function(){
        element(by.buttonText('Submit')).click();
    };

    this.sendTextToElement = function(text, elem){
        elem.sendKeys(text);
    };


};

module.exports = new Contact();