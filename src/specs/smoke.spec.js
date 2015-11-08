var homePage = require('../pages/home');
var lesson1Page = require('../pages/lesson1');

describe('How to do it in JS applicarion', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have How to do it in JavaScript title on home page', function(){
		expect(homePage.getTitle()).toEqual("How to do it in JavaScript");
	});

	it('should have correct link to Lesson 1 page', function(){
		homePage.clickOnLesson1();
		expect(lesson1Page.getTitle()).toEqual("How to do it in JavaScript - Lesson 1");
	});

});
