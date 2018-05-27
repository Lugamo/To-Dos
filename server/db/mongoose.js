const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(procesS.env.MONGODBURI || 'mongodb://localhost:27018/TodoApp');

module.export = {
  mongoose: mongoose
};
