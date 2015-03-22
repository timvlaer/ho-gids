'use strict';

var labelClassName = 'map-label';
var iconClassName = 'map-icon';

var hogeRielenCenter =  L.latLng(51.24230669704754, 4.936895370483398);
var hogeRielenBounds = L.latLngBounds(L.latLng(51.2300, 4.90900), L.latLng(51.2530, 4.9570));

var DEFAULT_ZOOM = 14;

var styles = {
    'podiumgrond': {
        fillColor: '#c4d545',
        fillOpacity: 1,
        stroke: false         
    },
    'pavilioen': {
        fillColor: '#0e7594',
        fillOpacity: 1,
        stroke: false         
    },
    'loods': {
        fillColor: '#417493',
        fillOpacity: 1,
        stroke: false        
    },
    'kampeergrond': {
        fillColor: '#f38230',
        fillOpacity: 1,
        stroke: false,
        lineJoin: 'round'        
    },
    'vijver': {
        fillColor: '#04D9D9',
        fillOpacity: 1,
        stroke: false           
    },
    'bos': {
        fillColor: '#07E668',
        fillOpacity: 1,
        stroke: false           
    },
    'weg-hard': {
        weight: 4,
        opacity: 1,
        color: 'white',
        lineCap: 'square'
    },
    'weg-halfhard': {
        weight: 4,
        opacity: 1,
        color: 'white',
        lineCap: 'square'
    },
    'weg-zand': {
        weight: 1,
        opacity: 1,
        color: '#417493',
        dashArray: '5'
    },
    'faciliteit': {
        stroke: false,
        radius: 4,
        fillColor: '#0e7594',
        fillOpacity: 1
    },
    'border': {
        fillColor: '#c1d7e4',
        weight: 5,
        color: '#0e7594',
        fillOpacity: 1,
        opacity: 1
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
        iconSize: [16, 16],
        className: iconClassName
    }),
    'infoIcon': L.icon({
        iconUrl: 'images/kaart/info.png',
        iconSize: [16, 16],
        className: iconClassName
    }),
    'sisIcon': L.icon({
        iconUrl: 'images/kaart/sis.png',
        iconSize: [16, 16],
        className: iconClassName
    }),
    'onthaalIcon': L.icon({
        iconUrl: 'images/kaart/onthaal.png',
        iconSize: [16, 16],
        className: iconClassName
    }),        
    'locationIcon': L.icon({
        iconUrl: 'images/kaart/marker-location.png',
        iconRetinaUrl: 'images/kaart/marker-location-2x.png',
        shadowUrl: 'images/kaart/marker-shadow.png',
        shadowRetinaUrl: 'images/kaart/marker-shadow.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowSize:  [41, 41]
    })
};

/**
 * @ngdoc function
 * @name hoGidsApp.controller:KaartCtrl
 * @description
 * # KaartCtrl
 * Controller of the hoGidsApp
 */
angular.module('hoGidsApp')
  .controller('KaartCtrl', function ($scope, $http, leafletData, $routeParams, $log) {

    var preciseLocationPointer, radiusPointer; 
    var featureHighlightPointer;    

	function style(feature) {
		return styles[feature.properties.style] || styles.default;
    };

    function markerIcon(feature, latlng) {
    	if(feature.properties.name) {
    		switch (feature.properties.name.toLowerCase()) {
			    case "ehbo": return L.marker(latlng, {icon: icons.ehboIcon});			        
			    case "infopunt": return L.marker(latlng, {icon: icons.infoIcon});
			    case 'sis': return L.marker(latlng, {icon: icons.sisIcon});
			    case 'onthaal': return L.marker(latlng, {icon: icons.onthaalIcon});
			}
    	}
        return L.circle(latlng, 7);
    };

    function filter(feature, layer) {
        return !(feature.properties.show_on_map === false);
    };	

    function onEachFeature(feature, layer) {
    	addLabel(feature, layer);
    	checkIfUserSelectedThisFeature(feature, layer);
    }		

    function addLabel(feature, layer) {
    	if(feature.properties.name && feature.geometry.type == 'Polygon') {
	    	var labelIcon = L.divIcon({
	    		className: labelClassName,
	    		html: feature.properties.name
	    	});
	    	var featurePolygon = L.polygon(layer._latlngs);	    	
            L.marker(featurePolygon.getBounds().getCenter(), {icon: labelIcon}).addTo(map);             
    	}
    };

    function checkIfUserSelectedThisFeature(feature, layer) {
    	if(featureNameMatchesParam(feature)) {    	
    		var featurePolygon = L.polygon(layer._latlngs);
    		
			var highlightCoordinates = featurePolygon.getBounds().getCenter();
			featureHighlightPointer = L.marker(highlightCoordinates).addTo(map);
    	}
    };

    function featureNameMatchesParam(feature) {    	
    	if($routeParams.highlightPlaats) {
    		var featureName = feature.properties.name;
    		var featureAlias = feature.properties.alias;
    		var selectedPlace = $routeParams.highlightPlaats.toLowerCase();    	
    		return (featureName && featureName.toLowerCase() == selectedPlace) 
    				|| (featureAlias && featureAlias.toLowerCase().indexOf(selectedPlace) >= 0)
    	} else {
    		return false;
    	}
    }

    function correctElementSizeWithZoom(){
        var zoomLevel = map.getZoom();

        //resize labels
        var zoomLevelFontSizeMapping = {'14': 6, '15': 7, '16': 10, '17': 12, '18': 16};
        angular.element('.' + labelClassName).css('fontSize', zoomLevelFontSizeMapping[zoomLevel] + 'px');
        
        //resize icons
        var zoomLevelIconSizeMapping = {'14': 6, '15': 8, '16': 16, '17': 24, '18': 32};
        var newIconSize = zoomLevelIconSizeMapping[zoomLevel];
        var newMargin = -1 * newIconSize / 2;
        angular.element('.' + iconClassName).css('width', newIconSize + 'px').css('height', newIconSize + 'px')
            .css('margin-left', newMargin + 'px').css('margin-top', newMargin + 'px');
    };

    function showInterestingViewport() {
        //FIXME if a feature is highlighted, this method is triggered first and your current location doesn't get in viewport.
        if(preciseLocationPointer && featureHighlightPointer) {
            map.panInsideBounds(L.latLngBounds(                
                featureHighlightPointer.getLatLng()),
                preciseLocationPointer.getLatLng(), 
                {'animate': true, 'duration': 1}
            );
        } else if(preciseLocationPointer || featureHighlightPointer) {
            map.setZoom(DEFAULT_ZOOM+2, {'animate': false});
            correctElementSizeWithZoom();
            if(preciseLocationPointer) {
                map.panTo(preciseLocationPointer.getLatLng(), {'animate': true, 'duration': 1});
            } else if (featureHighlightPointer) {
                map.panTo(featureHighlightPointer.getLatLng(), {'animate': true, 'duration': 1});
            }
        }
    }



    function onAccuratePositionProgress (e) {
        onAccuratePositionFound(e);
    }
    
    function onAccuratePositionFound (event) {
        console.log(event);
        
        if(hogeRielenBounds.contains(event.latlng)) {
            var radius = event.accuracy/2;
            if(!preciseLocationPointer || !radiusPointer) {
                preciseLocationPointer = L.marker(event.latlng, {icon: icons.locationIcon}).addTo(map);
                radiusPointer = L.circle(event.latlng, radius, {fillOpacity: 0.3, fillColor: '#1d9c5a', stroke: false}).addTo(map);
                showInterestingViewport();
            } else {
               preciseLocationPointer.setLatLng(event.latlng);
               radiusPointer.setLatLng(event.latlng);
               radiusPointer.setRadius(radius); 
            }
        } else {
            preciseLocationPointer = undefined;
            radiusPointer = undefined;
        }
    }

    function onAccuratePositionError (e) {
        preciseLocationPointer = undefined;
        radiusPointer = undefined;
        //TODO remove marker from map
    }

    function doGeolocation() {
        //TODO: cache location and poll only every minute or so to save battery.
        //TOOD: if location is outside HR bounds, disable location polling for 10min or so
        map.on('accuratepositionprogress', onAccuratePositionProgress);
        map.on('accuratepositionfound', onAccuratePositionFound);
        map.on('accuratepositionerror', onAccuratePositionError);

        map.findAccuratePosition({
            maxWait: 8000, 
            desiredAccuracy: 50 
        });
    }

    //TODO create map as global object: keep state + fix bug 'Map container is already initialized.'
    var map = L.map('map', {
        center: hogeRielenCenter,
        zoom: DEFAULT_ZOOM,
        minZoom: 14,
        maxBounds: hogeRielenBounds,
    });

    map.whenReady(function() {       
        map.on('layeradd', correctElementSizeWithZoom);
        map.on('zoomend', correctElementSizeWithZoom);
    });
    
    
    //var tileUrl_default = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'    
    //var tileUrl_tim = '/images/render/{z}/{x}/{y}.png'
    //var tileUrl_leeg = '/images/kaart/leeg.png'    

    var tileUrl = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    L.tileLayer(tileUrl, { attribution: '' }).addTo(map);


    L.Icon.Default.imagePath = 'images/kaart';

    $http.get('data/map.geojson')
        .success(function(data, status) {
            L.geoJson(data, {
                style: style,
                pointToLayer: markerIcon,
                filter: filter,
                onEachFeature: onEachFeature
            }).addTo(map);

            doGeolocation();

            showInterestingViewport();
        });

  });
