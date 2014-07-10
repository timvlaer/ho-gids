'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:KaartCtrl
 * @description
 * # KaartCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('KaartCtrl', function ($scope) {

	angular.extend($scope, {
	    center: {
	        lat: 51.242406,
	        lng: 4.937968,
	        zoom: 14
	    }
	});

  });
