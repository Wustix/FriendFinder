var path = require("path");

app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/home.html");
})

app.get("/survey",function(req, res){
    res.sendFile(__dirname + "/public/survey.html");
})