'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LectureSchema = new Schema({
  name: String,
  categoryName: String
});

module.exports = mongoose.model('Lecture', LectureSchema);
