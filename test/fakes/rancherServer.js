'use strict'
const http = require("http");

module.exports = function createFakeRancher(){
    let server = {close:() => {}};
    return {
        start: function(handle) {
            server = http.createServer(handle);
            return new Promise((resolve) => server.listen(1234, resolve));
        },
        stop: function(callback) {
            server.close(callback);
        }
    };
};
