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

      var themas = [
          {
              'titel': 'Kapoenen',
              'plaats': 'K10',
              'beschrijving': 'Kom op ontdekking en leer waar jij en je kapoenen goed in zijn! \nNieuwe spelen, moeilijke kapoenen, voorlezen, spelen in elkaar boksen, gescheiden ouders,... dit en méér kan je vinden in het kapoenenaanbod!'
          },
          {
              'titel': 'Welpen, kabouters',
              'plaats': 'K14',
              'beschrijving': 'Of je nu nieuw bent in de horde, al wat lessen van Baloe onder de knie hebt, of een ervaren Akela bent, doet er niet zo toe. Bij ons vind je workshops om ervaringen uit te wisselen, om nieuwe spellen te leren, om je danskunsten bij te schaven,... Kortom, in onze jungle is er voor elk wat wils.'
          },
          {
              'titel': 'Jongverkenners, jonggidsen',
              'plaats': 'K12',
              'beschrijving': 'Alle leiding zijn helden maar alleen als team zijn ze ontoombaar. Als leiding ben je een held voor je leden omdat je ze vanalles kan leren, maar een held blijf je pas als je zelf steeds bijleert.'
          },
          {
              'titel': 'Verkenners, gidsen',
              'plaats': 'Vijver 1',
              'beschrijving': 'Klaar om een fantastisch jaar als giverleiding tegemoet te gaan? Na het volgen van een van onze werkwinkels zeker wel! Aan de vijver bieden wij jullie inspiratie om in het kader van het jaarthema met je givers van het buitenleven te genieten, tips en tricks om originele en uitdagende projecten op te bouwen, een kans om even stil te staan bij totemisatie en nog veel meer.'
          },
          {
              'titel': 'Jins',
              'plaats': 'K11',
              'beschrijving': 'Zin om je jinjaar zonder kleerscheuren te overleven? Op zoek naar een originele jinvergadering? Ideeën nodig voor het eerste jinweekend? Zin in een leuk project, maar weet je niet goed hoe eraan te beginnen? Inspiratie nodig? Meer weten over kampen, leefweek en kleurentotems? \nPrima, wees dan welkom op onze Jingrond. We bewijzen dat vorming allesbehalve saai hoeft te zijn door zowel inhoudelijke als praktische werkwinkels aan te bieden. Dit alles is natuurlijk, zoals het de jins betaamt, overgoten met een zotte en speelse saus.'
          },
          {
              'titel': 'Groepsleiding',
              'plaats': 'KKK',
              'beschrijving': 'Net groepsleiding geworden? Al veel ervaring, maar de groepsadministratie vlot niet? Waar en hoe vind ik nieuwe leiding? Hoe start ik een oudercomité op? Talloze vragen waar je hier een antwoord op vindt!'
          },
          {
              'titel': 'Zeescouting',
              'plaats': 'Vijver 1',
              'beschrijving': ''
          },
          {
              'titel': 'Akabe',
              'plaats': 'P13',
              'beschrijving': 'Scouting... zonder beperking! \nEen handicap hoeft geen beperking te zijn. Ontdek hoe je het maximum kan halen uit je groep en echt iedereen meekrijgt bij scouting, of je nu een lid hebt met ADHD, autisme of downsyndroom. Rolstoelspelen, klauteren in de bossen, zwaardgevechten... we doen het gewoon bij Akabe!'
          },
          {
              'titel': 'Actie en spel',
              'plaats': 'KKG',
              'beschrijving': 'Scouting da’s proeven. Op de actie en spelgrond kan je vooral zelf heel wat spelen ontdekken. Van zwerkbal tot bosspel. We nemen je mee op een ontdekkingstocht.'
          },
          {
              'titel': 'EHBO',
              'plaats': 'KKG',
              'beschrijving': 'Eerste Hulp Bij Ongevallen kunnen toedienen, het blijft een handige vaardigheid voor leiding. Het Jeugd Rode Kruis komt het ons nog eens allemaal haarfijn uitleggen.'
          },
          {
              'titel': 'Techniekenmarkt',
              'plaats': 'KKG',
              'beschrijving': 'Een markt vol met technieken en experimenten. Van knopen leggen tot vuur maken, van hout klieven tot… , wij voorzien techniekenweetjes voor ervaren en minder ervaren techneuten'
          },
          {
              'titel': 'Zit je scoutscarrière erop',
              'plaats': 'Infopunt',
              'beschrijving': '...maar kriebelt het om nog iets meer te doen? Inspiratie nodig over een goede stam- of oudleidingswerking? Heb je expertise waar we bij Scouts en Gidsen Vlaanderen nog iets mee kunnen doen? (enkel tijdens sessie 1)'
          }
      ];

      var vrijdagavond = [
          {
              'titel': 'Volksdansen (0u)',
              'plaats': 'Hoofdpodium',
              'beschrijving': ''
          },
          {
              'titel': 'Scouteske zangavond (1u)',
              'plaats': 'Hoofdpodium',
              'beschrijving': ''
          },
          {
              'titel': 'Labyrjinth',
              'plaats': 'L341',
              'beschrijving': ''
          },
          {
              'titel': 'Hopper café met karaoke',
              'plaats': 'K10',
              'beschrijving': ''
          },
          {
              'titel': 'Pijl en boog',
              'plaats': 'LK10',
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
              'titel': 'Optreden 1a (23u)',
              'plaats': 'Hoofdpodium',
              'beschrijving': ''
          },
          {
              'titel': 'Optreden 1b (23u)',
              'plaats': 'K10',
              'beschrijving': ''
          },
          {
              'titel': 'Optreden 2a (0u45)',
              'plaats': 'Hoofdpodium',
              'beschrijving': ''
          },
          {
              'titel': 'Optreden 2b (0u30)',
              'plaats': 'K10',
              'beschrijving': ''
          },
          {
              'titel': 'Hopper café met karaoke',
              'plaats': 'LK10',
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
		          'beschrijving': 'Aankomst en inschrijving' },
		        { 'start': '20:00', 'titel': 'Installeren',
		          'beschrijving': 'Tentje opzetten, matje uitrollen', 'plaats': 'Gouwgrond' },
		        { 'start': '20:00', 'stop': '22:45', 'titel': 'Gouwfoor',
		          'beschrijving': 'Gouwfoor op de grote grond', 'plaats': 'KKG' },
                { 'start': '22:45', 'stop': '23:15', 'titel': 'Opwarmer',
                  'beschrijving': 'Opwarmer op het grote podium', 'plaats': 'KKG' },
                { 'start': '23:15', 'stop': '00:00', 'titel': 'Openingsshow',
		          'beschrijving': 'Openingsshow op het grote podium', 'plaats': 'KKG' },
		        { 'start': '00:00', 'stop': '02:30', 'titel': 'Scouteske avond',
		          'beschrijving': 'Scouteske avond met animo, kampvuur en café', 'plaats': '', 'subitems': vrijdagavond },
		        { 'start': '03:00', 'titel': 'Slaapwel',
		          'beschrijving': 'Tijd om in je slaapzak te kruipen', 'plaats': 'Gouwgrond' }
		    ]
	    },
	    {
	    	dag: 'Zaterdag',
	      	items: [
		        { 'start': '08:00', 'stop': '09:00', 'titel': 'Opstaan',
		          'beschrijving': 'Opstaan en ontbijt op je gouwgrond', 'plaats': 'Gouwgrond' },
                { 'start': '09:00', 'stop': '11:00', 'titel': 'Gouw- en districtsmoment',
                    'plaats': 'Gouwgrond' },
                { 'start': '11:15', 'stop': '11:45', 'titel': 'Opening van de dag',
                    'plaats': 'KKG' },
                { 'start': '11:45', 'stop': '12:30', 'titel': 'Gouwbattle',
                    'plaats': 'Gouwgrond' },
                { 'start': '12:30', 'stop': '13:30', 'titel': 'Picknick',
                    'beschrijving': 'Massa-picknick op de grote grond met animo', 'plaats': 'KKG' },
                { 'start': '13:40', 'stop': '15:40', 'titel': 'Tak- en themamoment',
                    'beschrijving': 'Vorming op de tak- en themagronden', 'plaats': 'Vormingsgronden', 'subitems': themas },
                { 'start': '16:20', 'stop': '18:20', 'titel': 'Tak- en themamoment',
                    'beschrijving': 'Vorming op de tak- en themagronden', 'plaats': 'Vormingsgronden', 'subitems': themas },
                { 'start': '18:40', 'stop': '20:00', 'titel': 'Avondeten',
                    'beschrijving': 'Warm avondmaal op je gouwgrond', 'plaats': 'Gouwgrond' },
                { 'start': '20:00', 'stop': '22:00', 'titel': 'Gouwmoment',
                    'plaats': 'Gouwgrond' },
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
		          'plaats': 'Gouwgrond' },
		        { 'start': '09:15', 'stop': '11:45', 'titel': 'Markt',
		          'beschrijving': 'Een actieve markt met walking brunch op de grote grond', 'plaats': 'KKG' },
		        { 'start': '11:45', 'stop': '12:00', 'titel': 'Jaarthemalied',
		          'plaats': 'KKG' },
                { 'start': '12:00', 'stop': '13:00', 'titel': 'Afsluiter HO',
		          'beschrijving': 'Slotshow op het grote podium', 'plaats': 'KKG' },
		        { 'start': '13:00', 'stop': '14:00', 'titel': 'Opruim',
		          'beschrijving': 'Opruim en afbraak'},
		        { 'start': '15:30', 'titel': 'Vertrek naar huis' }
		    ]
	    }
      ],
      gouwen: [
        {naam: 'Antwerpen', grond: 'K1', grondDetail: 'oost'},
        {naam: 'Gent', grond: 'K6', grondDetail: 'west'},
        {naam: 'Heide', grond: 'K5'},
        {naam: 'Kempen', grond: 'K9'},
        {naam: 'Land van Egmont', grond: 'K4', grondDetail: 'zuid'},
        {naam: 'Limburg', grond: 'K3'},
        {naam: 'Noordzee', grond: 'K4', grondDetail: 'noord'},
        {naam: 'Oost-Brabant', grond: 'K6', grondDetail: 'oost'},
        {naam: 'Opsinjoor', grond: 'K7'},
        {naam: 'Waas', grond: 'K1', grondDetail: 'west'},
        {naam: 'Webra', grond: 'K1', grondDetail: 'noord'},
        {naam: 'Zuid-West-Vlaanderen', grond: 'K1', grondDetail: 'zuid'}
      ]
   };

   return service;
  });
