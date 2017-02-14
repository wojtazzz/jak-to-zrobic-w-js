var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('app.sqlite3');
var request = require('request');

var url = "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date=2014-01-01&collapse=monthly&api_key=sRfiowgoYHza7useuLwe";

request({url: url, json : true} , function (error, response, body) {

    if (!error && response.statusCode == 200) {

        console.log("Saving data from: " + body.dataset.data) // Show the HTML for the Google homepage.    
        var data = body.dataset.data;
        

        db.serialize(function () {

            db.run("DROP TABLE IF EXISTS STOCK_PRICES");
            db.run("CREATE TABLE STOCK_PRICES (code TEXT, date TEXT, price TEXT)");

            var stmt = db.prepare("INSERT INTO STOCK_PRICES VALUES ('FB',?,?)");
            for (var i in data) {
                var time = data[i][0];
                var price = data[i][1];
                stmt.run(time, price);
            }
            stmt.finalize();
        });

        db.close();

    }

});


