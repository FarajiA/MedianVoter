(function (service) {
    const config = require('../config.js');
    const request = require('request');

    service.findRollCallVote = function (chamber, rollCallID, congressNo, next) {
        var congress = congressNo;
        if (!congress)
            congress = config.congress.current;

        const options = {
            url: config.urls.propublica + '/' + congress + '/' + chamber + '/sessions/' + config.congress.currentSession + '/votes/' + rollCallID,
            method: 'GET',
            headers: config.headers.propublica,
            rejectUnauthorized: false,
            requestCert: true
        };

        request(options, function (err, res, body) {
            var parsed = JSON.parse(body);
            console.log('REQUEST RESULTS:', err, res.statusCode, parsed.results);
            if (err || !parsed.results)
                next(err, null);
            else
                next(null, parsed.results);
        });
    };

})(module.exports);