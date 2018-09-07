describe('Protractor workshop app', function () {

	//beforeEach(function () {
	//
	//});

	it('should have home page with title Protractor workshop | Home', function () {
		browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
		var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', function () {
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(footerCopyright.getText()).toContain(expectedHTML)
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */

	it('should have "Example headline 1" carousel item after entering site', function () {
		var elementCarousel = element(by.xpath('//div[@class="active item"]/div/div/div/div/h1'));
		var expectedText = "Example Headline 1"
		expect(elementCarousel.getText()).toContain(expectedText)

	});

	it('should have correct feature header', function () {
		var elementFeature = element(by.xpath('//div[@class="row feature-box"]/div[1]/h1'));
		var expectedText2 = "At vero eos et accusamus et iusto odio dignissimos"

		expect(elementFeature.getText()).toContain(expectedText2)

	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how get function can be used
	 */
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', function () {
		var menuItems = element.all(by.css('ul.nav > li > a')).then(function (items) {

			expect(items[0].getText()).toBe("Home");
			expect(items[1].getText()).toBe("About");
			expect(items[2].getText()).toBe("Services");
			expect(items[3].getText()).toBe("Blog");
			expect(items[4].getText()).toBe("Contact");
		});

	});

	/**
	* Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	* to see how map function can be used to verify content of multiple elements
	*/

	it('should have Feature A, Feature B, Feature C sections ...', function () {

		var items = element.all(by.xpath('//h2')).map(function(elm, index) {
			return {
				index: index,
				text: elm.getText(),
			}
		});

		expect(items).toEqual([
			{index: 0, text: "Feature A"},
			{index: 1, text: "Feature B"},
			{index: 2, text: "Feature C"}
		])

	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */
	it('should route to "Blog" pages after selecting link', function () {

		element.all(by.css('.nav li')).filter(function(elm, index) {
			return elm.getText().then(function(text) {
				return text === 'Blog';
			});
		}).first().click();
		
	});

});
