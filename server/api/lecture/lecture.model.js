'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OneLecture = new Schema({
  name: String,
  categoryName: String
});

var LectureSchema = new Schema({
    groupId: {type: String},
    lectures: [OneLecture]
});

module.exports = mongoose.model('Lecture', LectureSchema);
