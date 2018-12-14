"use strict";
const Http = require("http");
const Url = require("url");
var Aufgabe5;
(function (Aufgabe5) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //let query: Object = Url.parse(_request.url, true).query;
        //_response.write(_request.url);
        let url = Url.parse(_request.url, true);
        let jsonString = JSON.stringify(url.query);
        console.log(jsonString);
        //        for(let key in jsonString){
        //            
        //        }
        _response.write(jsonString);
        //        for (let key in url.query)
        //            _response.write(key + ":" + url.query[key] + "<br/>");
        //        console.log(_request.url);
        _response.end();
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Server.js.map