//var homePage = require('../pages/home');
var homePage = require('../pages/home.example');

describe('How to do it in JS homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have How to do it in JavaScript title', function(){
		expect(homePage.getTitle()).toEqual("How to do it in JavaScript");
	});

	it('should contain How to do it in JavaScript text in nav brand section', function(){
		expect(homePage.getNavBrandText()).toEqual("How to do it in JavaScript");
	});

	xit('should contain correct links in the menu', function(){
	});

});
