var menuTitle = "Strona glowna"

var pageTitle = "Agile & automation Days" + "| Konferencja i Warsztaty"

var year = 2018

var pageTitleWithYear = pageTitle + " " + year

console.log(pageTitleWithYear);

var menuTitle0 = "Strona glowna"
var menuTitle1 = "O wydarzeniu"
var menuTitles = [menuTitle0, menuTitle1]

for (var i=0; i< menuTitles.length; i++){
console.log(menuTitles[i]); 
}

var menuItem0 = { index: 0, title: "Strona glowna" };
var menuItem1 = { index: 1, title: "O wydarzeniu" };
var menuItems = [menuItem0, menuItem1]

for (var i = 0; i < menuItems.length; i++) {
    console.log(menuItems[i].title);
}

for(menu1 in menuTitles){
    console.log(menu1);
}