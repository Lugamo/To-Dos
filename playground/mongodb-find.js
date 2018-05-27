// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client) => {
  if (err) {
    //Se utiliza un return para que de esta manera si entra en el if salga de la funcion
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp')
  //{completed: false}
  // db.collection('ToDos').find({
  //   _id: new ObjectID('5b08ccd7f73449a0f7aeac5e')
  // }).toArray().then((doc) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(doc, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });
  db.collection('ToDos').find().count().then((count) => {
    console.log(`ToDos count ${count}`);
    console.log('--------------------------------');
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  var usuario = 'Eduardo Garcia Morales'
  db.collection('Users').find({name: usuario}).count().then((count) => {
    console.log(`Users Count ${count}`);
  }, (err) => {
    console.log('Unable to count the Collection Users');
  });

  db.collection('Users').find({name: usuario}).toArray().then((docs) => {
    console.log(`Users:`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to count the Collection Users');
  });
  // client.close();
});
