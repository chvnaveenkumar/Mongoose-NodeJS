var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./../db/config');
var { user } = require('./../models/user');

var app = express();

app.use(bodyParser.json());

app.post('/user',(req,res) => {

    var otherTodo = new user({
        name: req.body.name
    });    
    otherTodo.save().then((result) =>{
        res.send(JSON.stringify(result));
    },(err) =>{
        res.send(err);
    })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});




