import * as Http from "http";
import * as Url from "url";

export namespace A08Server {

  console.log("Starting server"); // in Konsole wird "starting server" ausgegeben
  let port: number = Number(process.env.PORT);

  // wenn der port keinen Wert hat wird im number 8100 zugewiesen.
  if (!port)
    port = 8100;

  // Instanz "server" wird erstellt, dann wird ein Server erstellt
  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);
  //Server soll port abhören

  function handleListen(): void {
    console.log("Listening"); // in Konsole wird "Listening" ausgegeben wenn der addListener ausgeführt wird
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");  // in Konsole wird "i hear voices" ausgegeben wenn der addListener ausgeführt wird

    //response parameter

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      if (url.pathname == "/html") {
        for (let key in url.query) {
          _response.write(key + ":" + url.query[key] + "<br/>");
        }
      }
      if (url.pathname == "/json") {
      let jsonString: string = JSON.stringify(url.query);

      _response.write(jsonString);
       }
    }
    _response.end();
  }
}