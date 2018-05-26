// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client) => {
  if (err) {
    //Se utiliza un return para que de esta manera si entra en el if salga de la funcion
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp')

  //delete Many
  // db.collection('ToDos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete');
  // });
  // db.collection('Users').deleteMany({name: 'Valentina'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete');
  // });
  //delete one -- si varios registro poseen el registro que se desea eliminar, se eliminara el pimero que se encuentre
  // db.collection('ToDos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete');
  // });
  //findOneAndDelete -- devuelve el registro que recien se borro
  // db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete');
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b08d565df2efd80e6a6ee08')
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete');
  });
  // client.close();
});
