namespace DatabaseClient {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress: string = "https://ws1819.herokuapp.com/";

    function init(_event: Event): void {

        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");
        let removeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("remove");
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
    
    //Remove
    function remove(_event: Event): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("removeInput");
        let query: string = "command=remove";
        query += "&matrikel=" + input.value;
        console.log(query);
        sendRequest(query, handleRemoveResponse);
    }
    
    function handleRemoveResponse(_event: ProgressEvent): void{
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
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
    
    function handleSearchResponse(_event: ProgressEvent): void{
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
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
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}