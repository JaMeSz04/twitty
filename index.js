

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./database.js');

app.use(bodyParser.json());

app.post('/login', function(req,res){
    var info = db.login(req.body.username, req.body.password);
    if (info == null){
        res.send("error");
    } else {
        res.send(info);
    }
   
});

app.post('/register', function(req, res){
    
});

var port = process.env.PORT || 8080;

app.listen(port);