'use strict';

describe('Controller: BuyerordersCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var BuyerordersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuyerordersCtrl = $controller('BuyerordersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
