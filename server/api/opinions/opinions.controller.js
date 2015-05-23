'use strict';

var _ = require('lodash');
var Opinions = require('./opinions.model');

// Get list of opinionss
exports.index = function(req, res) {
  Opinions.find(function (err, opinionss) {
    if(err) { return handleError(res, err); }
    res.charset = 'utf-8';
    return res.json(200, opinionss);
  });
};

// Get a single opinions
exports.show = function(req, res) {
  Opinions.findById(req.params.id, function (err, opinions) {
    if(err) { return handleError(res, err); }
    if(!opinions) { return res.send(404); }
    return res.json(opinions);
  });
};

// Creates a new opinions in the DB.
exports.create = function(req, res) {
  Opinions.create(req.body, function(err, opinions) {
    if(err) { return handleError(res, err); }
    return res.json(201, opinions);
  });
};

// Updates an existing opinions in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Opinions.findById(req.params.id, function (err, opinions) {
    if (err) { return handleError(res, err); }
    if(!opinions) { return res.send(404); }
    var updated = _.merge(opinions, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, opinions);
    });
  });
};

// Deletes a opinions from the DB.
exports.destroy = function(req, res) {
  Opinions.findById(req.params.id, function (err, opinions) {
    if(err) { return handleError(res, err); }
    if(!opinions) { return res.send(404); }
    opinions.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
