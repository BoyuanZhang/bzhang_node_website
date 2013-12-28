function route( path, handle, response ) {
	console.log( 'About to route request for ' + path );
	
	//Does the handle exist to the specified path?
	if( typeof handle[path] === "function" ) {
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