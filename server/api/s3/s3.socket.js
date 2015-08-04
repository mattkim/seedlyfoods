/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var S3 = require('./s3.model');

exports.register = function(socket) {
  S3.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  S3.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('s3:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('s3:remove', doc);
}