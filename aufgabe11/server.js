"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A11Server;
(function (A11Server) {
    let orders;
    let port = Number(process.env.PORT);
    // wenn der port keinen Wert hat wird im number 8100 zugewiesen.
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://User1:F8bHZC2XgkJ9Pekl@maxscluster.juvc9.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabse(databaseUrl);
    function startServer(_port) {
        console.log("Starting server"); // in Konsole wird "starting server" ausgegeben
        // Instanz "server" wird erstellt, dann wird ein Server erstellt
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
        //Server soll port abhören
    }
    async function connectToDatabse(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Eisdiele_West").collection("Bestellungen");
        console.log("Database connection", orders != undefined);
    }
    function handleListen() {
        console.log("Listening"); // in Konsole wird "Listening" ausgegeben wenn der addListener ausgeführt wird
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!"); // in Konsole wird "i hear voices" ausgegeben wenn der addListener ausgeführt wird
        console.log("test1234");
        //response parameter
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/senden") {
                orders.insertOne(url.query);
            }
            else {
                _response.write(JSON.stringify(await orders.find().toArray()));
            }
            if (url.pathname == "/empty") {
                orders.remove({});
            }
        }
        _response.end();
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map