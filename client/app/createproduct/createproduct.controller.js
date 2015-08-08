'use strict';

angular.module('seedlyApp')
  .controller('CreateproductCtrl', function ($scope, $http, $location, $cookieStore, s3, imgutil, Product, User) {
    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();
    }

    $scope.product = {};

    $scope.previewImage = function(files) {
      var file = files[0];
      console.log(file);
      imgutil.loadImage(file).then( function(img) {
          console.log(img);
          $scope.product.localimgpath = img.src;
        }
      );
    }; 

    // TODO: probably needs to redirect to somewhere from here...
    // Back to the same page?
    // Probably want to do a bulk create, maybe even through a spreadsheet
    // they also probably want to at least easliy add another one
    $scope.createProduct = function(form) {
      $scope.submitted = true;
      $scope.imageUpload = false;
      $scope.product.imgurl = '';

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
                  $scope.product.imgurl = res.imgurl;
                  $scope.imageUpload = res.imageUpload;

                  console.log($scope.product);

                  // TODO: create product here
                  // TODO: figure out resource stuff in the service module.
                  Product.save({
                    seller: currentUser._id,
                    name: $scope.product.name,
                    description: $scope.product.description,
                    imgurl: $scope.product.imgurl,
                    status: 'active',
                    // A product can have mulitple offer types
                    offers: [{
                      type: 'instant', // point of sale? // Because we can have subscriptions
                      price: $scope.product.price, // TODO create directive to handle this.
                      unit: $scope.product.unit,
                      quantity: $scope.product.quantity,
                      // An offer can have multiple avails
                      avails: [{
                        startDate: '',
                        endDate: ''
                      }]
                    }]
                  },
                    function(data) {
                      console.log(data);
                      // It's actually kind of annoying 
                      // bc i want to upload a lot at a time.
                      // $location.path('/yourproducts');
                    },
                    function(err) {
                      console.log(err);
                    }
                  );
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