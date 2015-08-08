'use strict';

angular.module('seedlyApp')
  .controller('YourproductsCtrl', function ($scope, $cookieStore, $http, Product, User) {
    $scope.awesomeProducts = {};

    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();

      currentUser.$promise.then(function(res) {
        console.log('test!');
        console.log(res);

        // TODO: refactor this into a service module
        $http.get('/api/products/user/' + res._id).then(
          function(res){
            $scope.awesomeProducts = res.data;
            console.log(res);
          },
          function(err){
            console.log(err);
          }
        );
      });
    }
    // $http.get('/api/products/user/' + currentUser._id);

  });
