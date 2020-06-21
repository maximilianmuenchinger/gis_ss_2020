"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server"); // in Konsole wird "starting server" ausgegeben
    let port = Number(process.env.PORT);
    // wenn der port keinen Wert hat wird im number 8100 zugewiesen.
    if (!port)
        port = 8100;
    // Instanz "server" wird erstellt, dann wird ein Server erstellt
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //Server soll port abhören
    function handleListen() {
        console.log("Listening"); // in Konsole wird "Listening" ausgegeben wenn der addListener ausgeführt wird
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // in Konsole wird "i hear voices" ausgegeben wenn der addListener ausgeführt wird
        //response parameter
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //response wird geschrieben
        _response.end(); //ende von response
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=bsp.js.map