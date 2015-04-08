'use strict';

angular.module('myMutuApp')
  .service('mutuService', function () {
    var opinion = {
      type:"",
      lecture:"",
      firstOpinion:"",
      secondOpinion:""
    };
    var lectures = [];

    return {
      getOpinions: function () {
        return opinion;
      },

      getLecture: function () {
        return lectures;
      },

      pushTypeAndLecture: function (type, lecture) {
        opinion.type = type;
        lectures = lecture;
      },

      pushOpinion: function (lecture, myOpinion1, myOpinion2) {
        opinion.lecture = lecture;
        opinion.firstOpinion = myOpinion1;
        opinion.secondOpinion = myOpinion2;
      }

    };
   // AngularJS will instantiate a singleton by calling "new" on this function
  });
