var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		var expectedHeader = 'Example Headline 2'
		var nextButton = element(by.css('a.right'));
		var activeCarouselHeader = element(by.css('div.active h1'));
		nextButton.click();
		var header2 = element(by.xpath("//tag[contains(text(), 'Example Headline 2')]"));
		
		//Replace this agly code
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(header2), 10000);
		expect(activeCarouselHeader.getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		homePage.clickMenuAtIdx(1);
		var EC = protractor.ExpectedConditions;
		var menu = homePage.getDropdown();
		browser.wait(EC.visibilityOf(menu), 15000);
		expect(menu.isDisplayed()).toBe(true);

		
	});

});
