'use strict';

describe('Controller: WariantXCtrl', function () {

  // load the controller's module
  beforeEach(module('myMutuApp'));

  var WariantXCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WariantXCtrl = $controller('WariantXCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
