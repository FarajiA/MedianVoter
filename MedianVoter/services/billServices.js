(function (service) {
    const config = require('../config.js');
    const request = require('request');
    const congress = 115;

    service.findBill = function (billID, next) {
        const options = {
            url: config.urls.propublica + '/' + config.congress.current + '/bills/' + billID,
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
                next(null, parsed.results[0]);
        });
    };

    service.findBillByQuery = function (query, next) {
        query = query.replace(/-/g, ' ');
        const options = {
            url: config.urls.propublica + '/bills/search?query="' + query + '"',
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
                next(null, parsed.results[0]);
        });
    };

    service.searchBillSubjects = function (query, next) {
        query = query.replace(/-/g, ' ');
        const options = {
            url: config.urls.propublica + '/bills/subjects/search?query=' + query,
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
                next(null, parsed.results[0]);
        });
    };

    service.findBillBySubject = function (subject, next) {
        const options = {
            url: config.urls.propublica + '/bills/subjects/' + subject,
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
                next(null, parsed);
        });
    };

    service.findBillByMember = function (memberID, introduced, next) {
        const options = {
            url: config.urls.propublica + '/members/' + memberID + '/bills/' + introduced,
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
                next(null, parsed.results[0]);
        });
    };

})(module.exports);