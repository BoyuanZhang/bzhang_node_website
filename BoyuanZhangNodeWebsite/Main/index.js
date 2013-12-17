var server = require( "../Server/server");
var requestHandler = require( "../Modules/requestHandler");
var router = require( "../Modules/router");

var handler = new Array();
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;

server.start(router.route, handler);