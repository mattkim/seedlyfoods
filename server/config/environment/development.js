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
    access: process.env.AWS_ACCESS_KEY ||
            'noaccesskey',
    secret: process.env.AWS_SECRET_KEY ||
            'nosecretkey',
    bucket: 'seedlyfoods'
  }

};
