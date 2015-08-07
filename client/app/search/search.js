'use strict';

angular.module('seedlyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search/:text',
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });