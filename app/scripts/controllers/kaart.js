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
	    },
	    events: {
            map: {
                enable: ['locationfound', 'locationerror'],
                logic: 'emit'
            }
        }
	});

	var styles = {
		'pavilioen': {
			fillColor: '#A64E1B',
			fillOpacity: 0.7,
            stroke: false         
		},
		'loods': {
			fillColor: '#733613',
			fillOpacity: 0.7,
            stroke: false        
		},
		'kampeergrond': {
			fillColor: '#D9A443',
			fillOpacity: 0.7,
            stroke: false        
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
        'faciliteit': {
        	stroke: false,
		    radius: 4,
		    fillColor: '#04C4D9',
		    fillOpacity: 1
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

    var icons = {
    	'ehboIcon': L.icon({
			iconUrl: 'images/kaart/ehbo.png',
			iconSize: [16, 16],
			iconAnchor: [8, 8],
			popupAnchor: [0, -16]
		}),
		'infoIcon': L.icon({
			iconUrl: 'images/kaart/info.png',
			iconSize: [16, 16],
			iconAnchor: [8, 8],
			popupAnchor: [0, -16]
		}),
		'sisIcon': L.icon({
			iconUrl: 'images/kaart/sis.png',
			iconSize: [16, 16],
			iconAnchor: [8, 8],
			popupAnchor: [0, -16]
		})
    };


    function pointToLayer(feature, latlng) {
    	if(feature.properties.name) {
    		switch (feature.properties.name.toLowerCase()) {
			    case "ehbo": return L.marker(latlng, {icon: icons.ehboIcon});			        
			    case "infopunt": return L.marker(latlng, {icon: icons.infoIcon});
			    case 'sis': return L.marker(latlng, {icon: icons.sisIcon});
			    //case 'onthaal': return L.marker(latlng, {icon: icons.onthaalIcon});
			}
    	}
        return L.circleMarker(latlng, {});
    };

    function filter(feature, layer) {
        return !(feature.properties.show_on_map === false);
    };				

	$http.get("data/map.geojson")
		.success(function(data, status) {
			angular.extend($scope, {
				geojson: {
					data: data,
					style: style,
					pointToLayer: pointToLayer,
					filter: filter
				}
			});
		});
	

  });
