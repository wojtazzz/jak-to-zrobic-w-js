//var homePage = require('../pages/home');
var homePage = require(browser.__pagesDir + '/home.complete');
var lesson1Page = require(browser.__pagesDir + '/lesson1');

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

	it('should have correct link to Lesson 1 page', function(){
		homePage.menu.clickOnLink('Lesson 1');
		expect(lesson1Page.getTitle()).toEqual("How to do it in JavaScript - Lesson 1");
	});

	it('should contain correct links in the menu', function(){
		expect(homePage.menu.getMenuLinksText()).toEqual(	[
		  {index: 0, text: 'Lesson 1', class: ''},
		  {index: 1, text: 'Lesson 2', class: ''}
		]);
	});

});
