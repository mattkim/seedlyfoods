'use strict';

angular.module('seedlyApp')
  .controller('ProductdetailCtrl', function ($scope, $stateParams, $http, $cookieStore, User) {
    var product_id = $stateParams.id;
    $scope.product = {};

    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();
    }

    $http.get('/api/products/' + product_id).then(
      function(res) {
        console.log(res);
        $scope.product = res.data;
      },
      function(err) {
        console.log(err);
      }
    );

    $scope.addShoppingCartItem = function() {
      var product = $scope.product;

      console.log(product);

      User.addShoppingCartItem({ id: currentUser._id },{
          product: product._id,
          name: product.name,
          price: product.offers[0].price,// TODO double check this data type
          unit: product.offers[0].unit,
          quantity: 1 // lol for now you can only add 1 at a time?  well i guess because you'd have to increment...
          // you might be able to add a de-duping clause to the
      });
    };
  });
