'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupIdSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('GroupId', GroupIdSchema);