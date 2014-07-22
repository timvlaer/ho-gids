'use strict';

/**
 * @ngdoc service
 * @name hoGidsApp.myCurrentLocationService
 * @description
 * # myCurrentLocationService
 * Service in the hoGidsApp.
 */
angular.module('hoGidsApp')
  .service('Mycurrentlocationservice', function Mycurrentlocationservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /*
	function initGetUserLocation() {
        map.on('locationfound', locationFound);
        map.locate({
        	'watch': true,
        	'enableHighAccuracy': true
        });
	}
	initGetUserLocation();

	var preciseLocationPointer;
	var radiusPointer; 
    function locationFound(event) {
		var radius = event.accuracy/2;
		if(preciseLocationPointer) {
			preciseLocationPointer.setLatLng(event.latlng);
			radiusPointer.setLatLng(event.latlng);
			radiusPointer.setRadius(radius);
		} else {
			preciseLocationPointer = L.circle(event.latlng, 2, {fillOpacity: 1, stroke: false});
		    preciseLocationPointer.addTo(map);
		    radiusPointer = L.circle(event.latlng, radius, {fillOpacity: 0.3, stroke: false});
		    radiusPointer.addTo(map);
		}		    
    }	

    */


  });
