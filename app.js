
var express = require('express')
var app = express()
var sqlite3 = require('sqlite3').verbose();

app.use(express.static('docs'))

app.get('/rest/prices', function (req, res, next) {

    var data = [];

    var db = new sqlite3.Database('app.sqlite3');
    
    db.serialize(function () {

        // db.run("CREATE TABLE lorem (info TEXT)");

        // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        // for (var i = 0; i < 10; i++) {
        //     stmt.run("Ipsum " + i);
        // }
        // stmt.finalize();

        db.each("SELECT date, price FROM STOCK_PRICES",
            function (err, row) {
                data.push ( {x: row.date, y: row.price});
            }, function (err, count) {
                db.close();
                console.log(["data: ", data]);
                res.send(data);
            });

    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
