var homePage = require(browser.__pagesDir + '/home');

describe('How to do it in JS homepage', function () {

	beforeEach(function () {
		homePage.get();
	});

	it('should have Protractor workshop | Home', function () {
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

});