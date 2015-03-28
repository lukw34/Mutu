'use strict';

describe('Controller: WariantPTCtrl', function () {

  // load the controller's module
  beforeEach(module('myMutuApp'));

  var WariantPTCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WariantPTCtrl = $controller('WariantPTCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
