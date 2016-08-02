'use strict';

angular.module('hoGidsApp')
  .controller('OverCtrl', function ($scope) {

    var GITHUB_URL = 'https://github.com/timvlaer/ho-gids';

    $scope.showGithubPage = function() {
      window.open(GITHUB_URL, '_system');
    }

  });
