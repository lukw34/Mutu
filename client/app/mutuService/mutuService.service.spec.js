'use strict';

describe('Service: mutuService', function () {

  // load the service's module
  beforeEach(module('myMutuApp'));

  // instantiate service
  var mutuService;
  beforeEach(inject(function (_mutuService_) {
    mutuService = _mutuService_;
  }));

  it('should do something', function () {
    expect(!!mutuService).toBe(true);
  });

});
