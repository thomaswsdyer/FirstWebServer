var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + "  received.");
		route(handle, pathname, response, request);
		}
	
	// Create and start the server
	http.createServer(onRequest).listen(1337, "10.1.0.105");
	console.log('Server running at http://10.1.0.105:1337');
}

exports.start = start;
