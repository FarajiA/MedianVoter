(function (voteController) {

    var services = require("../services");
    voteController.init = function (app) {
        app.get(["/api/vote/rollcall/:chamber/:rollcall",
            "/api/vote/rollcall/:chamber/:rollcall/:congress"], function (req, res) {
            var chamber = req.params.chamber;
            var rollCall = req.params.rollcall;
            var congress = req.params.congress;
            services.findRollCallVote(chamber, rollCall, congress, function (err, votes) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(votes);
                }
            });
        });
    };   

})(module.exports);