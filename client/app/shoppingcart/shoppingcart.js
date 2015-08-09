'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shoppingcart', {
        url: '/shoppingcart',
        templateUrl: 'app/shoppingcart/shoppingcart.html',
        controller: 'ShoppingcartCtrl'
      });
  });