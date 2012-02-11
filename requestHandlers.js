var querystring = require("querystring"), 
    fs = require("fs"),
    formidable = require("formidable");

function home(response) {
	console.log("Request handler for 'home' was called.\n");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Tom Dyer's Website for playing around with node.js\n\n\tTo Upload an image file, go to http://tomdyer.ca/start\n\n\n\n\n\n\t\t\tMerry Xmas Everyone!");
	response.end();
}

function start(response) {
	console.log("Request handler for 'start' was called.\n");
	
	var body = '<html>'+ 
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="mutlipart/form-data"  method="post">' +
		'<input type="file" name="upload">' +
		'<input type="submit" value="Upload Image File" />' +
		'</form>' +
		'</body>' +
		'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

	/*
	exec("find /", {timeout: 10000, maxBuffer: 20000*1024 },
		       	function (error, stdout, stderr) {
				response.writeHead(200, {"Content-Type": "text/plain"});
				response.write(stdout);
				response.end();
	});
	*/
}

function upload(response, request) {
	console.log("Request handler for 'upload' was called.\n");
	
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		console.log("parsing done");
		fs.renameSync(files.upload.path, "/tmp/test.png");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br>");
		response.write("<img src=' /show' />");
		response.end();
	});
}

function show(response) {
	console.log("Request handler 'show' was called.");
	fs.readFile("/tmp/test.png", "binary", function(error, file) {
		if (error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.home = home;
exports.start = start;
exports.upload = upload;
exports.show = show;
