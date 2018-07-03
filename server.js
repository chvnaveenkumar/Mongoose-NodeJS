var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/config');
var { user } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/user',(req,res) => {
    user.find().then((user) => {
        res.send({user});
    }, (e) => {
        res.send(400);
    })
});

app.get('/user/:id', (req, res) =>{

    //testing what id we are getting
  //  res.send(req.params);

  var id = req.params.id;

  user.findById(id).then((detailsbyId) =>{
    res.send({detailsbyId});
  },(err) => {
    res.send(400);
  });


});

app.listen(port, () => {
    console.log('Started on port 3000');
});

module.exports = {app};



