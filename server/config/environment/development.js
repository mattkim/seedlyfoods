'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/seedly-dev'
  },

  seedDB: true,

  // S3 credentials
  s3: {
    access: 'AKIAJQY25SY5GMDSITFA' ||
            'noaccesskey',
    secret: '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' ||
            'nosecretkey',
    bucket: 'seedlyfoods'
  }

};
