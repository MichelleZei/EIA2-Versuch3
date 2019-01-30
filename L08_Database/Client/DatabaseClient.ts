namespace DatabaseClient {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    //Adresse zum Server
    let serverAddress: string = "https://ws1819.herokuapp.com/";

    interface Objekt {
        [key: string]: StudentData[];
    }

    function init(_event: Event): void {

        console.log("Init");

        //Variablen für die Buttons deklarieren und darin den jeweiligen HTMLButton mit Hilfe der Id speichern
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");
        let removeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("remove");
        //EventListener auf den Buttons
        removeButton.addEventListener("click", remove);
        searchButton.addEventListener("click", search);
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    //Remove wird beim klicken auf den Remove-Button ausgelöst
    function remove(_event: Event): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("removeInput");
        let query: string = "command=remove";
        query += "&matrikel=" + input.value;
        console.log(query);
        sendRequest(query, handleRemoveResponse);
    }

    function handleRemoveResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //wenn die Request anfrage erledigt ist, erscheint eine alertbox
            alert("Du hast den Studenten mit der Matrikelnummer erfolgreich gelöscht.");
        }
    }

    //Search
    function search(_event: Event): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("searchInput");
        let query: string = "command=search";
        query += "&matrikel=" + input.value;
        console.log(query);
        sendRequest(query, handleSearchResponse);
    }

    function handleSearchResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //wenn die Request anfrage erledigt ist, erscheint eine alertbox mit dem namen, firstname und matrikel des gesuchten Studenten
            alert(xhr.response);
        }
    }


    //Insert
    function insert(_event: Event): void {

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //wenn die Request anfrage erledigt ist, erscheint eine alertbox mit "storing data"
            alert(xhr.response);
        }
    }

    //Refresh
    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];

            //alle gefundenen Studenten werden in der textarea mit id, name, firstname und matrikel angezeigt
            
            let response: Objekt = JSON.parse(xhr.response);
            for (let key in response) {
                for (let i: number = 0; i < response[key].length; i++) {
                    console.log(key + ": " + response[key][i].name + ": " + response[key][i].firstname + ": " + response[key][i].matrikel );
                    //output.value = xhr.response;
                    output.value = key + ": " + response[key][i].name + ": " + response[key][i].firstname + ": " + response[key][i].matrikel ;
                }
            }

            //            let responseAsString: string = JSON.stringify(responseAsJson);
            //            var arrayOfString = responseAsString.split('"');
            //            arrayOfString.splice(0,5);
            //            arrayOfString.splice(1,1);
            //            arrayOfString.splice(0,5);
            //            arrayOfString.splice(0,5);
            //            arrayOfString.splice(0,5);
            // console.log("Number :" + arrayOfString.length + " Elements :" + arrayOfString.join("/"));
            //            output.innerText += arrayOfString;
        }
    }
}