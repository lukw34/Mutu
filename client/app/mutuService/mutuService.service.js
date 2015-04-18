'use strict';
/*
MutuService connect variantsCtrl and main.controller
 */
angular.module('myMutuApp')
  .service('mutuService', function () {
    var opinion = {
      type:"",
      lecture:"",
      firstOpinion:"",
      secondOpinion:""
    };

    var groupId;

    return {

      getType: function() {
        return opinion.type;
      },

      getOpinions: function () {
        return opinion;
      },

      getGroupId: function () {
        return groupId;
      },

      pushTypeAndGroup: function (type, lecture) {
        opinion.type = type;
        groupId = lecture;
      },

      pushOpinion: function (lecture, myOpinion1, myOpinion2) {
        opinion.lecture = lecture;
        opinion.firstOpinion = myOpinion1;
        opinion.secondOpinion = myOpinion2;
      }

    };
   // AngularJS will instantiate a singleton by calling "new" on this function
  });
