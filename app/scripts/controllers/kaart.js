'use strict';

var labelClassName = 'map-label';
var iconClassName = 'map-icon';

var hogeRielenCenter =  L.latLng(51.24230669704754, 4.936895370483398);
var hogeRielenBounds = L.latLngBounds(L.latLng(51.2300, 4.90900), L.latLng(51.2530, 4.9570));

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
        iconUrl: 'images/kaart/locatie.png',
        iconSize: [16, 16],
        className: 'banaan'
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
			L.marker(highlightCoordinates).addTo(map);
			map.zoomIn(2, {'animate': false});
			correctElementSizeWithZoom();
			map.panTo(highlightCoordinates, {'animate': true, 'duration': 1});	    	
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
    
    var map = L.map('map', {
        center: hogeRielenCenter,
        zoom: 14,
        minZoom: 14,
        maxBounds: hogeRielenBounds,
    });

    map.whenReady(function() {
        //startLocationPolling();

        map.on('layeradd', correctElementSizeWithZoom);
        map.on('zoomend', correctElementSizeWithZoom);

        /*document.addEventListener("pause", stopLocationPolling);
        document.addEventListener("resume", startLocationPolling);    */
    });
    

    //TODO: choose one!
    var tileUrl_default = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    var tileUrl_baseLayer = 'http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png'    
    var tileUrl_tim = '/images/render/{z}/{x}/{y}.png'
    var tileUrl_leeg = '/images/kaart/leeg.png'    

    var tileUrl = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    L.tileLayer(tileUrl, { attribution: '' }).addTo(map);


    L.Icon.Default.imagePath = 'images/kaart';

    $http.get("data/map.geojson")
        .success(function(data, status) {
            L.geoJson(data, {
                style: style,
                pointToLayer: markerIcon,
                filter: filter,
                onEachFeature: onEachFeature
            }).addTo(map);
        });


	

    /*function startLocationPolling() {
        $log.debug("Start location polling");
        L.control.locate({
            drawCircle: true,  // controls whether a circle is drawn that shows the uncertainty about the location
            follow: true,  // follow the user's location
            keepCurrentZoomLevel: true, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
            stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
            remainActive: false, // if true locate control remains active on click even if the user's location is in view.
            markerClass: L.circleMarker, // L.circleMarker or L.marker
            circleStyle: {},  // change the style of the circle around the user's location
            markerStyle: {},
            followCircleStyle: {},  // set difference for the style of the circle around the user's location while following
            followMarkerStyle: {},
            icon: 'icon-location',  // `icon-location` or `icon-direction`
            iconLoading: 'icon-spinner  animate-spin',  // class for loading icon
            circlePadding: [0, 0], // padding around accuracy circle, value is passed to setBounds
            metric: true,  // use metric or imperial units
            onLocationOutsideMapBounds:  function(context) { // called when outside map boundaries
                    alert(context.options.strings.outsideMapBoundsMsg);
            },
            strings: {
                title: "Show me where I am",  // title of the locate control
                popup: "You are within {distance} {unit} from this point",  // text to appear if user clicks on circle
                outsideMapBoundsMsg: "You seem located outside the boundaries of the map" // default message for onLocationOutsideMapBounds
            },
            locateOptions: {enableHighAccuracy: true}  // define location options e.g enableHighAccuracy: true or maxZoom: 10
        }).addTo(map);
    }

    function stopLocationPolling() {
        $log.debug("Stop location polling")
        map.stopLocate();
    }*/



  });
