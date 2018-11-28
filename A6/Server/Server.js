"use strict";
var Http = require("http");
// �bernimmt die node.d.ts Datei und mit HTTP from "http" kann auf die HTTP-Objekte aus node.d.ts zugegriffen werden 
var L06_SendData;
(function (L06_SendData) {
    // Erstellt einen Raum namens L06_SendData, in dem alle Variablennamen neu vergeben werden k�nnen und nur f�r diesen gelten.
    console.log("Starting server");
    // Die Konsole gibt "Starting server" aus.
    var port = process.env.PORT;
    // Die Varbiable port wird als number deklariert und bekommt den Wert des Ports des Heroku-Server. 
    if (port == undefined)
        // Wenn die Variable port undefined ist, 
        port = 8100;
    //  wird der Wert der Variable auf 8100 gesetzt.
    var server = Http.createServer();
    // Wir deklariern eine Variable namens server als HTTP.Server und geben ihr den Wert HTTP.createServer()
    server.addListener("request", handleRequest);
    // Wir geben der Varible server einen Listener, der sobald die Seit aufgerufen wird, die Funktion handleRequest ausf�hrt.
    server.addListener("listening", handleListen);
    // Zus�tzlich bekommt server den Listener listening, was bedeutet, dass solange der Nutzer darauf zugreift handleListen ausgef�hrt wird.
    server.listen(port);
    // spezifiziert, dass der server auf den port h�rt
    function handleListen() {
        // Es wird die Funktion handleListen erstellt, die keinen R�ckgabewert besitzt.
        console.log("Listening");
        // Die Konsole gibt Listening aus.
    }
    // Ende der Funktion.
    function handleRequest(_request, _response) {
        // Funktion handleRequest wird erstellt, auch ohne einen R�ckgabewert.
        console.log("I hear voices!");
        // I hear voices! wird in die Konsole geschrieben.
        _response.setHeader("content-type", "text/html; charset=utf-8");
        // setzt "content-type" und "text/html; charset=utf-8" in header
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // setzt Access-Control-Allow-Origin und * in den header.
        _response.write(_request.url);
        //  _response greift auf url von _request zu.
        _response.end();
        // _response endet
    }
})(L06_SendData || (L06_SendData = {}));
// Ende des namespace 
//# sourceMappingURL=Server.js.map