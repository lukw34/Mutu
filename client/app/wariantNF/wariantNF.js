'use strict';

angular.module('myMutuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/wariantNF', {
        templateUrl: 'app/wariantNF/wariantNF.html',
        controller: 'WariantNFCtrl'
      });
  });
