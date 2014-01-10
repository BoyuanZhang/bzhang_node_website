var fs = require( "fs" );

//Request handler for the home / start page 
function home( response ) {
	console.log( "Request received for 'home' page");
	
	var startPage = fs.readFile( "client/index.html", "UTF-8", function( err, data )
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
	
	var resumePage = fs.readFile( "client/resumePage.html", "UTF-8", function( err, data )
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

//Request handler for the projects 
function projects( response ) {
	console.log( "Request received for 'projects' page" );
	
	var projectsPage = fs.readFile( "client/projectsPage.html", "UTF-8", function( err, data )
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

//Request handler for the contact
function contact( response ) {
	console.log( "Request received for 'contact' page" );
	
	var contactPage = fs.readFile( "client/contactPage.html", "UTF-8", function( err, data )
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

//Load in CSS files
function loadCSS( response, path ) {
	//CSS files stored one directory up, inside client directory
	console.log( "Request received for css content within path: " + __dirname + "\\..\\client" + path);
	
	var cssPage = fs.readFile( __dirname + "\\..\\client" + path, "UTF-8", function( err, data )
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

exports.home = home;
exports.resume = resume;
exports.blog = blog;
exports.projects = projects;
exports.contact = contact;
exports.loadCSS = loadCSS;