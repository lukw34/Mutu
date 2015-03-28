'use strict';

angular.module('myMutuApp')
  .controller('MutuCtrl', function ($scope, $location) {
  $scope.query = { //zapytanie do bazy danych
    groupName: ""
   };
    $scope.groups = [];
    $scope.startSurvey = function () {
      $scope.variant();
      $location.path($scope.myVariant.url);
    };

    $scope.links = [
      {name: 'wariantNF', url: 'wariantNF' },
      {name: 'wariantNT', url: 'wariantNT' },
      {name: 'wariantPF', url: 'wariantPF' },
      {name: 'wariantPT', url: 'wariantPT' },
      {name: 'wariantX', url: 'wariantX' }
    ];

    $scope.myVariant = {name: '', url:''};

    $scope.variant = function () {
      $scope.myrandom = Math.round(Math.random()*4);
      $scope.variant = {
        name: $scope.links[$scope.myrandom].name,
        url: $scope.links[$scope.myrandom].url
      };
      $scope.myVariant = $scope.variant;
      };


    //$http.get('http://devplan.uek.krakow.pl/api/groups')
    //  .success(function (data) {
    //    $scope.groups = data;
    //    console.log('Grupy zostały pobrane.', data);
    //  }).error(function () {
    //    alert('Wystąpił błąd podczas pobierania danych, sprawdz połączenie internetowe i odśwież strone.');
    //  });
    ///**
    // *
    // * @param id
    // */
    //$scope.getTimetableId = function (id) {
    //  $http.post('/api/timetables', {id: id})
    //    .success(function (data) {
    //      $scope.timetable = data;
    //    }).error(function () {
    //      alert('Wystąpił błąd podczas zapytania, sprawdź połączenie internetowe i odśwież strone.');
    //    });
    //};
    //
    //$scope.validateGroupName = function () {
    //  $scope.timetable = null;
    //  $scope.disabled = true;
    //  for (var i = 0; i < $scope.groups.length; i++) {
    //    if ($scope.groups[i].name.toLowerCase() == $scope.query.name.toLowerCase() &&
    //      $scope.groups[i].name.toLowerCase().indexOf('krdzis') !== -1) {
    //      $scope.getTimetableId($scope.groups[i].id);
    //      $scope.disabled = false;
    //    }
    //  }
    //};

  });
