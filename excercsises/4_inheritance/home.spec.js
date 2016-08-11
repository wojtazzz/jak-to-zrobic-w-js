var homePage = require(browser.__pagesDir + '/home');
var speakers = require(browser.__dataDir + '/speakers');

describe('How to do it in JS homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should haveAgile & Automation Days | Konferencja i Warsztaty title', function(){
		expect(homePage.getTitle()).toEqual("Agile & Automation Days | Konferencja i Warsztaty");
	});

	xit('should contain correct speakers', function(){
		homePage.scrolltoSperakersSection();
		homePage.takeScreenshot("screen-1");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-2");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-3");
		expect(homePage.getSpeakers()).toEqual(speakers.data);
	});

});
