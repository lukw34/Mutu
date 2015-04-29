'use strict';

angular.module('myMutuApp')
  .controller('MutuCtrl', ['$log', '$http', '$scope', '$location', 'validationServie' ,'mutuService', function ($log, $http, $scope, $location,validationServie, mutuService) {
    /*
     zapytanie do bazy danych
     */
    $scope.groupLectures = {};

    $scope.query = {
      groupName: ''
    };
    /*
     Przechowywanie id grupy {String}
     */
    $scope.groupId = '';
    /*
     Grupy pobrane z devplanu
     */
    $scope.groups = [];
    /*
     Pokazywanie przycisku 'Rozpocznij ankiete'
     */
    $scope.disabled = true;
    /*
     Pobrany podział zajęć
     */
    $scope.timetable = [];
    /*
     Możliwe warinaty ankiet
     */
    $scope.links = [
      {name: 'wariantNF', url: 'wariantNF'},
      {name: 'wariantNT', url: 'wariantNT'},
      {name: 'wariantPF', url: 'wariantPF'},
      {name: 'wariantPT', url: 'wariantPT'},
      {name: 'wariantX', url: 'wariantX'}
    ];

    /*
     Wylosowany wariant
     */
    $scope.myVariant = {name: '', url: ''};
    /*
     Losowanie wariantu
     */
    $scope.variantDraw = function () {
        $scope.myrandom = Math.floor(Math.random() * 5);
        $scope.variant = {
          name: $scope.links[$scope.myrandom].name,
          url: $scope.links[$scope.myrandom].url
        };
      $scope.myVariant = $scope.variant;
    };

    /*
     Pobieranie grup z devplanu
     */
    $http.get('http://devplan.uek.krakow.pl/api/groups')
      .success(function (data) {
        $scope.groups = data;
        console.log('Group was downloaded.', data);
      }).error(function () {
        alert('Nie moge pobrać grup');
      });

    /*
     Funkcja pobierajaca plan grupy przy uzyciu id
     */
    $scope.getTimetable = function (id) {
      $http.get('http://devplan.uek.krakow.pl/api/timetables/g' + id)
        .success(function (data) {
          $scope.timetable = data.activities;
          console.log('Timetable was downloaded', data);
          validationServie.validateAndSendGroup($scope.groupId, $scope.timetable, $http, $log);
        }).error(function () {
          alert('Problem z pobraniem listy zajec.');
        });
    };

    /*
     Sprawdzanie czy wpisana grupa znajduje sie w grupach pobranych prze $scope.grtTimetable
     */
    $scope.validateGroupName = function () {
      for (var i = 0; i < $scope.groups.length; i++) {
        if ($scope.groups[i].name.toLowerCase() === $scope.query.groupName.toLowerCase()) {
          console.log($scope.groups[i].id);
          $scope.groupId = $scope.groups[i].id;
          $scope.getTimetable($scope.groups[i].id);
          $scope.disabled = false;
          break;
        }
        $scope.disabled = true;
      }
    };

    /*
     Funkcja losująca wariant i rozpoczynająca ankiete
     */
    $scope.startSurvey = function () {
      $scope.variantDraw();
      if($scope.groupId.length === 0) {
        $scope.groupId = mutuService.getGroupId();
      }
      if (mutuService.getType() === $scope.myVariant.name) {
        $scope.startSurvey();
      }
      mutuService.pushTypeAndGroup($scope.myVariant.name, $scope.groupId);
      $location.path('/' + $scope.myVariant.url);
    };


  }])
;
