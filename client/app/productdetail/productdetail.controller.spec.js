'use strict';

describe('Controller: ProductdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('seedlyApp'));

  var ProductdetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductdetailCtrl = $controller('ProductdetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
