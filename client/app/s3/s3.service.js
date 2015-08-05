'use strict';

angular.module('seedlyApp')
  .service('s3', function ($http, $q) {
    return {
      // AngularJS will instantiate a singleton by calling "new" on this function
      // TODO: should go into a service
      upload: function(name, type, file) {
        var deferred = $q.defer();

        // Generate signed put url
        $http.get('/api/s3/signupload?name=' + name + '&type=' + type).then(
          function(res) {
            var signed_request = res.data[0].signed_request;
            var url = res.data[0].url;

            // Create request
            var req = {
                method: 'PUT',
                url: signed_request,
                headers: {
                  // internal solution to get around bearer auth from passport
                  // intentionally skip auth if we are doing an s3-signed-upload
                  'Authorization': 's3-signed-upload',
                  // Setting to undefined will reset defaulting to application/json;charset=utf-8
                  'Content-Type': undefined,
                  'x-amz-acl': 'public-read'
                },
                data: file
            };

            // Send the upload request to S3
            $http(req).then(
              function(res){
                console.log(res);
                deferred.resolve({
                  imageUpload: true,
                  imgurl: url
                });
              },
              function(err) {
                deferred.reject(err);
              }
            );
          }
        );

        return deferred.promise;
      }
    };
  });
