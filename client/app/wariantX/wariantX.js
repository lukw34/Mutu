'use strict';

angular.module('myMutuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wariantX', {
        templateUrl: 'app/wariantX/wariantX.html',
        controller: 'VariantsCtrlCtrl'
      });
  });
