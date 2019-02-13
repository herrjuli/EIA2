namespace DatabaseClient {
    window.addEventListener("load", init);
    let serverAddress: string = "https://datenbankeia2.herokuapp.com/";
    //let serverAddress: string = "https://<your>.herokuapp.com/";    

    function init(_event: Event): void {
        console.log("Init");
       
    }

    export function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&scoreOfGame=" + document.getElementById("abgabe").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function playerDataSort(_a: GamerData, _b: GamerData): number {
        let returnNumber: number;
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

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLElement = document.getElementById("scores")[0];
            let scores: number[] = [];
            let responseAsJson: GamerData[] = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            for (let i: number = 0; i < responseAsJson.length; i++) {
                console.log(responseAsJson[i].name);
                output.innerHTML += "<p>" + responseAsJson[i].name + "|Score:" + responseAsJson[i].scoreOfGame + "<br>";
            }
        }
    }
}