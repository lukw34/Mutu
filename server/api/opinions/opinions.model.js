'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OpinionsSchema = new Schema({
  type: String,
  lecture: String,
  firstOpinion: String,
  secondOpinion: String
});
module.exports = mongoose.model('Opinions', OpinionsSchema);
