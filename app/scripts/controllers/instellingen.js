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

    $scope.enableLocation = function(enable) {
      $scope.locationEnabled = enable;
      localStorageService.set('locationEnabled', enable);
      return enable;
    };

    $scope.locationEnabled = localStorageService.get('locationEnabled') === false ? false : $scope.enableLocation(true);



  });
