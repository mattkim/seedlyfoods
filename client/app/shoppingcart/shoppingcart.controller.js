'use strict';

angular.module('seedlyApp')
  .controller('ShoppingcartCtrl', function ($scope, $cookieStore, User) {
    $scope.awesomeProducts = {};

    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();

      // TODO: actually now that i think about it
      // it actually may be better to just reference the ids
      // and then group them up on the server side...
      // Because yeah maybe you do want all the info...
      // Or just dump the whole shit anyways lol.
      // No because then you won't get updates like... oh this item
      // is no longer available and such
      console.log('test');

      currentUser.$promise.then(function(res) {
        console.log(res);
        User.getShoppingCart({id:res._id},
        	function(shoppingCart) {
            console.log('return from getShoppingCart');
            console.log(shoppingCart);
        		$scope.awesomeProducts = shoppingCart;
        	}, function(err) {
        		console.log(err);
        	}
        );
      });
    }
  });
