'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:InformatieCtrl
 * @description
 * # InformatieCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('InformatieCtrl', function ($scope, $location) {

    $scope.showOnMap = function(name) {
        $location.path('/kaart/' + name);
    };

  });
