'use strict';

var labelClassName = 'map-label';

var hogeRielenCenter = {
    lat: 51.24230669704754,
    lng: 4.936895370483398,
    zoom: 13
}
var hogeRielenBounds = {
    northEast: {
        lat: 51.250734,
        lng: 4.955134
    },
    southWest: {
        lat: 51.235000,
        lng: 4.9164500
    }
};

/**
 * @ngdoc function
 * @name hoGidsApp.controller:KaartCtrl
 * @description
 * # KaartCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('KaartCtrl', function ($scope, $http, leafletData) {

	angular.extend($scope, {
	    center: hogeRielenCenter,
	    maxbounds: hogeRielenBounds,
	    events: {
            map: {
                enable: ['layeradd', 'zoomend'],
                logic: 'emit'
            }
        }
	});

	var styles = {
		'podiumgrond': {
			fillColor: '#BF244E',
			fillOpacity: 1,
            stroke: false         
		},
		'pavilioen': {
			fillColor: '#A64E1B',
			fillOpacity: 1,
            stroke: false         
		},
		'loods': {
			fillColor: '#733613',
			fillOpacity: 1,
            stroke: false        
		},
		'kampeergrond': {
			fillColor: '#D9A443',
			fillOpacity: 1,
            stroke: false        
		},
		'vijver': {
			fillColor: '#04D9D9',
			fillOpacity: 1,
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

    var icons = {
    	'ehboIcon': L.icon({
			iconUrl: 'images/kaart/ehbo.png',
			iconSize: [16, 16]
		}),
		'infoIcon': L.icon({
			iconUrl: 'images/kaart/info.png',
			iconSize: [16, 16]
		}),
		'sisIcon': L.icon({
			iconUrl: 'images/kaart/sis.png',
			iconSize: [16, 16]
		})
    };

	function style(feature) {
		var style  = styles[feature.properties.style];
		return style || styles.default;
    };

    function markerIcon(feature, latlng) {
    	if(feature.properties.name) {
    		switch (feature.properties.name.toLowerCase()) {
			    case "ehbo": return L.marker(latlng, {icon: icons.ehboIcon});			        
			    case "infopunt": return L.marker(latlng, {icon: icons.infoIcon});
			    case 'sis': return L.marker(latlng, {icon: icons.sisIcon});
			    //case 'onthaal': return L.marker(latlng, {icon: icons.onthaalIcon});
			}
    	}
        return L.circle(latlng, 7);
    };

    function filter(feature, layer) {
        return !(feature.properties.show_on_map === false);
    };			

    function addLabel(feature, layer) {
    	if(feature.properties.name && feature.geometry.type == 'Polygon') {
	    	var labelIcon = L.divIcon({
	    		className: labelClassName,
	    		html: feature.properties.name
	    	});
	    	var featurePolygon = L.polygon(layer._latlngs);
	    	leafletData.getMap().then(function(map) {
                L.marker(featurePolygon.getBounds().getCenter(), {icon: labelIcon}).addTo(map); 
            });
    	}
    }	

	$http.get("data/map.geojson")
		.success(function(data, status) {
			angular.extend($scope, {
				geojson: {
					data: data,
					style: style,
					pointToLayer: markerIcon,
					filter: filter,
					onEachFeature: addLabel
				}
			});
		});

	function correctElementSizeWithZoom(){
        leafletData.getMap().then(function(map) {
        	var zoomLevel = map.getZoom();

        	//resize labels        	
        	angular.element('.' + labelClassName).css('fontSize', (zoomLevel-4) + 'px');
        	
        	//resize icons
    		var newIconSize = (zoomLevel <= 15) ? (16-((18-zoomLevel)*2)) : 16;
    		angular.element('.leaflet-marker-icon').css('width', newIconSize + 'px').css('height', newIconSize + 'px');        	
        });
    }	

	$scope.$on('leafletDirectiveMap.layeradd', correctElementSizeWithZoom);
	$scope.$on('leafletDirectiveMap.zoomend', correctElementSizeWithZoom);
	

  });
