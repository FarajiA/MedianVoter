(function () {

    var config = {};
    config.urls = {
        //For API documentation visit: https://www.govtrack.us/developers/api
        govtrack: 'www.govtrack.us/api/v2',
        propublica: 'https://api.propublica.org/congress/v1',
        sunlight: 'congress.api.sunlightfoundation.com'
    };

    config.keys = {
        propublica: 'iQ0HL0Nb3p10NicebyKla00iTXROuNF4DT3uV6z3'
    };

    config.headers = {
        basic: {
            'Accept': '*/*',
            'User-Agent': 'Fiddler',
            'Content-Type': 'application/json'
        },
        propublica: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'Fiddler',
            'X-API-Key': config.keys.propublica
        }
    };

    config.congress = {
        current: 115,
        currentSession: isEven(new Date().getFullYear()) ? 2 : 1 
    };

    module.exports = config;


    function isEven(n) {
        return n % 2 == 0;
    }

})();