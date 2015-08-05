'use strict';

angular.module('seedlyApp')
  .controller('CreateproductCtrl', function ($scope, $http, s3, imgutil) {
    $scope.product = {};

    $scope.createProduct = function(form) {
      $scope.submitted = true;
      $scope.imageUpload = false;
      $scope.imgurl = '';

      if(form.$valid) {
        var productimage = $scope.product.productimage;
        var file = productimage[0];
        var name = file.name;
        var type = file.type;

        imgutil.loadImage(file).then(
          function(img) {
            if(imgutil.lessThanMaxFrameSize(img) && imgutil.lessThanMaxFileSize(file)) {
              s3.upload(name, type, file).then(
                function(res) {
                  $scope.imgurl = res.imgurl;
                  $scope.imageUpload = res.imageUpload;
                },
                function(err) {
                  console.log(err);
                }
              );
            } else {
              console.log('img is too large.');
            }
          }
        );
      }
    };
  });