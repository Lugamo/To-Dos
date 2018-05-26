const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27018/TodoApp');

module.export = {
  mongoose: mongoose
};
