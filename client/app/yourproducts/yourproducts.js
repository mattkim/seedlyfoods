'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('yourproducts', {
        url: '/yourproducts',
        templateUrl: 'app/yourproducts/yourproducts.html',
        controller: 'YourproductsCtrl'
      });
  });