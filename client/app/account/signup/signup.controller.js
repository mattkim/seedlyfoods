'use strict';

angular.module('seedlyApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          customerType: $scope.user.customerType,
          phoneNumber: $scope.user.phoneNumber,
          faxNumber: $scope.user.faxNumber,
          addresses: [
            {
              fullName: $scope.user.addressFullName,
              addressLine1: $scope.user.addressLine1,
              addressLine2: $scope.user.addressLine2,
              city: $scope.user.city,
              state: $scope.user.state,
              zipCode: $scope.user.zipCode
            }
          ]
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
