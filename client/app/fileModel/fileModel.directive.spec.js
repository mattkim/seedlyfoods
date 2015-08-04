'use strict';

describe('Directive: fileModel', function () {

  // load the directive's module
  beforeEach(module('seedlyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // TODO: learn how to unit test this directive
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<file-model></file-model>');
    element = $compile(element)(scope);
    expect('this is the fileModel directive').toBe('this is the fileModel directive');
  }));
});