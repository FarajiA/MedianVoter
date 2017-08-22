(function (service) {
    const config = require('../config.js');
    const request = require('request');
    const _ = require('lodash');

    //const Congress = require('propublica-congress-node');
    //var probuplica = new Congress(config.keys.propublica);
    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    service.findMember = function (memberID, next) {        
        const options = {
            url: config.urls.propublica + '/members/' + memberID,
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

        /******** Propublica NPM ***************
        probuplica.memberBioAndRoles({
            memberId: memberID
        }).then(function (res) {
            next(null, res)
            }, function (err) {
                next(err, null);
        });
        **/
    };
    
    service.findMemberByDistrictOrState = function (district, state, next) {
        var url = '';
        if (district)
            url = '/members/house/' + state + '/' + district + '/current.json';
        else
            url = '/members/senate/' + state + '/current.json';        

        const options = {
            url: config.urls.propublica + url,
            method: 'GET',
            headers: config.headers.propublica,
            rejectUnauthorized: false,
            requestCert: true
        };

        request(options, function (err, res, body) {
            var parsed = JSON.parse(body);
            //console.log('REQUEST RESULTS:', err, res.statusCode, parsed.results);
            if (err || !parsed.results)
                next(err, null);
            else
                next(null, parsed.results);
        });
    };

    service.findMembersVotes = function (memberID, next) {
        const options = {
            url: config.urls.propublica + '/members/' + memberID + '/votes.json',
            method: 'GET',
            headers: config.headers.propublica,
            rejectUnauthorized: false,
            requestCert: true
        };

        request(options, function (err, res, body) {
            var parsed = JSON.parse(body);
            //console.log('REQUEST RESULTS:', err, res.statusCode, parsed.results);
            if (err || !parsed.results)
                next(err, null);
            else
                next(null, parsed.results[0]);
        });
    };

    service.findMembersVotesOnBill = function (memberID, billID, next) {

        this.findMembersVotes(memberID, (err, results) => {
            if (err)
                next(err, null);

            var vote;
            var bills = _.map(results.votes, 'bill');
            var voteMax = 5;
            if (parseInt(billID) === 0) {
                vote = results.votes.slice(0, voteMax)
                next(null, vote);
            }

            _.forEach(bills, function (value, key) {
                console.log("Bill number: " + value.number);
                if (_.isEmpty(value.number))
                    return;

                var billnumber = value.number.replace(/\s+/g, '');
                if (billnumber == billID) {
                    vote = results.votes[key];
                    return false;
                }
            });

            next(null, vote);

        });
    };


})(module.exports);