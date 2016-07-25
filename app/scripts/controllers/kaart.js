'use strict';

var labelClassName = 'map-label';
var iconClassName = 'map-icon';
var iconRectClassName = 'map-icon-rect';

var hogeRielenCenter =  L.latLng(51.24230669704754, 4.936895370483398);
var hogeRielenBounds = L.latLngBounds(L.latLng(51.2300, 4.90900), L.latLng(51.2530, 4.9570));

var DEFAULT_ZOOM = 14;

var POLL_LOCATION_INTERVAL = 10; //seconds
var POLL_LOCATION_TIMEOUT = 8; //seconds
var POLL_LOCATION_INTERVAL_OUTSIDE_AREA = 10 * 60; //seconds
var POSITION_DESIRED_ACCURACY = 50; //meter
var POSITION_MAX_ALLOWED_ACCURACY = 350; //meter

var styles = {
    'podium': {
        fillColor: '#f07d00',
        fillOpacity: 1,
        stroke: false
    },
    'podiumgrond': {
        fillColor: '#006f93',
        fillOpacity: 1,
        stroke: false
    },
    'pavilioen': {
        fillColor: '#e2afc4',
        fillOpacity: 1,
        stroke: false
    },
    'loods': {
        fillColor: '#dae283',
        fillOpacity: 1,
        stroke: false
    },
    'kampeergrond': {
        fillColor: '#51af31',
        fillOpacity: 1,
        stroke: false,
        lineJoin: 'round'
    },
    'kampeergrond-ongebruikt': {
        fillColor: '#fdf7f4',
        fillOpacity: 1,
        stroke: false,
        lineJoin: 'round'
    },
    'aanbod': {
        fillColor: '#da0c25',
        fillOpacity: 1,
        stroke: false,
        lineJoin: 'round'
    },
    'vijver': {
        fillColor: '#009fe3',
        fillOpacity: 0.6,
        stroke: false,
        lineJoin: 'round'
    },
    'bos': {
        fillColor: '#7e216e',
        fillOpacity: 1,
        weight: 1,
        color: '37af6b'
    },
    'weg-hard': {
        weight: 4,
        opacity: 1,
        color: 'white',
        lineCap: 'square'
    },
    'weg-hard-2': {
      weight: 3,
      opacity: 1,
      color: 'white',
      lineCap: 'square'
    },
    'weg-halfhard': {
        weight: 3,
        opacity: 1,
        color: 'white',
        lineCap: 'square'
    },
    'weg-zand': {
        weight: 1,
        opacity: 1,
        color: '#f0a68f',
        dashArray: '5'
    },
    'faciliteit': {
        stroke: false,
        radius: 4,
        fillColor: '#0e7594',
        fillOpacity: 1
    },
    'border': {
        fillColor: '#fcefe9',
        weight: 5,
        color: '#f0a68f',
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

var accuracyCircleStyle = {
  fillOpacity: 0.3,
  fillColor: '#1d9c5a',
  stroke: false
};
var accuracyCircleStyleInvalid = {
  fillOpacity: 0.3,
  fillColor: '#9C2A1D',
  stroke: false
};

var icons = {
    'ehboIcon': L.icon({
        iconUrl: 'images/kaart/ehbo.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'infoIcon': L.icon({
        iconUrl: 'images/kaart/infopunt.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'sisIcon': L.icon({
        iconUrl: 'images/kaart/sis.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'onthaalIcon': L.icon({
        iconUrl: 'images/kaart/onthaal.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'sanitair': L.icon({
        iconUrl: 'images/kaart/sanitair.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'afwasbatterij': L.icon({
        iconUrl: 'images/kaart/afwasbatterij.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'evacuatiepunt': L.icon({
        iconUrl: 'images/kaart/evacuatiepunt.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'bar': L.icon({
        iconUrl: 'images/kaart/bar.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'eten': L.icon({
        iconUrl: 'images/kaart/eten.png',
        iconSize: [24, 24],
        className: iconClassName
    }),
    'tent': L.icon({
        iconUrl: 'images/kaart/tent.png',
        iconSize: [128, 64],
        className: iconRectClassName
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
  .controller('KaartCtrl', function ($scope, $http, leafletData, $routeParams, $log, localStorageService) {

    var preciseLocationPointer, radiusPointer;
    var featureHighlightPointer;
    var locationPollInterval;

    var isLocationEnabled = localStorageService.get('locationEnabled') !== false;

    function style(feature) {
        return styles[feature.properties.style] || styles.default;
    }

    function markerIcon(feature, latlng) {
    	if(feature.properties.name) {
    		switch (feature.properties.name.toLowerCase()) {
			    case 'ehbo': return L.marker(latlng, {icon: icons.ehboIcon});
			    case 'infopunt': return L.marker(latlng, {icon: icons.infoIcon});
			    case 'sis': return L.marker(latlng, {icon: icons.sisIcon});
			    case 'onthaal': return L.marker(latlng, {icon: icons.onthaalIcon});
			    case 'sanitair': return L.marker(latlng, {icon: icons.sanitair});
			    case 'afwasbatterij': return L.marker(latlng, {icon: icons.afwasbatterij});
			    case 'evacuatiepunt': return L.marker(latlng, {icon: icons.evacuatiepunt});
			    case 'centrale bar': return L.marker(latlng, {icon: icons.bar});
			    case 'bar': return L.marker(latlng, {icon: icons.bar});
			    case 'eten': return L.marker(latlng, {icon: icons.eten});
			}
    	}
        return L.circle(latlng, 7);
    }

    function filter(feature, layer) {
      return feature.properties.show_on_map !== false;
    }

    function onEachFeature(feature, layer) {
    	addLabel(feature, layer);
    	checkIfUserSelectedThisFeature(feature, layer);
    }

    function addLabel(feature, layer) {
      if (feature.geometry.type === 'Polygon') {
        var featurePolygon = L.polygon(layer._latlngs);
        if (feature.properties.style === 'kampeergrond') {
          L.marker(featurePolygon.getBounds().getCenter(), {icon: icons.tent}).addTo(map);
        }
        if(feature.properties.name) {
          var labelIcon = L.divIcon({
            className: labelClassName,
            html: feature.properties.name
          });
          L.marker(featurePolygon.getBounds().getCenter(), {icon: labelIcon}).addTo(map);
        }
      }
    }

    function checkIfUserSelectedThisFeature(feature, layer) {
      if (featureNameMatchesParam(feature)) {
        var highlightCoordinates = (layer._latlngs) ? L.polygon(layer._latlngs).getBounds().getCenter() : layer._latlng;
        if (highlightCoordinates) {
          featureHighlightPointer = L.marker(highlightCoordinates).addTo(map);
        }
      }
    }

    function featureNameMatchesParam(feature) {
    	if($routeParams.highlightPlaats) {
    		var featureName = feature.properties.name;
    		var featureAlias = feature.properties.alias;
    		var selectedPlace = $routeParams.highlightPlaats.toLowerCase();
    		return (featureName && featureName.toLowerCase() === selectedPlace) ||
          (featureAlias && featureAlias.toLowerCase().indexOf(selectedPlace) >= 0);
    	} else {
    		return false;
    	}
    }

    function correctElementSizeWithZoom(){
      var zoomLevel = map.getZoom();

      //resize labels
      var zoomLevelFontSizeMapping = {'14': 6, '15': 7, '16': 12, '17': 14, '18': 20};
      angular.element('.' + labelClassName).css('fontSize', zoomLevelFontSizeMapping[zoomLevel] + 'px');

      //resize icons
      var zoomLevelIconSizeMapping = {'14': 10, '15': 16, '16': 24, '17': 44, '18': 56};
      var newIconSize = zoomLevelIconSizeMapping[zoomLevel];
      var newMargin = -1 * newIconSize / 2;
      angular.element('.' + iconClassName).css('width', newIconSize + 'px').css('height', newIconSize + 'px')
          .css('margin-left', newMargin + 'px').css('margin-top', newMargin + 'px');

      //resize rectangular icons
      var zoomLevelIconRectSizeMapping = {'14': 10, '15': 16, '16': 32, '17': 56, '18': 64};
      var newIconHeight = zoomLevelIconRectSizeMapping[zoomLevel];
      var newMarginLeft = -1 * newIconHeight;
      var newMarginTop = -1 * newIconHeight / 2;
      angular.element('.' + iconRectClassName).css('width', (newIconHeight*2) + 'px').css('height', newIconHeight + 'px')
        .css('margin-left', newMarginLeft + 'px').css('margin-top', newMarginTop + 'px');
    }

    function showInterestingViewport() {
      //FIXME if a feature is highlighted, this method is triggered first and your current location doesn't get in viewport.
      if (preciseLocationPointer && featureHighlightPointer) {
        map.fitBounds(
          L.latLngBounds(featureHighlightPointer.getLatLng(), preciseLocationPointer.getLatLng()),
          {'animate': true, 'duration': 1, 'maxZoom': DEFAULT_ZOOM}
        );
      } else if (preciseLocationPointer || featureHighlightPointer) {
        map.setZoom(DEFAULT_ZOOM + 2, {'animate': false});
        correctElementSizeWithZoom();
        if (preciseLocationPointer) {
          map.panTo(preciseLocationPointer.getLatLng(), {'animate': true, 'duration': 1});
        } else if (featureHighlightPointer) {
          map.panTo(featureHighlightPointer.getLatLng(), {'animate': true, 'duration': 1});
        }
      }
    }



    function onAccuratePositionProgress (e) {
        onAccuratePositionFound(e);
    }

    function onAccuratePositionFound(event) {
      console.log(event);

      if (hogeRielenBounds.contains(event.latlng)) {
        if(event.accuracy < POSITION_MAX_ALLOWED_ACCURACY) {
          var radius = event.accuracy / 2;
          if (!preciseLocationPointer || !radiusPointer) {
            preciseLocationPointer = L.marker(event.latlng, {icon: icons.locationIcon});
            map.addLayer(preciseLocationPointer);

            radiusPointer = L.circle(event.latlng, radius, accuracyCircleStyle);
            map.addLayer(radiusPointer);

            showInterestingViewport();
          } else {
            preciseLocationPointer.setLatLng(event.latlng);
            preciseLocationPointer.update();
            radiusPointer.setLatLng(event.latlng);
            radiusPointer.setRadius(radius);
            radiusPointer.setStyle(accuracyCircleStyle);
            radiusPointer.redraw();
          }
        }
      } else {
        clearCurrentLocation();
        scheduleLocationPolling(POLL_LOCATION_INTERVAL_OUTSIDE_AREA); // recheck in 10 minutes
      }
    }

    function onAccuratePositionError (e) {
      $log.warn('Position not found', e);
      if(radiusPointer) {
        radiusPointer.setStyle(accuracyCircleStyleInvalid);
      }
    }

    function clearCurrentLocation() {
      if (preciseLocationPointer) {
        map.removeLayer(preciseLocationPointer);
      }
      if (radiusPointer) {
        map.removeLayer(radiusPointer);
      }
      preciseLocationPointer = undefined;
      radiusPointer = undefined;
    }

    function doGeolocation() {
      if (isLocationEnabled) {
        map.on('accuratepositionprogress', onAccuratePositionProgress);
        map.on('accuratepositionfound', onAccuratePositionFound);
        map.on('accuratepositionerror', onAccuratePositionError);

        findAccuratePosition();
      }
    }

    function findAccuratePosition() {
      $log.info('Request position.');
      map.findAccuratePosition({
        maxWait: POLL_LOCATION_TIMEOUT * 1000,
        desiredAccuracy: POSITION_DESIRED_ACCURACY
      });
      scheduleLocationPolling(POLL_LOCATION_INTERVAL);
    }

    function scheduleLocationPolling(seconds) {
      stopInterval();
      locationPollInterval = setInterval(findAccuratePosition, seconds * 1000);
    }

    function stopInterval() {
        if(locationPollInterval) {
            clearInterval(locationPollInterval);
        }
    }

    //TODO create map as global object: keep state + fix bug 'Map container is already initialized.'
    var map = L.map('map', {
        center: hogeRielenCenter,
        zoom: DEFAULT_ZOOM,
        minZoom: 14,
        maxBounds: hogeRielenBounds
    });

    map.whenReady(function() {
        map.on('layeradd', correctElementSizeWithZoom);
        map.on('zoomend', correctElementSizeWithZoom);
    });

    var tileUrl = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
    L.tileLayer(tileUrl, { attribution: '' }).addTo(map);


    L.Icon.Default.imagePath = 'images/kaart';

    $http.get('data/map.geo.json')
        .success(function(data) {
            L.geoJson(data, {
                style: style,
                pointToLayer: markerIcon,
                filter: filter,
                onEachFeature: onEachFeature
            }).addTo(map);

            doGeolocation();

            showInterestingViewport();
        });

    document.addEventListener("pause", stopInterval, false);
    document.addEventListener("resume", findAccuratePosition, false);

  });
