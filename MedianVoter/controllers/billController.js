(function (billController) {

    var services = require("../services");
    billController.init = function (app) {
        app.get("/api/bill/:billID", function (req, res) {
            var billID = req.params.billID;
            services.findBill(billID, function (err, bill) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(bill);
                }
            });
        });
        app.get("/api/bill/search/:query", function (req, res) {
            var query = req.params.query;
            services.searchBillSubjects(query, function (err, bills) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(bills);
                }
            });
        });
        app.get("/api/bill/subject/search/:subject", function (req, res) {
            var subject = req.params.subject;
            services.searchBillSubjects(subject, function (err, bills) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(bills);
                }
            });
        });
        app.get("/api/bill/subject/:subject", function (req, res) {
            var subject = req.params.subject;
            services.findBillBySubject(subject, function (err, bills) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(bills);
                }
            });
        });
        app.get("/api/bill/member/:memberID/:type", function (req, res) {
            var memberID = req.params.memberID;
            var type = req.params.type;
            services.findBillByMember(memberID, type, function (err, bills) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(bills);
                }
            });
        });
    };   

})(module.exports);