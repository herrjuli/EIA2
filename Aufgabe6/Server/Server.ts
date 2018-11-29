import * as Http from "http";
// Übernimmt die node.d.ts Datei und mit HTTP from "http" kann auf die HTTP-Objekte aus node.d.ts zugegriffen werden 
namespace L06_SendData {
    // Erstellt einen Raum namens L06_SendData, in dem alle Variablennamen neu vergeben werden können und nur für diesen gelten.
    console.log("Starting server"); 
    // Die Konsole gibt "Starting server" aus.
    let port: number = process.env.PORT;
    // Die Varbiable port wird als number deklariert und bekommt den Wert des Ports des Heroku-Server. 
    if (port == undefined)
        // Wenn die Variable port undefined ist, 
        port = 8100;
    //  wird der Wert der Variable auf 8100 gesetzt.
    let server: Http.Server = Http.createServer();
    // Wir deklariern eine Variable namens server als HTTP.Server und geben ihr den Wert HTTP.createServer()
    server.addListener("request", handleRequest);
    // Wir geben der Varible server einen Listener, der sobald die Seit aufgerufen wird, die Funktion handleRequest ausführt.
    server.addListener("listening", handleListen);
    // Zusätzlich bekommt server den Listener listening, was bedeutet, dass solange der Nutzer darauf zugreift handleListen ausgeführt wird.
    server.listen(port);
    // spezifiziert, dass der server auf den port hört
    function handleListen(): void {
        // Es wird die Funktion handleListen erstellt, die keinen Rückgabewert besitzt.
        console.log("Listening");
        // Die Konsole gibt Listening aus.
    }
    // Ende der Funktion.

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        // Funktion handleRequest wird erstellt, auch ohne einen Rückgabewert.
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
    // Ende der Funktion.
}
// Ende des namespace