'use strict';

describe('Controller: CreateproductCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var CreateproductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    CreateproductCtrl = $controller('CreateproductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
