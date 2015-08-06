'use strict';

angular.module('seedlyApp')
  .controller('CheckoutCtrl', function ($scope, $http) {
    $scope.checkout = {};

    $scope.charge = function(code, result) {
      $scope.submitted = true;

      if (result.error) {
        console.log('it failed! error: ' + result.error.message);
      } else {
        console.log('success! token: ' + result);
        var amount = $scope.checkout.amount;

        // TODO: we should move this to orders... and call charge
        // orders will call stripe
        $http.get('/api/stripe/charge?token=' + result.id + '&amount=' + amount).then(
          function(res) {
            console.log(res);
            // Redirect to order summary page...
          },
          function(err) {
            console.log(err);
          }
        );
      }
    };
  });
