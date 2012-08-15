var querystring = require("querystring"), 
    fs = require("fs"),
    formidable = require("formidable");

function home(response) {
	console.log("Request handler for 'home' was called.\n");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Local node.js Web Server for testing.\n\n\tThis server provides the framework for adding ad-hoc Request Handlers for testing purposes.\n\n\tPlease review the README for more information. https://github.com/thomaswsdyer/FirstWebServer");
  //response.write("Tom Dyer's Website for playing around with node.js\n\n\tTo Upload an image file, go to http://tomdyer.ca/start\n\n\n\n\n\n\t\t\tMerry Xmas Everyone!");
	response.end();
}

/*
 * Add request handlers here
 */

/*
 * Add exports for handlers here
 */
