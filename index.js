var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./database.js');
app.use(bodyParser. json());

app.post('/login', function(req,res){
    var info = db.login(req.body.username, req.body.password);
    if (info == null){
        res.send("error");
    } else {
        res.send(info);
    }
   
});

app.post('/register', function(req, res){
    
    var result = db.register(req.body.username, req.body.password, req.body.name, req.body.email);
    if (result){
        res.send("success");
        return;
    }
    res.send("error");

});

app.post('/followingList', function (req,res){
    var info = db.getFollowers(req.body.username);
    if (info == null){
        res.send("error");    
        return;
    }
    res.send(info);
});

var port = process.env.PORT || 8080;
app.listen(port);