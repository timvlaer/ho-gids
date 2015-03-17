'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('MenuCtrl', function ($scope, $location) {
    
  	$scope.isActive = function (viewLocation) {   		
        return $location.path().indexOf(viewLocation) === 0;
    };

});
