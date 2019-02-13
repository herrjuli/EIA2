var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://datenbankeia2.herokuapp.com/";
    //let serverAddress: string = "https://<your>.herokuapp.com/";    
    function init(_event) {
        console.log("Init");
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&scoreOfGame=" + document.getElementById("abgabe").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    DatabaseClient.insert = insert;
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    DatabaseClient.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function playerDataSort(_a, _b) {
        let returnNumber;
        if (_a.scoreOfGame > _b.scoreOfGame) {
            returnNumber = 1;
        }
        else if (_a.scoreOfGame < _b.scoreOfGame) {
            returnNumber = -1;
        }
        else {
            returnNumber = 0;
        }
        return returnNumber;
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("scores")[0];
            let scores = [];
            let responseAsJson = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            for (let i = 0; i < responseAsJson.length; i++) {
                console.log(responseAsJson[i].name);
                output.innerHTML += "<p>" + responseAsJson[i].name + "|Score:" + responseAsJson[i].scoreOfGame + "<br>";
            }
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map