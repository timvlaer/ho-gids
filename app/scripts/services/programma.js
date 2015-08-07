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
		    'titel': 'Kapoenen, Zeehondjes',
		    'plaats': 'K10',
		    'beschrijving': 'Kom op ontdekking en leer waar jij en je kapoenen goed in zijn! \nNieuwe spelen, moeilijke kapoenen, voorlezen, spelen in elkaar boksen, gescheiden ouders,... dit en méér kan je vinden in het kapoenenaanbod!'
		},
		{
		    'titel': 'Kabouters, (Zee)welpen',
		    'plaats': 'KP14',
		    'beschrijving': 'Of je nu nieuw bent in de horde, al wat lessen van Baloe onder de knie hebt, of een ervaren Akela bent, doet er niet zo toe. Bij ons vind je workshops om ervaringen uit te wisselen, om nieuwe spellen te leren, om je danskunsten bij te schaven,... Kortom, in onze jungle is er voor elk wat wils.'
		},
		{
		    'titel': 'Jonggidsen, Jongverkenner, Scheepsmakker',
		    'plaats': 'K9',
		    'beschrijving': 'Alle leiding zijn helden maar alleen als team zijn ze ontoombaar. Als leiding ben je een held voor je leden omdat je ze vanalles kan leren, maar een held blijf je pas als je zelf steeds bijleert.'
		},
		{
		    'titel': '(Zee)gidsen, (Zee)verkenner, SOLL',
		    'plaats': 'Vijver 1',
		    'beschrijving': 'Klaar om een fantastisch jaar als giverleiding tegemoet te gaan? Na het volgen van een van onze werkwinkels zeker wel! Aan de vijver bieden wij jullie inspiratie om in het kader van het jaarthema met je givers van het buitenleven te genieten, tips en tricks om originele en uitdagende projecten op te bouwen, een kans om even stil te staan bij totemisatie en nog veel meer.'
		},
		{
		    'titel': 'Jins, Loodsen',
		    'plaats': 'K12',
		    'beschrijving': 'Zin om je jinjaar zonder kleerscheuren te overleven? Op zoek naar een originele jinvergadering? Ideeën nodig voor het eerste jinweekend? Zin in een leuk project, maar weet je niet goed hoe eraan te beginnen? Inspiratie nodig? Meer weten over kampen, leefweek en kleurentotems? \nPrima, wees dan welkom op onze Jingrond. We bewijzen dat vorming allesbehalve saai hoeft te zijn door zowel inhoudelijke als praktische werkwinkels aan te bieden. Dit alles is natuurlijk, zoals het de jins betaamt, overgoten met een zotte en speelse saus.'
		},
		{
		    'titel': 'Groepsleiding, VGA, materiaalmeesters',
		    'plaats': 'KKG',
		    'beschrijving': 'Net groepsleiding geworden? Al veel ervaring, maar de groepsadministratie vlot niet? Waar en hoe vind ik nieuwe leiding? Hoe start ik een oudercomité op? Talloze vragen waar je hier een antwoord op vindt!'
		},
		{
		    'titel': 'Akabeleiding',
		    'plaats': 'KKK',
		    'beschrijving': 'Scouting... zonder beperking! \nEen handicap hoeft geen beperking te zijn. Ontdek hoe je het maximum kan halen uit je groep en echt iedereen meekrijgt bij scouting, of je nu een lid hebt met ADHD, autisme of downsyndroom. Rolstoelspelen, klauteren in de bossen, zwaardgevechten... we doen het gewoon bij Akabe!'
		}];

    var themas = [
      {
        'titel': 'Scouting DNA',
        'plaats': 'KKK',
        'beschrijving': ''
      },
      {
        'titel': 'Scouting DNA',
        'plaats': 'K10',
        'beschrijving': ''
      },
      {
        'titel': 'Lokalen, Financiën en Administratie',
        'plaats': 'KP14',
        'beschrijving': ''
      },
      {
        'titel': 'Actie en Spel',
        'plaats': 'K9',
        'beschrijving': ''
      },
      {
        'titel': 'Zeescouting',
        'plaats': 'Vijver 1',
        'beschrijving': ''
      },
      {
        'titel': 'Safety First',
        'plaats': 'K12',
        'beschrijving': ''
      },
      {
        'titel': 'Technieken',
        'plaats': 'KKG',
        'beschrijving': ''
      }
    ];

    var vrijdagavond = [
      {
        'titel': 'Scouteske zangavond',
        'plaats': 'Hoofdpodium',
        'beschrijving': ''
      },
      {
        'titel': 'Volksdansen',
        'plaats': 'K10',
        'beschrijving': ''
      },
      {
        'titel': 'Jindiana Jones',
        'plaats': 'L341',
        'beschrijving': ''
      },
      {
        'titel': 'Lasershooting',
        'plaats': 'L341',
        'beschrijving': ''
      },
      {
        'titel': 'Kampvuur',
        'plaats': 'KKG',
        'beschrijving': ''
      }
    ];

    var zaterdagavond = [
      {
        'titel': 'Winnaar \'Scouting got talent\' (23u)',
        'plaats': 'Hoofdpodium',
        'beschrijving': ''
      },
      {
        'titel': 'Tuxedo swamp blues band (23u)',
        'plaats': 'K10',
        'beschrijving': ''
      },
      {
        'titel': 'DJ Turntable Tities (0u)',
        'plaats': 'Hoofdpodium',
        'beschrijving': ''
      },
      {
        'titel': 'Pussy Willow (0u45)',
        'plaats': 'K10',
        'beschrijving': ''
      },
      {
        'titel': 'Kampvuur',
        'plaats': 'KKG',
        'beschrijving': ''
      }
    ];

    var service = {
      	programma: [
      	{
      		dag: 'Vrijdag',
	      	items: [
		        { 'start': '19:00', 'titel': 'Aankomst',
		          'beschrijving': 'Aankomst en inschrijving deelnemers' },
		        { 'start': '20:00', 'stop': '22:30', 'titel': 'Onthaal',
		          'beschrijving': 'Onthaal en instapactiviteit bij je gouw', 'plaats': 'Gouwgrond' },
		        { 'start': '23:00', 'stop': '01:00', 'titel': 'Onthaalshow',
		          'beschrijving': 'Onthaalshow en \'Scouting Got Talent\' op het grote podium', 'plaats': 'KKG' },
		        { 'start': '01:00', 'stop': '02:30', 'titel': 'Scouteske avond',
		          'beschrijving': 'Scouteske avond met animo, kampvuur en café', 'plaats': '', 'subitems': vrijdagavond },
		        { 'start': '03:00', 'titel': 'Slaapwel',
		          'beschrijving': 'Tijd om je slaapzak te kruipen', 'plaats': 'Gouwgrond' }
		    ]
	    },
	    {
	    	dag: 'Zaterdag',
	      	items: [
		        { 'start': '08:00', 'stop': '09:00', 'titel': 'Opstaan',
		          'beschrijving': 'Opstaan en ontbijt op je gouwgrond', 'plaats': 'Gouwgrond' },
		        { 'start': '09:15', 'stop': '09:50', 'titel': 'Openingsshow',
		          'beschrijving': 'Openingsshow op het grote podium', 'plaats': 'KKG' },
            { 'start': '10:00', 'stop': '12:30', 'titel': 'Tijd voor Thema\'s',
              'beschrijving': 'Vorming op de themagronden', 'plaats': 'Themagronden', 'subitems': themas },
		        { 'start': '12:40', 'stop': '13:40', 'titel': 'Picknick',
		          'beschrijving': 'Massa-picknick op de grote grond met animo', 'plaats': 'KKG' },
            { 'start': '13:50', 'stop': '16:20', 'titel': 'Tijd voor Takken',
              'beschrijving': 'Vorming op de takgronden', 'plaats': 'Takgronden', 'subitems': takken },
		        { 'start': '16:30', 'stop': '22:00', 'titel': 'Gouw- en districtsmoment',
		          'beschrijving': 'Gouw- en districtsmoment met warm avondmaal op je gouwgrond', 'plaats': 'Gouwgrond' },
		        { 'start': '22:15', 'stop': '22:45', 'titel': 'Zin in HO',
		          'beschrijving': 'ZIN in HO op het grote podium', 'plaats': 'KKG' },
		        { 'start': '22:45', 'stop': '02:30', 'titel': 'Avondaanbod',
		          'beschrijving': 'Avondgebeuren met optredens, animo, kampvuur en café', 'plaats': '', 'subitems': zaterdagavond },
		        { 'start': '03:00', 'titel': 'Slaapwel',
		          'beschrijving': 'Tijd om in je slaapzak te kruipen', 'plaats': 'Gouwgrond' }
		    ]
	    },
	    {
	    	dag: 'Zondag',
	      	items: [
	      		{ 'start': '08:00', 'stop': '09:00', 'titel': 'Opstaan',
		          'beschrijving': 'Opstaan op je gouwgrond', 'plaats': 'Gouwgrond' },
		        { 'start': '09:30', 'stop': '11:30', 'titel': 'Markt',
		          'beschrijving': 'Een actief marktgebeuren met walking brunch op de grote grond', 'plaats': 'KKG' },
		        { 'start': '12:00', 'stop': '13:00', 'titel': 'Slotshow',
		          'beschrijving': 'Slotshow op het grote podium', 'plaats': 'KKG' },
		        { 'start': '13:00', 'stop': '14:00', 'titel': 'Opruim',
		          'beschrijving': 'Opruim en afbraak'},
		        { 'start': '15:30', 'titel': 'Vertrek naar huis' }
		    ]
	    }
      ],
      gouwen: [
        {naam: 'Antwerpen', grond: 'K2'},
        {naam: 'Gent', grond: 'K15'},
        {naam: 'Heide', grond: 'K8'},
        {naam: 'Kempen', grond: 'K1'}, /*oost*/
        {naam: 'Land van Egmont', grond: 'K1'}, /*midden*/
        {naam: 'Limburg', grond: 'K7'},
        {naam: 'Noordzee', grond: 'K5'},
        {naam: 'Opsinjoor', grond: 'K4'},
        {naam: 'Waas', grond: 'K1'}, /*west*/
        {naam: 'Webra', grond: 'K6'},
        {naam: 'Zuid-West-Vlaanderen', grond: 'K5'},
        {naam: 'Oost-Brabant', grond: 'K6'}
      ]
   };

    //TODO voorzie onderverdeling in gronden (zoals K1 midden, K1 oost etc.) --> verschil maken in geojson met alias + hierboven grond aanpassen naar alias

   return service;
  });
