//Request handler for the home / start page 
function start( response ) {
	console.log( "Request received for 'start' page");
	
	response.writeHead( 200, {"Content-type" : "text/plain"} );
	response.write( "Start Page");
	response.end();
};

//Request handler for the resume page
function resume( response ) {
	console.log( "Request received for 'resume' page" );
	
	response.writeHead( 200, {"Content-type" : "text/plain"} );
	response.write( "Resume Page");
	response.end();
};

//Request handler for the blog page
function blog( response ) {
	console.log( "Request received for 'blog' page" );
	
	//Redirect to this blog location for now until ghost blog implements and supports subdirectory domains
	response.writeHead( 302, {"Location" : "http://localhost:2368/ghost"} );
	response.end();
};

//Request handler for the projects 
function projects( response ) {
	console.log( "Request received for 'projects' page" );
	
	response.writeHead( 200, {"Content-type" : "text/plain"} );
	response.write( "projects Page");
	response.end();
};

//Request handler for the contact
function contact( response ) {
	console.log( "Request received for 'contact' page" );
	
	response.writeHead( 200, {"Content-type" : "text/plain"} );
	response.write( "Contact Page");
	response.end();
};

exports.start = start;
exports.resume = resume;
exports.blog = blog;
exports.projects = projects;
exports.contact = contact;