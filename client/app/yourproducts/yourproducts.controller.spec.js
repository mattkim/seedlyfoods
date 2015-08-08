'use strict';

describe('Controller: YourproductsCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var YourproductsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YourproductsCtrl = $controller('YourproductsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
