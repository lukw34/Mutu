'use strict';

describe('Directive: koniecAnkiety', function () {

  // load the directive's module and view
  beforeEach(module('myMutuApp'));
  beforeEach(module('app/koniecAnkiety/koniecAnkiety.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<koniec-ankiety></koniec-ankiety>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the koniecAnkiety directive');
  }));
});