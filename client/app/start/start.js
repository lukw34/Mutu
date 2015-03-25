'use strict';

angular.module('myMutuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/start', {
        templateUrl: 'app/start/start.html',
        controller: 'AdminCtrl'
      });
  });
