var server = require( "./Server/server");
var requestHandler = require( "./Modules/requestHandler");
var router = require( "./Modules/router");

//Handler to different pages
var handler = new Array();
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/resume"] = requestHandler.resume;
handler["/blog"] = requestHandler.blog;
handler["/projects"] = requestHandler.projects;
handler["/contact"] = requestHandler.contact;

server.start(router.route, handler);