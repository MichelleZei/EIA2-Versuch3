namespace Aufgabe6 {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address: string = "http://ws1819.herokuapp.com";
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    
    function init(_event: Event): void {
        console.log("Hwllo");
        let button: HTMLButtonElement = document.getElementsByTagName("button")[0];
        button.addEventListener("click", sendRequest);
       // sendRequest();
    }

    function sendRequest(): void {
        
        interface Bestellung{
            baumart: string;
            rot: string;
            gruen:string;
            blau: string;
            lametta:string;    
        }
        
        let bestellung: Bestellung;
        
        bestellung = {
            baumart: inputs[0].value,
            rot: inputs[1].value,
            gruen: inputs[2].value,
            blau: inputs[3].value,
            lametta: inputs[4].value,  
        }
        
        let stringifyJSON: string = JSON.stringify(bestellung);
        // JavaScript-JSON-Objekt wird in einen string umgewandelt
        console.log(stringifyJSON);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?" + stringifyJSON, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    
    function handleStateChange(_event: ProgressEvent): void{
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            
            alert("Deine Bestellung: " + xhr.response);
        }
    }
}