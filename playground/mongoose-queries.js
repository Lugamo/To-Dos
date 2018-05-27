const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {ToDo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');
var id = '5b09d2bda54a843f2e0ea9ac';

if (!ObjectID.isValid(id)) {
  console.log('The ID is not valid');
}
// ToDo.find({
//   _id: id
// }).then((todo) => {
//   console.log('ToDos ', todo);
// });
//
// ToDo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('ToDo ', todo);
// });

// ToDo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('ToDo by id ', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by id \n', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
