var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
// Handlers for home requests
handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;

/*
 * Add request handlers here
 */

server.start(router.route, handle);
