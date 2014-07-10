'use strict';

/**
 * @ngdoc overview
 * @name hoGidsApp
 * @description
 * # hoGidsApp
 *
 * Main module of the application.
 */
angular
  .module('hoGidsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'wu.masonry',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/programma', {
        templateUrl: 'views/programma.html',
        controller: 'ProgrammaCtrl'
      })
      .when('/kaart', {
        templateUrl: 'views/kaart.html',
        controller: 'KaartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
