'use strict';

angular.module('seedlyApp')
  .controller('CheckoutCtrl', function ($scope, $http, order) {
    $scope.checkout = {};

    $scope.charge = function(code, result) {
      $scope.submitted = true;

      if (result.error) {
        $scope.checkout.err = result.error.message;
      } else {
        var token = result.id;
        var amount = $scope.checkout.amount;

        order.charge(token, amount).then(
          function(res) {
            console.log(res);
            $scope.checkout.result = res;
            // Redirect to order summary page...
          },
          function(err) {
            console.log(err);
            $scope.checkout.err = err;
          }
        );
      }
    };
  });
