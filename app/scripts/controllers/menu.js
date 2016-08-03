'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('MenuCtrl', function ($scope, $location, localStorageService) {

    var TWITTER_URL = "https://twitter.com/ScoutsGidsenVL",
      FB_URL = "https://www.facebook.com/scoutsengidsenvlaanderen/",
      INSTAGRAM_URL = "https://www.instagram.com/scoutsgidsenvl/";

    $scope.gouw = localStorageService.get('gouw');

  	$scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) === 0;
    };

    $scope.go = function(location) {
      $location.path(location);
    };

    $scope.openInstagramPage = function() { window.open(INSTAGRAM_URL, "_system"); };
    $scope.openFacebookPage = function() { window.open(FB_URL, "_system"); };
    $scope.openTwitterPage = function() { window.open(TWITTER_URL, "_system"); };

});
