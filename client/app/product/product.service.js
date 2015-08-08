'use strict';

angular.module('seedlyApp')
  .service('Product', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('/api/products/',
      {id: '@_id'},
      {
        getUserProducts : {
          method: 'GET'
        }
      }
    );
  });
