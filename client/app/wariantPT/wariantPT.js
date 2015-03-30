'use strict';

angular.module('myMutuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wariantPT', {
        templateUrl: 'app/wariantPT/wariantPT.html',
        controller: 'VariantsCtrlCtrl'
      });
  });
