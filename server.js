// denpendencies

var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

// Set up express

var app = express();
PORT = process.env.PORT || 3000;




// Sets up app for data parsing


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/home.html");
})

app.get("/public/home",function(req, res){
    res.sendFile(__dirname + "/public/home.html");
})

app.get("/public/survey",function(req, res){
    res.sendFile(__dirname + "/public/survey.html");
})



app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})
