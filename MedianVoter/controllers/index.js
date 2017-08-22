(function (controllers) {

    var districtController = require("./districtController");
    var memberController = require("./memberController");
    var billController = require("./billController");
    var voteController = require("./voteController");

    controllers.init = function (app) {
        districtController.init(app);
        memberController.init(app);
        billController.init(app);
        voteController.init(app);
    };


})(module.exports);