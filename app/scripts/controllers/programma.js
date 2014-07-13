'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:ProgrammaCtrl
 * @description
 * # ProgrammaCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('ProgrammaCtrl', function ($scope, $location, Programma) {    
  	$scope.programma = Programma.programma;

  	$scope.toonOpKaart = function(item) {
  		if(item.plaats) {
  			$location.path('/kaart/' + item.plaats);
  		}
  	}

  });
