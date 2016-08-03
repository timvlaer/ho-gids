'use strict';

angular.module('hoGidsApp')
  .controller('OverCtrl', function ($scope) {

    var GITHUB_URL = 'https://github.com/timvlaer/ho-gids';

    $scope.showGithubPage = function() {
      if (typeof navigator !== "undefined" && navigator.app) {
        // Mobile device.
        navigator.app.loadUrl(GITHUB_URL, {openExternal: true});
      } else {
        // Possible web browser
        window.open(GITHUB_URL, "_blank");
      }
    }

  });
