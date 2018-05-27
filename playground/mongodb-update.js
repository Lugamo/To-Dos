// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client) => {
  if (err) {
    //Se utiliza un return para que de esta manera si entra en el if salga de la funcion
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp')

  // db.collection('ToDos').findOneAndUpdate({
  //   _id: new ObjectID('5b097f9d28b1fef1ad64b831')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b08c000d2a17c30a2e27d9e')
  }, {
    $set: {
      name: 'Laura Valencia',
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // client.close();
});
