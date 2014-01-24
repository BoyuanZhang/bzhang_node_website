var fs = require( "fs" );

//Request handler for the home / start page 
function home( response ) {
	console.log( "Request received for 'home' page");
	
	fs.readFile( __dirname +  "/../Client/index.html", "UTF-8", function( err, data )
	{
		if( err )
			throw err;
		else {
			response.writeHead( 200, {"Content-type" : "text/html"} );
			response.write( data);
			response.end();
		}
	});
};

//Request handler for the resume page
function resume( response ) {
	console.log( "Request received for 'resume' page" );
	
	fs.readFile(__dirname +  "/../Client/resumePage.html", "UTF-8", function( err, data )
	{
		if( err )
			throw err;
		else {
			response.writeHead( 200, {"Content-type" : "text/html"} );
			response.write( data);
			response.end();
		}
	});
};

//Request handler for the blog page
function blog( response ) {
	console.log( "Request received for 'blog' page" );
	
	//Redirect to this blog location for now until ghost blog implements and supports subdirectory domains
	//Code 302, since its found but at another location
	response.writeHead( 302, {"Location" : "http://localhost:2368"} );
	response.end();
};

//Load in CSS files
function loadCSS( response, path ) {
	//CSS files stored one directory up, inside client directory
	console.log( "Request received for css content within path: " + __dirname + "/../Client" + path);
	
	fs.readFile( __dirname + "/../Client" + path, "UTF-8", function( err, data )
	{
		if( err )
			throw err;
		else {
			response.writeHead( 200, {"Content-type" : "text/css"} );
			response.write( data);
			response.end();
		}
	});
};

//Load in Image files
function loadImg( response, path) {
	console.log( "Request received for image content within path: " + __dirname + "/../Client" + path );
	
	fs.readFile( __dirname + "/../Client" + path, function(err, data ) {
		if( err )
			throw err;
		else {
			response.writeHead( 200, {"content-type" : "image/gif"} );
			response.end( data, "binary");
		}
	});
}

exports.home = home;
exports.resume = resume;
exports.blog = blog;
exports.loadCSS = loadCSS;
exports.loadImg = loadImg;
