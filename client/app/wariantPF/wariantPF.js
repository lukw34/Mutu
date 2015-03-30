'use strict';

angular.module('myMutuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wariantPF', {
        templateUrl: 'app/wariantPF/wariantPF.html',
        controller: 'VariantsCtrlCtrl'
      });
  });
