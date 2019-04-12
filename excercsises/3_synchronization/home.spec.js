var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});
	var ec = protractor.ExpectedConditions;
	

	it('hould have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		var expectedHeader = 'Example Headline 2'
		homePage.nextButton();
		var header2 = homePage.getHeader2();
		browser.wait(ec.visibilityOf(header2), 10000);
		expect(header2.getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		homePage.clickMenuAtIdx(1);
		var menu = homePage.getDropdown();
		browser.wait(ec.visibilityOf(menu), 15000);
		expect(menu.isDisplayed()).toBe(true);

		
	});

});
