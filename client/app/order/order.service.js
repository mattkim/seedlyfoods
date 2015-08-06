'use strict';

angular.module('seedlyApp')
  .service('order', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      charge: function(token, amount) {
        // TODO: we should move this to orders... and call charge
        // orders will call stripe
        $http.get('/api/orders/charge?token=' + token + '&amount=' + amount).then(
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
