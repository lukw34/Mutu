'use strict';

describe('Controller: WariantPFCtrl', function () {

  // load the controller's module
  beforeEach(module('myMutuApp'));

  var WariantPFCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WariantPFCtrl = $controller('WariantPFCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
