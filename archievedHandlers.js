/*
 * v0.1 - Start file upload form for tutorial server
 */
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
/*
 * v0.1 - Upload handler for tutorial server
 */
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

/*
 * v0.1 - Show handler for tutorial web server
 */
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
