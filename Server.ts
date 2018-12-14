import * as Http from "http";
import * as Url from "url";

namespace Aufgabe5 {
    console.log("Starting server");

    interface Bestellung {
        baumart: string;
        rot: string;
        gruen: string;
        blau: string;
        lametta: string;
    }

    interface Objekt {
        [key: string]: string;
    }

    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        //let query: Object = Url.parse(_request.url, true).query;
        //_response.write(_request.url);
        let url: Url.Url = Url.parse(_request.url, true);
        
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);
        
//        for (let key in url.query)
//            _response.write(key + ":" + url.query[key] + "<br/>");
//        console.log(_request.url);
        _response.end();

    }
}