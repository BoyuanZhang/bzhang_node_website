var http = require('http'),
	url = require('url'),
	fs = require('fs');

function start( router, handler ) 
{
	var server = http.createServer( function(request, response ) { 
		//Get url path
		var path = url.parse( request.url ).pathname;
		//log to console
		console.log( 'request for ' + path + ' received.' );
		
		//route to specified path if possible, display error if no such path
		router( path, handler, response );
	});
	
	server.listen('1337');
	console.log( 'Server has started.');
};

exports.start = start;