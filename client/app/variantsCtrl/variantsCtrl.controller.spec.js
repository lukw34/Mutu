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

  it('should change step', function ($scope) {
    $scope.step = 2;
    $scope.addFirstOpinion();
    expect($scope.step).toEqual(56);
    $scope.addSecondOpinion();
    expect($scope.step).toEqual('end');
  });

});
