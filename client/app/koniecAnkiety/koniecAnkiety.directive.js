'use strict';

angular.module('myMutuApp')
  .directive('koniecAnkiety', function () {
    return {
      controller: 'MutuCtrl',
      templateUrl: 'app/koniecAnkiety/koniecAnkiety.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
