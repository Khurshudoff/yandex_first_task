const mapServerData = require('./mappers');

const loadList = function() {
    return fetch('/api/stations').
        then((response) => response.json()).
        then(mapServerData);
};

module.exports = loadList;
