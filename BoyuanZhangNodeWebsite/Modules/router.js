var pathURL = require("path");

function route( path, handle, response ) {
	console.log( 'About to route request for ' + path );
	
	//check if extension name is a script or image
	if( pathURL.extname( path) == ".css" || pathURL.extname( path) == ".js" ||
		pathURL.extname(path) == ".jpg" || pathURL.extname(path) == ".png")
	{
		handle[pathURL.extname(path)]( response, path);
	}
	//Does the handle exist to the specified path?
	else if( typeof handle[path] === "function" ) {
		//Exists call the proper handler
		handle[path]( response);
	}
	else {
		//Does not exist display error page
		console.log( "Request handler for page " + path + " could not be found! ");
		response.writeHead( 404, {"Content-Type" : "text/plain" } );
		response.write( "404 Page not found!");
		response.end();
	}
};

exports.route = route;