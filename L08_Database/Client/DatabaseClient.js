var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://ws1819.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        let removeButton = document.getElementById("remove");
        removeButton.addEventListener("click", remove);
        searchButton.addEventListener("click", search);
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function remove(_event) {
        let input = document.getElementById("removeInput");
        let query = "command=remove";
        query += "&matrikel=" + input.value;
        console.log(query);
        sendRequest(query, handleSearchResponse);
    }
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
            alert(xhr.response);
        }
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
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
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map