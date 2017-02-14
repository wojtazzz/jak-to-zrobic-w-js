describe('Protractor workshop app', function() {

	// beforeEach(function () {
	//
	// });

	it('should have home page with title Protractor workshop | Home', function(){
		browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
		var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', function(){		
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(footerCopyright.getText()).toContain(expectedHTML)
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */

	xit('should have "Example headline 1" carousel item after entering site', function(){	

	});
	
	xit('should have correct feature header', function(){

	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how get function can be used
	 */
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages',function(){
		var menuItems = element.all(by.css('ul.nav > li > a'));		
	});

	 /**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how map function can be used to verify content of multiple elements
	 */

	it('should have Feature A, Feature B, Feature C sections ...', function(){
		var features = element.all(by.xpath('//h2'));
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */	
	it('should route to "Blog" pages after selecting link',function(){
		var menuItems = element.all(by.css('ul.nav > li > a'));
	});

});
