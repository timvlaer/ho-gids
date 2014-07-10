'use strict';

/**
 * @ngdoc function
 * @name hoGidsApp.controller:KaartCtrl
 * @description
 * # KaartCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('KaartCtrl', function ($scope, $http) {

	angular.extend($scope, {
	    center: {
	        lat: 51.242406,
	        lng: 4.937968,
	        zoom: 14
	    }
	});

	var styles = {
		'pavilioen': {
			fillColor: 'yellow',
			fillOpacity: 0.7,
            weight: 0          
		},
		'loods': {
			fillColor: 'yellow',
			fillOpacity: 0.7,
            weight: 0          
		},
		'kampeergrond': {
			fillColor: '#c40000',
			fillOpacity: 0.7,
            weight: 0          
		},
		'weg-hard': {
            weight: 4,
            opacity: 1,
            color: 'white'
        },
        'weg-halfhard': {
            weight: 4,
            opacity: 1,
            dashArray: '5',
            color: 'white'
        },
		'weg-zand': {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3'
        },
        'default': {
			fillColor: 'black',
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
		}
	};

	function style(feature) {
		console.log(feature.properties.style)
		var style  = styles[feature.properties.style];
		return style || styles.default;
    };

	$http.get("data/map.geojson")
		.success(function(data, status) {
			angular.extend($scope, {
				geojson: {
					data: data,
					style: style
				}
			});
		});

  });
