'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:ProgrammaCtrl
 * @description
 * # ProgrammaCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
    .controller('ProgrammaCtrl', function ($scope, $location, Programma, localStorageService) {
        $scope.programma = Programma.programma;

        $scope.gouw = localStorageService.get('gouw');

        $scope.toonOpKaart = function (item) {
            if (item.plaats) {
                item.selected = true;
                if (item.plaats.toLowerCase().indexOf('gouw') >= 0) {
                    if($scope.gouw) {
                        $location.path('/kaart/' + $scope.gouw.grond);
                    } else {
                        //TODO toon melding 'je stelde geen gouw in' + ga naar instellingen om je gouw in te stellen?
                    }
                } else {
                    $location.path('/kaart/' + item.plaats);
                }
            }
        };

    });
