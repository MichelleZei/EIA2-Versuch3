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
            let response = JSON.parse(xhr.response);
            console.log(response);
            for (let key in response) {
                let div = document.createElement("div");
                div.innerText = "Hi";
                let button = document.getElementsByTagName("button")[0];
                button.appendChild(div);
            }
        }
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=SendData.js.map