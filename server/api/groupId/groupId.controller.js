'use strict';

var _ = require('lodash');
var GroupId = require('./groupId.model');

// Get list of groupIds
exports.index = function(req, res) {
  GroupId.find(function (err, groupIds) {
    if(err) { return handleError(res, err); }
    return res.json(200, groupIds);
  });
};

// Get a single groupId
exports.show = function(req, res) {
  GroupId.findById(req.params.id, function (err, groupId) {
    if(err) { return handleError(res, err); }
    if(!groupId) { return res.send(404); }
    return res.json(groupId);
  });
};

// Creates a new groupId in the DB.
exports.create = function(req, res) {
  GroupId.create(req.body, function(err, groupId) {
    if(err) { return handleError(res, err); }
    return res.json(201, groupId);
  });
};

// Updates an existing groupId in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GroupId.findById(req.params.id, function (err, groupId) {
    if (err) { return handleError(res, err); }
    if(!groupId) { return res.send(404); }
    var updated = _.merge(groupId, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, groupId);
    });
  });
};

// Deletes a groupId from the DB.
exports.destroy = function(req, res) {
  GroupId.findById(req.params.id, function (err, groupId) {
    if(err) { return handleError(res, err); }
    if(!groupId) { return res.send(404); }
    groupId.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}