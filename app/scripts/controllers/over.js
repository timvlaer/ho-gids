'use strict';

angular.module('hoGidsApp')
  .controller('OverCtrl', function ($scope) {

    var GITHUB_URL = 'https://github.com/timvlaer/ho-gids';

    $scope.showGithubPage = function() {
      if (typeof cordova !== 'undefined') {
        cordova.InAppBrowser.open(GITHUB_URL, '_system');
      } else {
        window.open(GITHUB_URL, '_system');
      }
    }

  });
