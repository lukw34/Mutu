'use strict';

angular.module('myMutuApp')
  .controller('MutuCtrl', ['$log', '$http', '$scope', '$location', 'mutuService', function ($log, $http, $scope, $location, mutuService) {
    /*
     zapytanie do bazy danych
     */
    $scope.groupLectures;

    $scope.query = {
      groupName: ''
    };
    /*
     Przechowywanie id grupy {String}
     */
    $scope.groupId;
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
      $scope.myrandom = Math.floor(Math.random() * 4);
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
        $scope.groups =data;
        console.log('Group was downloaded.', data);
      }).error(function () {
        alert('Check your internet connection');
      });

    /*
    Funkcja wysyłajaca id grupy oraz wyodrebnione z $scope.timetable  zajecia z ich typami do bazy danych
     */

    /*
    TODO: Rozwązac problem zwiazany z przypisywaniem jednego i tego samego do tablicy lectures
     */

    $scope.sendData = function () {

      //Pusty obiekt zawierajacy dane ktore powinny zostac przezlłane do bazy danych
      var groupLectures = {
        groupId: '',
        lectures: []
        };
      //Obiekt zawierajacy zajecia i ich typ
      var lecture = {
          name:'',
          categoryName:""
      };

      for (var i = 0; i < $scope.timetable.length; i++) {
        lecture.name = $scope.timetable[i].name;
        lecture.categoryName = $scope.timetable[i].category_name
        groupLectures.lectures.push(lecture);
      }


      groupLectures.groupId =$scope.groupId;
      $scope.groupLectures = groupLectures;
       //wysyłanie danych do bazy dany
      $http.post('api/lectures', angular.copy(groupLectures))
        .success(function (data) {
          $log.log(data);
          console.log('Lectures was send: ', data);
        }).error(function () {
          alert('Can not send lectures !!');
        });
    };

    /*
    Funkcja pobierajaca plan grupy przy uzyciu id
     */
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

    /*
    Sprawdzanie czy wpisana grupa znajduje sie w grupach pobranych prze $scope.grtTimetable
     */
    $scope.validateGroupName = function () {
      for (var i = 0; i < $scope.groups.length; i++) {
        if ($scope.groups[i].name.toLowerCase() == $scope.query.groupName.toLowerCase()) {
          console.log($scope.groups[i].id);
          $scope.groupId = $scope.groups[i].id;
          $scope.getTimetable($scope.groups[i].id);
          $scope.disabled = false;
        }
      }
    };

    /*
    Funkcja losująca wariant i rozpoczynająca ankiete
     */
    $scope.startSurvey = function () {
      $scope.variantDraw();
      mutuService.pushTypeAndLecture($scope.myVariant.name, $scope.lecture);
      $location.path($scope.myVariant.url);
    };

  }])
;
