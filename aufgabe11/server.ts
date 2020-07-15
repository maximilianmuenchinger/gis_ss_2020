import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace A11Server {

    let orders: Mongo.Collection;

    let port: number = Number(process.env.PORT);

    // wenn der port keinen Wert hat wird im number 8100 zugewiesen.
    if (!port)
        port = 8100;


    let databaseUrl: string = "mongodb+srv://User1:F8bHZC2XgkJ9Pekl@maxscluster.juvc9.mongodb.net/<dbname>?retryWrites=true&w=majority";
    
    startServer(port);
    connectToDatabse(databaseUrl);


    function startServer(_port: number | string): void {

        console.log("Starting server"); // in Konsole wird "starting server" ausgegeben


        // Instanz "server" wird erstellt, dann wird ein Server erstellt
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
        //Server soll port abhören
    }
    async function connectToDatabse(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Database connection", orders != undefined);
    }



    function handleListen(): void {
        console.log("Listening"); // in Konsole wird "Listening" ausgegeben wenn der addListener ausgeführt wird
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");  // in Konsole wird "i hear voices" ausgegeben wenn der addListener ausgeführt wird
        console.log("test1234");
        //response parameter

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
               
                    orders.insertOne(url.query);
                
            }
           else {
                _response.write(JSON.stringify(await orders.find().toArray()));
           }
        }
        _response.end();
    }
}
