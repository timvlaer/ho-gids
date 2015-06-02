'use strict';

angular.module('hoGidsApp')
  .controller('SettingsCtrl', function ($scope, $rootScope, localStorageService) {
    $scope.gouw = localStorageService.get('gouw');

    $scope.gouwen = [
      {naam: 'Noordzee', grond: 'K1'},
      {naam: 'Zuid-West-Vlaanderen', grond: 'K1'},
      {naam: 'Gent', grond: 'K1'},
      {naam: 'Land van Egmont', grond: 'K1'},
      {naam: 'Waas', grond: 'K1'},
      {naam: 'Antwerpen', grond: 'K1'},
      {naam: 'Heide', grond: 'K1'},
      {naam: 'Opsinjoor', grond: 'K1'},
      {naam: 'Kempen', grond: ''},
      {naam: 'Webra (West-Brabant)', grond: 'K1'},
      {naam: 'Oost-Brabant', grond: 'K1'},
      {naam: 'Limburg', grond: 'K1'}
    ];

    $scope.setGouw = function(gouw) {
      console.debug("Zet gouw op: " + gouw);
      localStorageService.set('gouw', gouw);
    }


  });
