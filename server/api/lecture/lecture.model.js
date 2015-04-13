'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OneLecture = new Schema({
  name: {type: String,  unique: true},
  categoryName: {type: String,  unique: true }
});


var LectureSchema = new Schema({
    _id: {type: String, unique: true, required: true},
    lectures: [OneLecture]
});


module.exports = mongoose.model('Lecture', LectureSchema);
