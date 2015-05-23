'use strict';

angular.module('myMutuApp')
  .controller('AdminCtrl', function ($http, $scope) {
    $scope.try = false;
    $scope.access= false;
    $scope.opinion = {
      lecture:'',
      firstOpinion:{
        txt:'',
        bool:false
      },
      secondOpinion:{
        txt:'',
        bool:true
      },
      opinionKind:''

    };
    $scope.wariantPT = [];
    $scope.wariantPF = [];
    $scope.wariantNF = [];
    $scope.wariantNT = [];
    $scope.wariantX = [];
    $scope.opinions = [];
    $scope.opinionsToShow = $scope.opinions;
    $scope.password='';
    $scope.allOpinions =[];


    $scope.filtrData = function(opinions) {
      console.log(opinions);
      for (var element = 0; element < opinions.length; element++) {
        $scope.opinion.lecture = opinions[element].lecture;
        $scope.opinion.firstOpinion.txt = opinions[element].firstOpinion;
        $scope.opinion.secondOpinion.txt = opinions[element].secondOpinion;
        var type = opinions[element].type;
        if (type === 'wariantPT') {
          $scope.opinion.firstOpinion.bool = true;
          $scope.opinion.secondOpinion.bool = false;
          $scope.opinion.opinionKind = "pozytywna";
          $scope.wariantPT.push($scope.opinion);
        }

        if (type === 'wariantPF') {
          $scope.opinion.firstOpinion.bool = false;
          $scope.opinion.secondOpinion.bool = true;
          $scope.opinion.opinionKind = "pozytywna";
          $scope.wariantPF.push($scope.opinion);
        }

        if (type === 'wariantNT') {
          $scope.opinion.firstOpinion.bool = true;
          $scope.opinion.secondOpinion.bool = false;
          $scope.opinion.opinionKind = "negatywna";
          $scope.wariantNT.push($scope.opinion);
        }

        if (type === 'wariantNF') {
          $scope.opinion.firstOpinion.bool = false;
          $scope.opinion.secondOpinion.bool = true;
          $scope.opinion.opinionKind = "negatywna";
          $scope.wariantNF.push($scope.opinion);
        }

        if (type === 'wariantX') {
          $scope.opinion.firstOpinion.bool = false;
          $scope.opinion.secondOpinion.bool = false;
          $scope.opinion.opinionKind = "zmyślona";
          $scope.wariantX.push($scope.opinion);
        }
        $scope.allOpinions.push($scope.opinion);

        $scope.opinion = {
          lecture: '',
          firstOpinion: {
            txt: '',
            bool: ''
          },
          secondOpinion: {
            txt: '',
            bool: ''
          },
          opinionKind: ''

        }
      }
    };

    $http.get('api/opinionss')
      .success(function(data) {
        $scope.opinions = data;
        console.log($scope.opinions);
        $scope.filtrData(data);
      })
      .error(function() {
        alert('Problem z pobraniem opini')
      });

    $scope.getAccess = function() {
      if($scope.password === 'mutu') {
        $scope.access = true;
        return;
      }
      $scope.try =true;
      $scope.password='';
    };

  });
