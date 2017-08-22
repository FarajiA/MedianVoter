(function (services) {

    var districtService = require("./districtServices");
    var memberService = require("./memberServices");
    var billService = require("./billServices");
    var voteService = require("./voteServices");

    services.getDistrictByZip = function (zipcode, cb) {
        districtService.findDistrictByZip(zipcode, function (err, response) {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.getDistrictByCoords = function (lat, long, cb) {
        const coords = {
            latitude: lat,
            longitude: long
        };
        districtService.findDistrictByCoords(coords, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findMember = function (memberID, cb) {
        memberService.findMember(memberID, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findMemberByDistrictOrState = function (chamber, district, state, cb) {
        memberService.findMemberByDistrictOrState(chamber, district, state, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findMembersVotes = function (memberID, cb) {
        memberService.findMembersVotes(memberID, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findMembersVotesOnBill = function (memberID, billID, cb) {
        memberService.findMembersVotesOnBill(memberID, billID, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findBill = function (billID, cb) {
        billService.findBill( billID, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findBillByQuery = function (query, cb) {
        billService.findBillByQuery(query, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.searchBillSubjects = function (query, cb) {
        billService.searchBillSubjects(query, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findBillBySubject = function (subject, cb) {
        billService.findBillBySubject(subject, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findBillByMember = function (memberID, introduced, cb) {
        billService.findBillByMember(memberID, introduced, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findRollCallVote = function (chamber, rollCallID, congressNo, cb) {
        voteService.findRollCallVote(chamber, rollCallID, congressNo, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

    services.findVotesByDate = function (chamber, rollCallID, congressNo, cb) {
        voteService.findRollCallVote(chamber, rollCallID, congressNo, (err, response) => {
            if (err)
                cb(err, null);
            else
                cb(null, response);
        });
    };

})(module.exports);