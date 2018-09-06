var HomePage = function () {


    this.getElements = function () {
        return this.elements.map(function (elm, index) {
            return {
                index: index,
                name: elm.element(css('ul.nav > li > a')).getText()
            };
        });
    };
};

module.exports = new HomePage();
