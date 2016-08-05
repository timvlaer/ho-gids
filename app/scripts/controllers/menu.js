'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('MenuCtrl', function ($scope, $location, localStorageService, snapRemote) {

    var TWITTER_URL = "https://twitter.com/hashtag/HO16",
      FB_URL = "https://www.facebook.com/hashtag/HO16",
      INSTAGRAM_URL = "https://www.instagram.com/explore/tags/HO16/";

    $scope.gouw = localStorageService.get('gouw');

  	$scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) === 0;
    };

    $scope.go = function(location) {
      snapRemote.close();
      $location.path(location);
    };

    $scope.openInstagramPage = function() { window.open(INSTAGRAM_URL, "_system"); };
    $scope.openFacebookPage = function() { window.open(FB_URL, "_system"); };
    $scope.openTwitterPage = function() { window.open(TWITTER_URL, "_system"); };

});
