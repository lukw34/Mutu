'use strict';

angular.module('myMutuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wariantNT', {
        templateUrl: 'app/wariantNT/wariantNT.html',
        controller: 'VariantsCtrlCtrl'
      });
  });
