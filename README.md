## Mobiele Gids voor [Herfstontmoeting](https://www.scoutsengidsenvlaanderen.be/initiatieven/herfstontmoeting) ##

Programma van het jaarlijkse startweekend voor leiding van Scouts en Gidsen Vlaanderen.

Build with [AngularJS](https://angularjs.org/), [Leaflet](http://www.leafletjs.com) and [Apache Cordova](http://cordova.apache.org/).

### Prerequisites ###
* [node](https://nodejs.org/)
* [grunt](http://gruntjs.com/getting-started)
* [bower](http://bower.io/)
* [ruby](https://www.ruby-lang.org/en/)
* [compass](http://compass-style.org/install/)

### Run this application locally ###

    npm install
    bower install
    grunt serve

Your browser should open at http://localhost:9000.
To test it on a smartphone, you can surf to this url with your smartphone or use the [chrome device mode](https://developer.chrome.com/devtools/docs/device-mode) to simulate your mobile phone in the browser. 

### Cordova packages ###

[Get a packaged app](https://build.phonegap.com/apps/901503/share)

The final apps are build based on the `www` folder with [Adobe's build service](http://build.phonegap.com).
Create a package with `grunt build`

### Continious Integration ###

Continious Integration with Travis: [![Build Status](https://travis-ci.org/timvlaer/ho-gids.svg?branch=master)](https://travis-ci.org/timvlaer/ho-gids)


### License ###

This software is written by Tim Van Laer and licensed under the [GNU GPLv3 license](http://choosealicense.com/licenses/gpl-3.0/). 
