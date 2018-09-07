var homePage = require('./pages/home');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title "Protractor workshop | Home"', function () {
		var until = protractor.ExpectedConditions;
		var expectedTitle = "Protractor workshop | Home"

		browser.wait(until.titleContains(expectedTitle), 5000);
		//expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function () {
		var expectedHeader = 'Example Headline 2'
		var activeCarouselHeader = element(by.css('div.active h1'));
		var nextButton = element(by.css('a.right'));
		var until = protractor.ExpectedConditions;

		nextButton.click();
		//Replace this agly code - replaced
		browser.wait(until.textToBePresentInElement(activeCarouselHeader, expectedHeader), 5000);

	});

	it('should display drop down after clicking on About menu item', function () {
		var dropdownArrowButton = element(by.xpath('//b[@class="caret"]'));
		var dropdownOpen = element(by.xpath('//ul[@class="dropdown-menu"]'));
		var until = protractor.ExpectedConditions;

		dropdownArrowButton.click();
		browser.wait(until.visibilityOf(dropdownOpen, 5000));

	});

});
