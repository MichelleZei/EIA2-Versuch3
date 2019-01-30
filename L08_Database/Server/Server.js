/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 */
"use strict";
const Http = require("http");
const Url = require("url");
const Database = require("./Database");
console.log("Server starting");
//env: info �ber die Umgebung
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
//Erstellt eine Instanz Server
let server = Http.createServer();
//der Server wird an ein Port gebunden, auf das er h�ren soll
server.addListener("listening", handleListen);
//der Server reagiert auf eine eingehende Nachricht
server.addListener("request", handleRequest);
//dem Server wird gesagt, auf welchen Port er h�ren soll
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
//zwei Parameter m�ssen dem handleRequest �bergeben werden: _request und _response
//IncomingMessage wird vom Server automatisch erstellt und als erster Parameter an den requestListener gesendet. Beinhaltet die url als string mit der der Server angefragt wurde(mit DateiPfad und dem search-string)
//ServerResponse wird vom Server automatisch erstellt und als zweiter Parameter an den requestListener gesendet. Beinhaltet setHeader, write und end().
function handleRequest(_request, _response) {
    console.log("Request received");
    //Die Url, die mit dem request ankommt, wird auseinander gelegt mit dem Typ AssocStringString und in query gespeichert
    // Url wird in ein JsonObjekt umgewandelt
    let query = Url.parse(_request.url, true).query;
    //Der Teil der Url mit "command" wird in command gespeichert
    var command = query["command"];
    switch (command) {
        //wenn command=insert
        case "insert":
            //dann werden die folgenden Teile der Url in der Variable student vom Typ StudentData gespeichert
            let student = {
                //Key name Value query["name"]
                name: query["name"],
                firstname: query["firstname"],
                matrikel: parseInt(query["matrikel"])
            };
            //In der Datenbank soll die Funktion insert aufgerufen werden. Die Variable student wird als Parameter �bergeben
            Database.insert(student);
            //Die Antwort wird aufgerufen und es werden zwei Parameter �bergeben
            respond(_response, "storing data");
            break;
        //wenn command=search    
        case "search":
            //der Teil der Url mit der Matrikelnummer wird in der Variable matrikel gespeichert
            let matrikel = { "matrikel": parseInt(query["matrikel"]) };
            //In der Datenbank wird die Funktion findOne aufgerufen mit den Parametern matrikel und findCallback
            Database.findOne(matrikel, findCallback);
            break;
        case "remove":
            let matrikelRemove = { "matrikel": parseInt(query["matrikel"]) };
            Database.removeOne(matrikelRemove, respondRemove);
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
    // findCallback is an inner function so that _response is in scope
    function findCallback(json) {
        //Es wird die Funktion respond aufgerufen, die zwei Parameter hat. Einmal _respond wird automatisch erstellt und json, in der die Studentendaten gespeichert sind
        respond(_response, json);
    }
}
//beim L�schen eines Dokuments der Datenbank wird kein _text: string �bergeben, daher braucht man eine extra Funktion
function respondRemove(_response) {
    //console.log("Preparing response: " + _text);
    _response.end();
}
function respond(_response, _text) {
    //console.log("Preparing response: " + _text);
    //schreibt einen Header in den Response-stream
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    //Sendet einen string an den Responsebody
    _response.write(_text);
    //Wie bei "write", aber der responsebody wird vervollst�ndigt und signalisiert dem Server die Antwort an den Client zu schicken
    //Diese Methode muss bei jeder response aufgerufen werden
    _response.end();
}
//# sourceMappingURL=Server.js.map