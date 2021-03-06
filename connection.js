const mongoose = require('mongoose');

exports.connect = function () {
  mongoose.connect('mongodb://localhost/diabetesDatabase');

  var db = mongoose.connection;
  db.on('error', function (error) {
    console.log('error connecting', error);
  });

  db.once('open', function () {
    console.log('connected to mongo');
  });
};
