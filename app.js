
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sqlite3 = require('sqlite3').verbose();

app.use(express.static('docs'))

app.get('/rest/prices/:code', function (req, res, next) {

    var db = new sqlite3.Database('app.sqlite3');
    db.serialize(function () {
        
        var preparedStatement = "SELECT date, price FROM STOCK_PRICES where code = ?";
        var order = req.query.sortOrder;
        if (order != null && order != ""){
            if (order == "asc"){
                preparedStatement += " order by date asc";
            }
            else if (order == "desc"){
                preparedStatement += " order by date desc";
            }
        }

        var stockPrices = [];
        var stockCode = req.params.code;
        db.each(preparedStatement, stockCode,
            function (err, row) {
                stockPrices.push({ x: row.date, y: row.price });
            }, function (err, count) {
                db.close();
                console.log(["data: ", stockPrices]);
                if ( stockPrices.length ) {
                    res.send(stockPrices);
                } else {
                    res.status(400).send("Not supported stock code");
                }
            });

    });
})

app.use(bodyParser.json());

app.post('/rest/prices', function (request, response) {

    var result = [];
    
    var contype = request.headers['content-type'];
    if (!contype || contype.indexOf('application/json') !== 0){
        result.push("Incorrect or missing content type ")
    }   
    if (!request.body.code) {
        result.push("Missing stock code ")
    }
    if (!request.body.date) {
        result.push("Missing price date ")
    }
    if (request.body.date && isNaN(Date.parse(request.body.date)))
    {
        result.push("Not supported date format ")
    }   
    if (!request.body.price) {
        result.push("Missing stock price ")
    }
    if (result.length == 0){
        console.log("Saving data : " + request.body) // Show the HTML for the Google homepage.    
        var db = new sqlite3.Database('app.sqlite3');
        db.serialize(function () {
            var stmt = db.prepare("INSERT INTO STOCK_PRICES VALUES (?,?,?)");
            stmt.run(request.body.code, request.body.date, request.body.price);
            stmt.finalize();
        });
        db.close();
        result = ["Stock price added"]
    }
    console.log("Sending response : " + result) 
    response.send(result.join());
});

app.use(function (err, req, res, next) {
  res.status(400).send( { result: err.stack })
})

app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
})
