'use strict';

angular.module('myMutuApp')
  .controller('mutuCtrl', function ($scope, $http, $log) {
    $scope.opinion = {
      subject: "",
      userOpinion: "",
      notUserOpinion:""
    };
  });
