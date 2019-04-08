var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		var expectedHeader = 'Example Headline 2'
		homePage.pushNextButton();
		browser.sleep(1000);
		expect(homePage.getCarouselElement().getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		homePage.clickMenuAtIdx(1);
		var EC = protractor.ExpectedConditions;
		var dropdownMenu = element(by.css('.dropdown-menu'));
		browser.wait(EC.visibilityOf(dropdownMenu), 1000, 'Element still not exist');
		expect(dropdownMenu.isDisplayed()).toBe(true);
	});

});
