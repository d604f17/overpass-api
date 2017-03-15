var request = require('request');

var baseURL = 'http://overpass-api.de/api/interpreter?data=';


function getQuery(query) {
    return baseURL + query.join(';') + ';';
}

const query = getQuery([
    '[out:json]',
    'node(57.7,11.9,57.8,12.0)[amenity=bar]',
    'out'
]);

request(query, function (error, response, body) {
    console.log(error, response);
    console.log(body);
});