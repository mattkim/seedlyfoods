'use strict';

describe('Controller: SellerordersCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var SellerordersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SellerordersCtrl = $controller('SellerordersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
