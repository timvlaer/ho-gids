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
    'leaflet-directive',
    'snap'
  ])
  .config(function ($routeProvider, snapRemoteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/informatie', {
        templateUrl: 'views/informatie.html',
        controller: 'InformatieCtrl'
      })
      .when('/programma', {
        templateUrl: 'views/programma.html',
        controller: 'ProgrammaCtrl'
      })
      .when('/kaart', {
        templateUrl: 'views/kaart.html',
        controller: 'KaartCtrl'
      })
      .when('/kaart/:highlightPlaats', {
        templateUrl: 'views/kaart.html',
        controller: 'KaartCtrl'
      })
      .when('/nieuwsstroom', {
        templateUrl: 'views/nieuwsstroom.html',
        controller: 'NieuwsstroomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


      snapRemoteProvider.globalOptions = {
        disable: 'right',
        hyperextensible: false
      }
  })
  .run(function() {
    if(navigator.splashscreen) {
      navigator.splashscreen.hide();
    }
  });
