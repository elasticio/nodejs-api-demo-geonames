var qs = require("querystring");
var HttpComponent = require('elasticio-node').HttpComponent;

var weatherUrl = 'http://api.geonames.org/weatherJSON';

exports.process = retrieveWeatherObservations;

function retrieveWeatherObservations(msg, cfg) {
    var self = this;

    var body = msg.body;

    var queryParams = {
        'north': body.north,
        'south': body.south,
        'east': body.east,
        'west': body.west,
        'username': cfg.username,
        'style': 'full'
    };

    var options = {
        url : weatherUrl + '?' + qs.stringify(queryParams),
        json : true
    };

    new HttpComponent(self).get(options);
}