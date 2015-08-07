'use strict';

angular.module('seedlyApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.isBuyer = Auth.isBuyer;
    $scope.isSeller = Auth.isSeller;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.searchbox = {};

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.search = function(form) {
      // should change the contents of the main page.
      if(form.$valid){
        console.log($scope.searchbox);
        // Needs to redirect to a search view?
        $location.path('/search');
      }
    };
  });