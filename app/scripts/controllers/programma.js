'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:ProgrammaCtrl
 * @description
 * # ProgrammaCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('ProgrammaCtrl', function ($scope, Programma) {
    
    console.log(Programma);
  	$scope.programma = Programma.programma;


  });
