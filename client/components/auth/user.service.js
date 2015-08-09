'use strict';

angular.module('seedlyApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      addShoppingCartItem: {
        method: 'PUT',
        params: {
          controller:'shoppingcartitem'
        }
      },
      getShoppingCart: {
        method: 'GET',
        isArray: true,
        params: {
          controller:'shoppingcart'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      update: {
        method: 'PUT' // this method issues a PUT request
      }
	  });
  });
