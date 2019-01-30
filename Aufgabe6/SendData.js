var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address = "http://ws1819.herokuapp.com";
    let inputs = document.getElementsByTagName("input");
    function init(_event) {
        console.log("Hwllo");
        let button = document.getElementsByTagName("button")[0];
        button.addEventListener("click", sendRequest);
    }
    function sendRequest() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + Aufgabe6.createURL, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //der string xhr.response wird in ein JavaScript Object verwandelt
            //{"name":"M", "fistname":"Z", "age":"21"} wird zu:
            // neme: "M", firstname:Z, age:21
            let response = JSON.parse(xhr.response);
            console.log(response);
            let div;
            let hZwei = document.createElement("h2");
            hZwei.innerText = "Deine Bestellung war erfolgreich. Du hast folgendes bestellt: ";
            let hEins = document.getElementsByTagName("h1")[0];
            let form = document.getElementsByTagName("form")[0];
            hEins.appendChild(hZwei);
            form.remove();
            for (let key in response) {
                div = document.createElement("div");
                div.innerText += key + ": " + response[key];
                let body = document.getElementsByTagName("body")[0];
                let button = document.getElementsByTagName("button")[0];
                body.appendChild(div);
            }
        }
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=SendData.js.map