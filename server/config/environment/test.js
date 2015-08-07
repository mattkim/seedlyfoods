'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/seedly-test'
  },
  
  // S3 credentials
  s3: {
    access: process.env.AWS_ACCESS_KEY ||
            'noaccesskey',
    secret: process.env.AWS_SECRET_KEY ||
            'nosecretkey',
    bucket: 'seedlyfoods'
  },

  // Stripe credentials
  stripe: {
    sk: process.env.STRIPE_SK ||
        'nosk',
    pk: process.env.STRIPE_PK ||
        'nopk'
  }
};