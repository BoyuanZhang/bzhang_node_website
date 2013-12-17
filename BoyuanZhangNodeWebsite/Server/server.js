var http = require('http');
var url = require('url');

function start( router, handler ) 
{
	var server = http.createServer( function(request, response ) { 
		var path = url.parse( request.url ).pathname;
		console.log( 'request for ' + path + ' received.' );
		
		router( path, handler, response );
	});
	
	server.listen('1337');
	console.log( 'Server has started.');
};

exports.start = start;