'use strict';

angular.module('myMutuApp')
  .controller('MutuCtrl', ['$log', '$http', '$scope', '$location', 'mutuService', function ($log, $http, $scope, $location, mutuService) {
    $scope.query = { //zapytanie do bazy danych
      groupName: ''
    };
    $scope.groupLectures = {};
    $scope.groupId;
    $scope.groups = [];
    $scope.disabled = true;
    $scope.timetable = [];
    $scope.lecture = {};
    $scope.lectures = [];
    $scope.links = [
      {name: 'wariantNF', url: 'wariantNF'},
      {name: 'wariantNT', url: 'wariantNT'},
      {name: 'wariantPF', url: 'wariantPF'},
      {name: 'wariantPT', url: 'wariantPT'},
      {name: 'wariantX', url: 'wariantX'}
    ];

    $scope.myVariant = {name: '', url: ''};

    $scope.variantDraw = function () {
      $scope.myrandom = Math.floor(Math.random() * 4);
      $scope.variant = {
        name: $scope.links[$scope.myrandom].name,
        url: $scope.links[$scope.myrandom].url
      };
      $scope.myVariant = $scope.variant;
    };





    $http.get('http://devplan.uek.krakow.pl/api/groups')
      .success(function (data) {
        $scope.groups = data;
        console.log('Grupy zostały pobrane.', data);
      }).error(function () {
        alert('Error');
      });

    $scope.sendData = function () {

      for (var i = 0; i < $scope.timetable.length; i++) {
        $scope.lecture = {
          name: $scope.timetable[i].name,
          categoryName: $scope.timetable[i].category_name
        };
        $scope.lectures.push($scope.lecture);
      }

      $scope.groupLectures = {
        groupId: $scope.groupId,
        lecture: $scope.lectures
      };

      $http.post('api/lectures', angular.copy($scope.groupLectures))
        .success(function(data) {
          $log.log(data);
          console.log ('Przesłano zajęcia: ', data);
        }).error(function() {
          alert('Bład przy przesyłaniu zajęc');
        });
    };

    $scope.getTimetable = function (id) {
      $http.get('http://devplan.uek.krakow.pl/api/timetables/g' + id)
        .success(function (data) {
          $scope.timetable = data.activities;

          console.log('Podział został pobrany', data);
          $scope.sendData();
        }).error(function () {
          alert('Wystąpił błąd podczas zapytania, sprawdź połączenie internetowe i odśwież strone.');
        });
    };


    $scope.validateGroupName = function () {
      for (var i = 0; i < $scope.groups.length; i++) {
        if ($scope.groups[i].name.toLowerCase() == $scope.query.groupName.toLowerCase() ) {
          console.log($scope.groups[i].id);
          $scope.groupId = $scope.groups[i].id;
          $scope.getTimetable($scope.groups[i].id);
          $scope.disabled = false;
        }
      }
    };

    $scope.startSurvey = function () {
      $scope.variantDraw();
      mutuService.pushTypeAndLecture($scope.myVariant.name, $scope.lecture);
      $location.path($scope.myVariant.url);
    };

  }])
;
