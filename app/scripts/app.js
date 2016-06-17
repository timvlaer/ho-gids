'use strict';

function onDeviceReady() {
  if (parseFloat(window.device.version) === 7.0) {
    document.body.style.marginTop = "20px";
  }
}

document.addEventListener('deviceready', onDeviceReady, false);

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
    'snap',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, snapRemoteProvider, localStorageServiceProvider) {
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
      .when('/instellingen', {
        templateUrl: 'views/instellingen.html',
        controller: 'InstellingenCtrl'
      })
      .when('/over', {
        templateUrl: 'views/over.html',
        controller: 'OverCtrl'
      })
      .when('/kaart', {
        templateUrl: 'views/kaart.html',
        controller: 'KaartCtrl'
      })
      .when('/kaart/:highlightPlaats', {
        templateUrl: 'views/kaart.html',
        controller: 'KaartCtrl'
      })
      .when('/leefregels', {
        templateUrl: 'views/leefregels.html',
        controller: 'LeefregelsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


    snapRemoteProvider.globalOptions = {
      hyperextensible: false,
      touchToDrag: false,
      tapToClose: true
    };

    localStorageServiceProvider
      .setPrefix('hogids')
      .setStorageCookie(0, '/');
  })
  .run(function() {
    if(navigator.splashscreen) {
      navigator.splashscreen.hide();
    }
  });
