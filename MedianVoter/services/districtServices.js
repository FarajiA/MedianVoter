(function (service) {

    const https = require('https');
    const config = require('../config.js'); 

    service.findDistrictByZip = function (zipcode, next) {       
        const options = {
            hostname: config.urls.sunlight,
            path: '/districts/locate?zip=' + zipcode,
            headers: config.headers.basic,
            method: 'GET',
            rejectUnauthorized: false,
            requestCert: true
        };

        var chunkStr = '';
        const req = https.request(options, (res) => {
            res.on('data', (chunk) => {
                chunkStr += chunk;
            });

            res.on('end', () => {
                next(null, chunkStr);
            });
        });

        req.on('error', (e) => {
            next(e, null);
        });

        req.end();
    };

    service.findDistrictByCoords = function (coords, next) {
        const options = {
            hostname: config.urls.sunlight,
            path: '/districts/locate?latitude=' + coords.latitude + '&longitude=' + coords.longitude,
            headers: config.headers.basic,
            method: 'GET',
            rejectUnauthorized: false,
            requestCert: true
        };

        var chunkStr = '';
        var req = https.request(options, (res) => {
            res.on('data', (chunk) => {
                chunkStr += chunk;
            });

            res.on('end', () => {
                next(null, chunkStr);
            });
        });

        req.on('error', (e) => {
            next(e, null);
        });

        req.end();
    };
    
})(module.exports);
