var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    //Adresse zum Server
    let serverAddress = "https://ws1819.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        //Variablen f�r die Buttons deklarieren und darin den jeweiligen HTMLButton mit Hilfe der Id speichern
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        let removeButton = document.getElementById("remove");
        //EventListener auf den Buttons
        removeButton.addEventListener("click", remove);
        searchButton.addEventListener("click", search);
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    //Remove wird beim klicken auf den Remove-Button ausgel�st
    function remove(_event) {
        let input = document.getElementById("removeInput");
        let query = "command=remove";
        query += "&matrikel=" + input.value;
        console.log(query);
        sendRequest(query, handleRemoveResponse);
    }
    function handleRemoveResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //wenn die Request anfrage erledigt ist, erscheint eine alertbox
            alert("Du hast den Studenten mit der Matrikelnummer erfolgreich gel�scht.");
        }
    }
    //Search
    function search(_event) {
        let input = document.getElementById("searchInput");
        let query = "command=search";
        query += "&matrikel=" + input.value;
        console.log(query);
        sendRequest(query, handleSearchResponse);
    }
    function handleSearchResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //wenn die Request anfrage erledigt ist, erscheint eine alertbox mit dem namen, firstname und matrikel des gesuchten Studenten
            alert(xhr.response);
        }
    }
    //Insert
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //wenn die Request anfrage erledigt ist, erscheint eine alertbox mit "storing data"
            alert(xhr.response);
        }
    }
    //Refresh
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            //alle gefundenen Studenten werden in der textarea mit id, name, firstname und matrikel angezeigt
            let response = JSON.parse(xhr.response);
            for (let key in response) {
                for (let i = 0; i < response[key].length; i++) {
                    console.log(key + ": " + response[key][i].name + ": " + response[key][i].firstname + ": " + response[key][i].matrikel);
                    //output.value = xhr.response;
                    output.value = key + ": " + response[key][i].name + ": " + response[key][i].firstname + ": " + response[key][i].matrikel;
                }
            }
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map