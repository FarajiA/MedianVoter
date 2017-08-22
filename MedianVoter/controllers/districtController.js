(function (districtController) {

    var services = require("../services");

    districtController.init = function (app) {
        app.get("/api/district/:zipcode", function (req, res) {
            var zipcode = req.params.zipcode;
            services.getDistrictByZip(zipcode, function (err, district) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(district);
                }
            });            
        });
        app.get("/api/district/:lat/:long", function (req, res) {
            var lat = req.params.lat;
            var long = req.params.long;
            services.getDistrictByCoords(lat, long, function (err, district) {
                if (err)
                    res.send(400, err);
                else {
                    res.set("Content-Type", "application/json");
                    res.send(district);
                }
            });
        });
    }

})(module.exports);