'use strict';

angular.module('hoGidsApp')
  .controller('OverCtrl', function ($scope) {

    var GITHUB_URL = 'https://github.com/timvlaer/ho-gids';

    $scope.showGithubPage = function(e) {
      if (typeof cordova !== 'undefined') {
        cordova.InAppBrowser.open(GITHUB_URL, '_system', 'location=yes');
      } else {
        window.open(GITHUB_URL, '_system', 'location=yes');
      }
      e.preventDefault();
    }

  });
