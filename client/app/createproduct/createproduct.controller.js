'use strict';

angular.module('seedlyApp')
  .controller('CreateproductCtrl', function ($scope, $http) {
    $scope.product = {};

    $scope.createProduct = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        var productimage = $scope.product.productimage;
        var file = productimage[0];
        var name = file.name;
        var type = file.type;

        // TODO: should go into a service
        $http.get('/api/s3/signupload?name=' + name + '&type=' + type).then(function(res) {
          var signed_request = res.data[0].signed_request;

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

          $http(req).then(function(res){
            console.log(res);
            // TODO: use the url here to persist into mongo under product
          });
        });
      }
    };
  });