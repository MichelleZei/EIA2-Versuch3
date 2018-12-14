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
        // sendRequest();
    }
    function sendRequest() {
        //        interface Bestellung{
        //            baumart: string;
        //            rot: string;
        //            gruen:string;
        //            blau: string;
        //            lametta:string;    
        //        }
        //        
        //        let bestellung: Bestellung;
        //        
        //        bestellung = {
        //            baumart: inputs[0].value,
        //            rot: inputs[1].value,
        //            gruen: inputs[2].value,
        //            blau: inputs[3].value,
        //            lametta: inputs[4].value,  
        //        }
        //let stringifyJSON: string = JSON.stringify(bestellung);
        // JavaScript-JSON-Objekt wird in einen string umgewandelt
        //console.log(stringifyJSON);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + Aufgabe6.createURL, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let response = xhr.response.JSON.parse;
            alert("Deine Bestellung: " + xhr.response);
        }
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=SendData.js.map