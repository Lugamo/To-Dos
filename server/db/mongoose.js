const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODBURI || 'mongodb://localhost:27018/TodoApp');

module.export = {
  mongoose: mongoose
};
