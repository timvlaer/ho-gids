'use strict';

angular.module('hoGidsApp')
  .controller('InstellingenCtrl', function ($scope, $rootScope, $location, localStorageService, Programma) {
    $scope.gouw = localStorageService.get('gouw');

    $scope.gouwen = Programma.gouwen;

    $scope.setGouw = function(gouw) {
      console.debug('Zet gouw op: ' + gouw);
      localStorageService.set('gouw', gouw);
    };

    $scope.showOnMap = function(name) {
      $location.path('/kaart/' + name);
    };


  });
