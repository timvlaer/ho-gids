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

  	var takken = [
  		{
		    titel: "Kapoenen-/Zeehondjesleiding",
		    plaats: "K10",
		    beschrijving: "Kom op ontdekking en leer waar jij en je kapoenen goed in zijn! \nNieuwe spelen, moeilijke kapoenen, voorlezen, spelen in elkaar boksen, gescheiden ouders,... dit en méér kan je vinden in het kapoenenaanbod!"
		}, 
		{
		    titel: "Kabouter-/(Zee)welpenleiding",
		    plaats: "K7",
		    beschrijving: "Of je nu nieuw bent in de horde, al wat lessen van Baloe onder de knie hebt, of een ervaren Akela bent, doet er niet zo toe. Bij ons vind je workshops om ervaringen uit te wisselen, om nieuwe spellen te leren, om je danskunsten bij te schaven,... Kortom, in onze jungle is er voor elk wat wils."
		}, 
		{
		    titel: "Jonggidsen-/Jongverkenner-/Scheepsmakkerleiding",
		    plaats: "KP14",
		    beschrijving: "Alle leiding zijn helden maar alleen als team zijn ze ontoombaar. Als leiding ben je een held voor je leden omdat je ze vanalles kan leren, maar een held blijf je pas als je zelf steeds bijleert."
		}, 
		{
		    titel: "(Zee)gidsen-/(Zee)verkennerleiding (+ SOLL)",
		    plaats: "Vijver 1",
		    beschrijving: "Klaar om een fantastisch jaar als giverleiding tegemoet te gaan? Na het volgen van een van onze werkwinkels zeker wel! Aan de vijver bieden wij jullie inspiratie om in het kader van het jaarthema met je givers van het buitenleven te genieten, tips en tricks om originele en uitdagende projecten op te bouwen, een kans om even stil te staan bij totemisatie en nog veel meer."
		}, 
		{
		    titel: "Jin-/Loodsenleiding",
		    plaats: "KP12",
		    beschrijving: "Zin om je jinjaar zonder kleerscheuren te overleven? Op zoek naar een originele jinvergadering? Ideeën nodig voor het eerste jinweekend? Zin in een leuk project, maar weet je niet goed hoe eraan te beginnen? Inspiratie nodig? Meer weten over kampen, leefweek en kleurentotems? \nPrima, wees dan welkom op onze Jingrond. We bewijzen dat vorming allesbehalve saai hoeft te zijn door zowel inhoudelijke als praktische werkwinkels aan te bieden. Dit alles is natuurlijk, zoals het de jins betaamt, overgoten met een zotte en speelse saus."
		}, 
		{
		    titel: "Groepsleiding, VGA en materiaalmeesters",
		    plaats: "KKG",
		    beschrijving: "Net groepsleiding geworden? Al veel ervaring, maar de groepsadministratie vlot niet? Waar en hoe vind ik nieuwe leiding? Hoe start ik een oudercomité op? Talloze vragen waar je hier een antwoord op vindt!"
		}, 
		{
		    titel: "Akabeleiding",
		    plaats: "K12",
		    beschrijving: "Scouting... zonder beperking! \nEen handicap hoeft geen beperking te zijn. Ontdek hoe je het maximum kan halen uit je groep en echt iedereen meekrijgt bij scouting, of je nu een lid hebt met ADHD, autisme of downsyndroom. Rolstoelspelen, klauteren in de bossen, zwaardgevechten... we doen het gewoon bij Akabe!"
		}];

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
		          beschrijving: "Tijd voor takken (vorming) op de takgronden", plaats: "Takgronden", subitems: takken },
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
