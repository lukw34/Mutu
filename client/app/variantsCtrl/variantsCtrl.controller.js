'use strict';

angular.module('myMutuApp')
  .controller('VariantsCtrlCtrl',['$scope','mutuService', function ($scope, mutuService) {
    $scope.lectures = ['wykład z Tpi', 'wF', 'matma'];
    $scope.myOpinion = {
      lecture:"",
      firstOpinion:"",
      secondOpinion:""
    };
    $scope.opinionsNF = [];
    $scope.opinionsNT = [];
    $scope.opinionsPF = [];
    $scope.opinionsPT = [];
    $scope.opinionsX = [];
    $scope.kindOfOpinion = mutuService.getKindOfOpinion();
    $scope.pushOpinion = function () {
      if($scope.kindOfOpinion === 'wariantNT') {
        return $scope.opinionsNT;
      }
      if($scope.kindOfOpinion === 'wariantNF') {
        return $scope.opinionsNF;
      }
      if($scope.kindOfOpinion === 'wariantPF') {
        return $scope.opinionsPF;
      }
      if($scope.kindOfOpinion === 'wariantPT') {
        return $scope.opinionsPT;
      }
      if($scope.kindOfOpinion === 'wariantX') {
        return $scope.opinionsX;
      }

    };
    $scope.showStep1 = true;
    $scope.showStep2 = false;
    $scope.showStep3 = false;
    $scope.end = false;
    $scope.addLecture = function(myLecture) {
      $scope.myOpinion.lecture = myLecture;
      $scope. showStep1 = false;
      $scope.showStep2 = true;
    };
    $scope.addFirstOpinion = function () {
      $scope.showStep2 = false;
      $scope.showStep3 = true;
    };
    $scope.addSecondOpinion = function () {
      $scope.showStep3 = false;
      $scope.end = true;
      $scope.pushOpinion().push($scope.myOpinion);
    };
  }]);
