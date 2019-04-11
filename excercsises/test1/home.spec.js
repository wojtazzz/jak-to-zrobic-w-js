var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.load()
		console.log(homePage.getTitle());
	});

	it('hould have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	xit('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		var expectedHeader = 'Example Headline 2'
		homePage.nextButton();
		var header2 = homePage.getHeader2();
		var ec = prxotractor.ExpectedConditions;
		browser.wait(ec.visibilityOf(header2), 10000);
		expect(header2.getText()).toEqual(expectedHeader);
	});
	
	xit('should display drop down after clicking on About menu item', function(){
		homePage.clickMenuAtIdx(1);
		var ec = protractor.ExpectedConditions;
		var menu = homePage.getDropdown();
		browser.wait(ec.visibilityOf(menu), 15000);
		expect(menu.isDisplayed()).toBe(true);

		
	});

});
