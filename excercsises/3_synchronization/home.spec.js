var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should display drop down after clicking on About menu item', function(){
		
		homePage.clickMenuAtIdx(1)
		var EC = protractor.ExpectedConditions;
		var dropDownMenuItems = element.all(by.css("ul.dropdown-menu li a"));
		browser.wait(EC.elementToBeClickable(dropDownMenuItems.get(0)), 5000);
		expect(dropDownMenuItems.get(0).getText()).toEqual("Company");

	});

});
