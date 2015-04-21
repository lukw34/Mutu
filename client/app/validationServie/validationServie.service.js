'use strict';

angular.module('myMutuApp')
  .service('validationServie', function () {

    //Pusty obiekt zawierajacy dane ktore powinny zostac przezlłane do bazy danych
    var groupLectures = {
      _id: '',
      lectures: []
    };

    var duplicatedElement;

    var lecture;

    var validate = function (timetable) {

      //konstruktor do obiektu zawierajacego zajecia i ich typ
      function Lecture(name, categoryName) {
        this.name = name;
        this.categoryName = categoryName;
      }

      var validateCategory = function (candidate) {
        return candidate.categoryName === 'wykład' || candidate.categoryName === 'ćwiczenia';
      };

      //funkcja sprawdzajaca czy wystepuja duplikaty
      var checkingDuplicate = function (element, candidate) {
        return element.name === candidate.name && element.categoryName ===candidate.categoryName;
      };


      for (var i = 0; i < timetable.length; i++) {
        duplicatedElement = false;
        lecture = new Lecture(timetable[i].name, timetable[i].category_name);

        for (var j = 0; j < groupLectures.lectures.length; j++) {
          if (checkingDuplicate(groupLectures.lectures[j], lecture)) {
            duplicatedElement = true;
          }
        }

        if (!duplicatedElement && validateCategory(lecture)) {
          groupLectures.lectures.push(lecture);
        }

      }
      /*
       Dodanie lektoratów z  języka nagielskiego
       */
      var angLecture = {
        name: 'Język Angielski',
        categoryName: 'lektorat'
      };
      groupLectures.lectures.push(angLecture);

    };

    var sendData = function($http, $log){

       //wysyłanie danych do bazy dany
      $http.post('api/lectures', angular.copy(groupLectures))
        .success(function (data) {
          $log.log(data);
          console.log('Lectures was send: ', data);
        }).error(function () {
          console.log('Can not send lectures or they are in DB');
        });
    };

    return {
      validateAndSendGroup: function (groupId, timetable, $http, $log) {
        groupLectures._id = groupId;
        validate(timetable);
        sendData($http, $log);
    }

    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
