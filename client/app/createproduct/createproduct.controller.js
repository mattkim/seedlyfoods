'use strict';

angular.module('seedlyApp')
  .controller('CreateproductCtrl', function ($scope, $http, s3) {
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

        s3.upload(name, type, file).then(
          function(res) {
            $scope.imgurl = res.imgurl;
            $scope.imageUpload = res.imageUpload;
          },
          function(err) {
            console.log(err);
          }
        );
      }
    };
  });