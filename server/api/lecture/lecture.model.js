'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OneLecture = new Schema({
  name: String,
  categoryName: {}
});

var LectureSchema = new Schema({
    _id: {type: String, unique: true, required: true},
    lectures: [OneLecture]
});

module.exports = mongoose.model('Lecture', LectureSchema);
