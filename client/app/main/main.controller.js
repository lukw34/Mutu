'use strict';

angular.module('myMutuApp')
  .controller('MutuCtrl', function ($scope) {
  $scope.query = { //zapytanie do bazy danych
    groupeName: ""
   };
  $scope.group = [];
    $scope.addGroup = function () {
      $scope.group.push($scope.group);
    }

  });
