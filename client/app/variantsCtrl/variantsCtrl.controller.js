'use strict';
angular.module('myMutuApp')
  .controller('VariantsCtrlCtrl', ['$log', '$http', '$scope', 'mutuService', function ($log, $http, $scope, mutuService) {
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
    zmienna pokazujaca etap na jakim jest nakieta
     */
    $scope.step = 1;

    /*
    Pobieranie listy zajec z bazy danych
     */
    $http.get('api/lectures')
      .success(function (data) {
        $scope.lectures = data.lectures;
        console.log('Pobrałem liste zajęć!!', data);
      }).error(function () {
        alert("Error");
      });

  /*
    Funkcja przesyłajaca opinie do bazy danych
  */
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

