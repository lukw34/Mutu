'use strict';

describe('Controller: WariantNTCtrl', function () {

  // load the controller's module
  beforeEach(module('myMutuApp'));

  var WariantNTCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WariantNTCtrl = $controller('WariantNTCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
