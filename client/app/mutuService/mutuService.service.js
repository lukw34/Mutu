'use strict';

angular.module('myMutuApp')
  .service('mutuService', function () {
    var kindOfOpinion;
    return {
      getKindOfOpinion: function () {
        return kindOfOpinion
      },
      pushKindOfOpinion: function (opinionName) {
        kindOfOpinion = opinionName;
      }
    };
   // AngularJS will instantiate a singleton by calling "new" on this function
  });
