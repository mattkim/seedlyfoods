'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sellerorders', {
        url: '/sellerorders',
        templateUrl: 'app/sellerorders/sellerorders.html',
        controller: 'SellerordersCtrl'
      });
  });