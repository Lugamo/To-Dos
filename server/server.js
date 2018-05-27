var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js')
var {ToDo} = require('./models/todo.js')
var {User} = require('./models/user.js')

var app = express();
const port = process.env.PORT || 3000;
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

app.get('/todo/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {

    return res.status(404).send()
  }

  ToDo.findById(id).then((result) => {
    if (!result) {
      return res.status(404).send()
    } else {
      res.send({result});
    }
  }, (err) => {
    res.status(400).send()
  })
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports ={
  app:app
}
