var homePage = require('../pages/home');
//var homePage = require('../pages/home.example');

describe('How to do it in JS homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should haveAgile & Automation Days | Konferencja i Warsztaty title', function(){
		expect(homePage.getTitle()).toEqual("Agile & Automation Days | Konferencja i Warsztaty");
	});

	it('should have AGENDA section', function(){
		expect(homePage.getPageSectionHeaderByIdx(0)).toEqual("AGENDA");
	});

	xit('should contain correct links in the footer', function(){
	});

});
