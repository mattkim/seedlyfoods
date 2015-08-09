'use strict';

angular.module('seedlyApp')
  .controller('CheckoutCtrl', function ($scope, $http, $cookieStore, Order, User) {
    $scope.checkout = {};
    $scope.checkout.amount = 0;
    $scope.checkout.products = [];

    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();
      // TODO: yah this needs to be inside?
      currentUser.$promise.then(function(res) {
        console.log(res);
        User.getShoppingCart({id:res._id},
          function(shoppingCart) {
            console.log('return from getShoppingCart');
            console.log(shoppingCart);
            for(var i = 0; i < shoppingCart.length; i++) {
              $scope.checkout.amount += shoppingCart[i].offers[0].price;
              $scope.checkout.products.push(shoppingCart[i]._id);
            } 
          }, function(err) {
            console.log(err);
          }
        );
      });
    }

    $scope.charge = function(code, result) {
      $scope.submitted = true;

      if (result.error) {
        $scope.checkout.err = result.error.message;
      } else {
        var token = result.id;
        var amount = $scope.checkout.amount;
        var products = $scope.checkout.products;

        // Testing if omitting the id will work.
        Order.charge({id: null},{
          token:token,
          amount:amount,
          buyer:currentUser._id,
          products:products
        });

        // TODO: redirect to the orders page
      }
    };
  });
