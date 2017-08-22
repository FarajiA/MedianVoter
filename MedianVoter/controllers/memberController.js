(function (memberController) {

    var services = require("../services");
    memberController.init = function (app) {
        app.get("/api/member/:memberID", function (req, res) {
            var memberID = req.params.memberID;
            services.findMember(memberID, function (err, member) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(member);
                }
            });
        });
        app.get(['/api/member/region/:state', '/api/member/region/:state/:district'], function (req, res) {
            var state = req.params.state;
            var district = req.params.district;                  

            services.findMemberByDistrictOrState(district, state, function (err, member) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(member);
                }
            });
        });
        app.get('/api/member/votes/:memberID', function (req, res) {
            var memberID = req.params.memberID;
            services.findMembersVotes(memberID, function (err, votes) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(votes);
                }
            });
        });
        app.get('/api/member/votes/:billID/:memberID', function (req, res) {
            var memberID = req.params.memberID;
            var billID = req.params.billID;
            services.findMembersVotesOnBill(memberID, billID, function (err, votes) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(votes);
                }
            });
        });
    }

})(module.exports);