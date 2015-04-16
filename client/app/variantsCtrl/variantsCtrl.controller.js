'use strict';
angular.module('myMutuApp')
  .controller('VariantsCtrlCtrl', ['$location', '$log', '$http', '$scope', 'mutuService', function ($location, $log, $http, $scope, mutuService) {
    /*
     Tablica przechowująca  liste zajęć
     */
    $scope.lectures = [];
    /*
     Opiekt przechowujący opinie
     */
    $scope.myOpinion = {
      lecture: "",
      firstOpinion: "",
      secondOpinion: ""
    };

    /*
     zmienna przechowujaca id grupy
     */
    $scope.groupId = mutuService.getGroupId();


    /*
     zmienna pokazujaca etap na jakim jest nakieta
     */
    $scope.step = 1;

    /*
     Pobieranie listy zajec z bazy danych
     */
    $http.get('api/lectures/' + $scope.groupId)
      .success(function (data) {
        $scope.lectures = data.lectures;
        console.log('List of lecture was downloaded !!', data);
    }).error(function () {
        //$location.path('/');
        error("Check your internet connection !!");
      });


    /*
     Funkcja przesyłajaca opinie do bazy danych
     */
    $scope.addOpinions = function () {
      $http.post("api/opinionss", angular.copy(mutuService.getOpinions()))
        .success(function (data) {
          $log.log(data);
          console.log('Opinion was send ', data)
        }).error(function (data) {
          console.log(data, 'Can not write to database, check your internet connection');
        });
    };


    /*
     funkcja zapisu do obiektu nazwy zajęć i zmiana etapu na 2
     */
    $scope.addLecture = function (myLecture) {
      $scope.step = 2;
      $scope.myOpinion.lecture = myLecture.name + '[' + myLecture.categoryName + ']';
    };

    /*
     wyświetlenie etapu 3
     */
    $scope.addFirstOpinion = function () {
      $scope.step = 3;
    };

    /*
     wyświetlenie zakonczenia ankiety i przesłanie opini do bazy danych
     */
    $scope.addSecondOpinion = function () {
      $scope.step = 'end';
      mutuService.pushOpinion($scope.myOpinion.lecture, $scope.myOpinion.firstOpinion, $scope.myOpinion.secondOpinion);
      $scope.addOpinions();
    };


  }]);

