'use strict';

var aws = require('aws-sdk');
var config = require('../../config/environment');

// Generate a signed upload url to post a file to.
exports.signupload = function(req, res) {
  var filename = req.query.name;
  var filetype = req.query.type;
  var s3bucket = config.s3.bucket;
  
  var s3 = new aws.S3();
  var s3_params = {
      Bucket: s3bucket,
      Key: filename,
      Expires: 60,
      ContentType: filetype,
      ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3_params, function(err, data){
      if(err){
          console.log(err);
      }
      else{
          var return_data = {
              signed_request: data,
              url: 'https://'+s3bucket+'.s3.amazonaws.com/'+filename
          };
          res.status(200).json([return_data]);
      }
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}