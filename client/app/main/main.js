'use strict';

angular.module('myMutuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MutuCtrl'
      });
  });
