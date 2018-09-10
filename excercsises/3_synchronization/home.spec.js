var homePage = require('./pages/home');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title "Protractor workshop | Home"', function () {
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function () {
		homePage.clickNextButton();
		expect(homePage.haveRightCarouselItem());
	});

	it('should display drop down after clicking on About menu item', function () {
		homePage.dropdownArrowButtonClick();
		expect(homePage.checkIfDropdownListShowsUp());
	});

});
