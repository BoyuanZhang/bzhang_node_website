function start( response ) {
	console.log( "Request received for 'start' page");
	
	response.writeHead( 200, {"Content-type" : "text/plain"} );
	response.write( "Hello World!");
	response.end();
};

exports.start = start;