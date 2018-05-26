// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client) => {
  if (err) {
    //Se utiliza un return para que de esta manera si entra en el if salga de la funcion
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp')
  // db.collection('ToDos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert ToDo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  // db.collection('Users').insertOne({
  //   name: 'Eduardo Garcia Morales',
  //   age: 22,
  //   location: 'Cartagena'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert the User ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  client.close();
});
