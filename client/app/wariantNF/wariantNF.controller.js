'use strict';

angular.module('myMutuApp')
  .controller('WariantNFCtrl', function ($scope) {
    $scope.lectures = ["wykład z teoretycznych podstaw informatyki", "ćwiczenia z teoretycznych podstawinformatyki"];
    $scope.opinionsNF = [];
    $scope.opinionNF = {
      lecture: "",
      firstOpinion: "",
      secondOpinion: ""
    };

    $scope.showStep1 = true;
    $scope.showStep2 = false;
    $scope.showStep3 = false;
    $scope.endStep = false;
    $scope.chooseLecture = function (mlecture) {
      $scope.opinionNF.lecture = mlecture;
      $scope.showStep1 = false;
      $scope.showStep2 = true;
    };
    $scope.addFirstOpinion = function () {
      $scope.showStep2 = false;
      $scope.showStep3 = true;
    };
    $scope.addSecondOpinion = function () {
      $scope.showStep3 = false;
      $scope.endStep = true;
    };

  });
