'use strict';

angular.module('seedlyApp')
  .controller('SearchCtrl', function ($scope, $stateParams, $http) {
  	console.log($stateParams);
  	var text = $stateParams.text;
    $scope.text = text;

    // TODO: refactor this into a service module
    $http.get('/api/products/findByNameRegex/' + text).then(
      function(res){
        $scope.awesomeProducts = res.data;
        console.log(res);
      },
      function(err){
        console.log(err);
      }
    );
  });
