var aboutPage = require(browser.__pagesDir + '/about');
var speakers = require(browser.__dataDir + '/speakers.json');

describe('How to do it in JS homepage', function () {

	beforeEach(function () {
		aboutPage.get();
	});

	it('should contain correct speakers', function () {
		aboutPage.scrolltoSperakersSection();
		aboutPage.takeScreenshot("screen-1");
		expect(aboutPage.getSpeakers()).toEqual(speakers.data);
	});

});
