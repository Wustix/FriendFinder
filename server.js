// denpendencies

var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

// Set up express

var app = express();
PORT = process.env.PORT || 3000;




// Sets up app for data parsing


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);


app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
})
