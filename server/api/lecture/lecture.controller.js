'use strict';

var _ = require('lodash');
var Lecture = require('./lecture.model');

// Get list of lectures
exports.index = function(req, res) {
  Lecture.find(function (err, lectures) {
    if(err) { return handleError(res, err); }
    return res.json(200, lectures);
  });
};

// Get a single lecture
exports.show = function(req, res) {
  Lecture.findById(req.params.id, function (err, lecture) {
    if(err) { return handleError(res, err); }
    if(!lecture) { return res.send(404); }
    return res.json(lecture);
  });
};

// Creates a new lecture in the DB.
exports.create = function(req, res) {
  Lecture.create(req.body, function(err, lecture) {
    if(err) { return handleError(res, err); }
    return res.json(201, lecture);
  });
};

// Updates an existing lecture in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Lecture.findById(req.params.id, function (err, lecture) {
    if (err) { return handleError(res, err); }
    if(!lecture) { return res.send(404); }
    var updated = _.merge(lecture, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, lecture);
    });
  });
};

// Deletes a lecture from the DB.
exports.destroy = function(req, res) {
  Lecture.findById(req.params.id, function (err, lecture) {
    if(err) { return handleError(res, err); }
    if(!lecture) { return res.send(404); }
    lecture.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
