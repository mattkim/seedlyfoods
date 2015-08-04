'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createproduct', {
        url: '/createproduct',
        templateUrl: 'app/createproduct/createproduct.html',
        controller: 'CreateproductCtrl'
      });
  });