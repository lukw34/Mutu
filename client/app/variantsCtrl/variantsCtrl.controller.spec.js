'use strict';

describe('Controller: VariantsCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('myMutuApp'));

  var VariantsCtrlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VariantsCtrlCtrl = $controller('VariantsCtrlCtrl', {
      $scope: scope
    });
  }));

  it('sho.', function () {
    expect(1).toEqual(1);
  });

});
