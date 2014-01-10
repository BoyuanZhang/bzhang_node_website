var server = require( "./Server/server"),
	requestHandler = require( "./Modules/requestHandler"),
	router = require( "./Modules/router");

//Handler to different pages
var handler = new Array();
handler["/"] = requestHandler.home;
handler["/home"] = requestHandler.home;
handler["/resume"] = requestHandler.resume;
handler["/blog"] = requestHandler.blog;
handler["/projects"] = requestHandler.projects;
handler["/contact"] = requestHandler.contact;

//For loading css / js files
handler[".css"] = requestHandler.loadCSS;

server.start(router.route, handler);