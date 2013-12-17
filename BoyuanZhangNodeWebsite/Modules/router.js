function route( path, handle, response ) {
	console.log( 'About to route request for ' + path );
	
	if( typeof handle[path] === "function" ) {
		handle[path]( response);
	}
	else {
		console.log( "Request handler for page " + path + " could not be found! ");
		response.writeHead( 404, {"Content-Type" : "text/plain" } );
		response.write( "404 Page not found!");
		response.end();
	}
};

exports.route = route;