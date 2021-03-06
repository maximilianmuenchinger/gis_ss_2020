"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
var A09Server;
(function (A09Server) {
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
        console.log("test1234");
        //response parameter
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
            if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log(jsonString);
            }
        }
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=bsp.js.map