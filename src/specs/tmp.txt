var Screenshot = require('../util/screenshots.js');
describe('How to do it in JS homepage', function() {
	xit('should have How to do it in JavaScript title', function(){
    browser.driver.get('http://localhost:8888');
    var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("How to do it in JavaScript");
	});

	it('should contain How to do it in JavaScript text in nav brand section', function(){
		browser.driver.get('http://aadays.pl/events/');

//		browser.executeScript('window.scrollTo(0, 1500);');
		//browser.sleep(2000);

		var about = element.all(by.xpath('//a[contains(text(),"O wydarzeniu")]')).first();
		var agreement = element.all(by.xpath('//a[contains(text(),"Regulamin")]')).first();

		browser.driver.actions().
		    mouseMove(about).
				perform();
		//browser.sleep(500);
		var EC = protractor.ExpectedConditions;
		browser.driver.wait(EC.visibilityOf(agreement), 10000);

		browser.driver.actions().
			  mouseMove(agreement).
				mouseDown(agreement).
				mouseUp(agreement).
		    perform();

    // var windowHeight;
		// var sectionSpeakers = element(by.xpath('//h3[contains(text(),"Mówcy")]'));
		//
    // browser.driver.manage().window().getSize()
    //     .then(function (windowSize) {
    //         windowHeight = windowSize.height;
		//
    //         return sectionSpeakers.getWebElement().getLocation();
    //     })
    //     .then(function (location) {
    //         return browser.executeScript('window.scrollTo(0, ' + (location.y - Math.floor(windowHeight / 2)) +
    //             ');');
    //     });
		//
		//
 	  // var EC = protractor.ExpectedConditions;
		// var e = element(by.xpath('//*[contains(text(),"Mateusz Olejarka")]'));
		// browser.driver.wait(EC.elementToBeClickable(e), 10000);

		browser.driver.takeScreenshot().then(function (png) {
				new Screenshot(png, "aadays-home" + ".png");
		});
	});
});
