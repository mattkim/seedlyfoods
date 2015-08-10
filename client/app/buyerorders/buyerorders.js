'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('buyerorders', {
        url: '/buyerorders',
        templateUrl: 'app/buyerorders/buyerorders.html',
        controller: 'BuyerordersCtrl'
      });
  });