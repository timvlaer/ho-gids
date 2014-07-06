'use strict';

/**
 * @ngdoc service
 * @name hoGidsApp.Programma
 * @description
 * # Programma
 * Service in the hoGidsApp.
 */
angular.module('hoGidsApp')
  .service('Programma', function Programma() {
    var service = {
      programma: [
      	{ 
      		dag: "Vrijdag",
	      	items: [ 
		        { start: "19:00", titel: "Aankomst", 
		          beschrijving: "Aankomst en inschrijving deelnemers" },
		        { start: "20:00", stop: "22:30", titel: "Onthaal", 
		          beschrijving: "Onthaal en instapactiviteit bij je gouw", plaats: "Gouwgrond" },
		        { start: "23:00", stop: "01:00", titel: "Onthaalshow", 
		          beschrijving: "Onthaalshow op het grote podium", plaats: "KKG" },
		        { start: "01:00", stop: "02:30", titel: "Scouteske avond", 
		          beschrijving: "Scouteske avond met her en der animo, kampvuur + café", plaats: "KKG" },
		        { start: "03:00", titel: "Slaapwel", 
		          beschrijving: "Tijd om je slaapzak op te zoeken en slaapwel", plaats: "Gouwgrond" }
		    ]
	    },
	    {
	    	dag: "Zaterdag",
	      	items: [ 
		        { start: "08:00", stop: "09:00", titel: "Opstaan", 
		          beschrijving: "Wekken en ontbijt op je gouwgrond", plaats: "Gouwgrond" },
		        { start: "09:15", stop: "09:50", titel: "Openingsshow", 
		          beschrijving: "Openingsshow op het hoofdpodium", plaats: "KKG" },
		        { start: "10:00", stop: "12:30", titel: "Thema-aanbod", 
		          beschrijving: "Tijd voor thema’s (vorming) op de themagronden", plaats: "Themagronden" },
		        { start: "12:40", stop: "13:40", titel: "Picknick", 
		          beschrijving: "Massa-picknick met animo", plaats: "KKG" },
		        { start: "13:50", stop: "16:20", titel: "Takaanbod", 
		          beschrijving: "Tijd voor takken (vorming) op de takgronden", plaats: "Takgronden" },
		        { start: "16:30", stop: "22:00", titel: "Gouw- en districtsmoment", 
		          beschrijving: "Gouw- en districtsmoment met warm avondmaal op je gouwgrond", plaats: "Gouwgrond" },
		        { start: "22:15", stop: "22:45", titel: "Zin in HO", 
		          beschrijving: "ZIN in HO op het hoofdpodium", plaats: "KKG" },
		        { start: "22:45", stop: "02:30", titel: "Avondaanbod", 
		          beschrijving: "Avondgebeuren met her en der animo, kampvuur + café", plaats: "KKG" },
		        { start: "03:00", titel: "Slaapwel", 
		          beschrijving: "Tijd om je slaapzak op te zoeken en slaapwel", plaats: "Gouwgrond" }
		    ]
	    },
	    {
	    	dag: "Zondag",
	      	items: [ 
	      		{ start: "08:00", stop: "09:00", titel: "Opstaan", 
		          beschrijving: "Wekken en ontbijt op je gouwgrond", plaats: "Gouwgrond" },
		        { start: "09:30", stop: "11:30", titel: "Markt", 
		          beschrijving: "Een actief marktgebeuren met walking brunch", plaats: "KKG" },
		        { start: "12:00", stop: "13:00", titel: "Slotshow", 
		          beschrijving: "Slotshow op het grote podium", plaats: "KKG" },
		        { start: "13:00", stop: "14:00", titel: "Opruim", 
		          beschrijving: "Opruim en afbraak"},
		        { start: "15:30", titel: "Vertrek naar huis" }
		    ]
	    }
      ],
  
      starProgrammaItem: function ( item ) {
        //TODO implement
       	$rootScope.$broadcast( 'programmaItems.update' );
     }
   }
 
   return service;
  });
