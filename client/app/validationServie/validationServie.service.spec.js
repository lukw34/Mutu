'use strict';

describe('Service: validationServie', function () {

  // load the service's module
  beforeEach(module('myMutuApp'));

  // instantiate service
  var validationServie;
  beforeEach(inject(function (_validationServie_) {
    validationServie = _validationServie_;
  }));

  it('should do something', function () {
    expect(!!validationServie).toBe(true);
  });

});
