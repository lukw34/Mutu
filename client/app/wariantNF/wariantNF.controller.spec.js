'use strict';

describe('Controller: WariantNFCtrl', function () {

  // load the controller's module
  beforeEach(module('myMutuApp'));

  var WariantNFCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WariantNFCtrl = $controller('WariantNFCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
