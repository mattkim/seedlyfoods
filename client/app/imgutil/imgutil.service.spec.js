'use strict';

describe('Service: imgutil', function () {

  // load the service's module
  beforeEach(module('seedlyApp'));

  // instantiate service
  var imgutil;
  beforeEach(inject(function (_imgutil_) {
    imgutil = _imgutil_;
  }));

  it('should do something', function () {
    expect(!!imgutil).toBe(true);
  });

});
