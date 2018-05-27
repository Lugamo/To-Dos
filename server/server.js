var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js')
var {ToDo} = require('./models/todo.js')
var {User} = require('./models/user.js')

var app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) => {
  var newToDo = new ToDo({
    text: req.body.text
  });
  newToDo.save().then((result)=>{
    res.send(result);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todo', (req, res) => {
  ToDo.find().then((todo) => {
    res.send({todo});
  }, (err) => {
    res.status(400).send(err);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports ={
  app:app
}
