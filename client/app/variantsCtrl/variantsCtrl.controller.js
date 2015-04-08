'use strict';
angular.module('myMutuApp')
  .controller('VariantsCtrlCtrl', ['$log', '$http', '$scope', 'mutuService', function ($log, $http, $scope, mutuService) {
    //$scope.lectures = mutuService.getLecture();
    $scope.lectures = [];
    $scope.myOpinion = {
      lecture: "",
      firstOpinion: "",
      secondOpinion: ""
    };
    $scope.step = 1;

    $http.get('api/lectures')
      .success(function (data) {
        $scope.lectures = data;
        console.log('Pobrałem liste zajęć!!', data);
      }).error(function () {
        alert("Error");
      });

    $scope.addOpinions = function () {
      $http.post("api/opinionss", angular.copy(mutuService.getOpinions()))
        .success(function (data) {
          $log.log(data);
          console.log('Dodałem opinie ', data)
        }).error(function (data) {
          console.log(data, 'Can not write to database!');
        });
      $log.log(mutuService.getOpinions());
    };


    $scope.addLecture = function (myLecture) {
      $scope.step = 2;
      $scope.myOpinion.lecture = myLecture.name + '[' + myLecture.categoryName + ']';
    };

    $scope.addFirstOpinion = function () {
      $scope.step = 3;
    };

    $scope.addSecondOpinion = function () {
      $scope.step = 'end';
      mutuService.pushOpinion($scope.myOpinion.lecture, $scope.myOpinion.firstOpinion, $scope.myOpinion.secondOpinion);
      $scope.addOpinions();
    };


  }]);

