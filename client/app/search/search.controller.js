'use strict';

angular.module('seedlyApp')
  .controller('SearchCtrl', function ($scope, $stateParams) {
  	console.log($stateParams);
    $scope.text = $stateParams.text;
  });
