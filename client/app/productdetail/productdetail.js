'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productdetail', {
        url: '/productdetail/:id',
        templateUrl: 'app/productdetail/productdetail.html',
        controller: 'ProductdetailCtrl'
      });
  });