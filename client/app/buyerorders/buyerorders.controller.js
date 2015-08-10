'use strict';

angular.module('seedlyApp')
  .controller('BuyerordersCtrl', function ($scope, $cookieStore, User, Order) {
    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();

      currentUser.$promise.then(function(res) {
        console.log('test!');
        console.log(res);

        currentUser.$promise.then(function(res) {
	        console.log(res);
	        Order.findByBuyer({id2:res._id},
	        	function(orders) {
		            console.log('return from findByBuyer');
		            console.log(orders);
	        		$scope.awesomeOrders = orders;
	        	}, function(err) {
	        		console.log(err);
	        	}
	        );
        });
      });
    }
  });
