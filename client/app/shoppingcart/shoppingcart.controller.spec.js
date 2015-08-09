'use strict';

describe('Controller: ShoppingcartCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var ShoppingcartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingcartCtrl = $controller('ShoppingcartCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
