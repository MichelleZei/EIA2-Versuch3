namespace Aufgabe6 {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address: string = "http://ws1819.herokuapp.com";
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    
    interface Objekt{
        [key: string]: number;    
    }
    
    function init(_event: Event): void {
        console.log("Hwllo");
        let button: HTMLButtonElement = document.getElementsByTagName("button")[0];
        button.addEventListener("click", sendRequest);
    }

    function sendRequest(): void {

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + createURL, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    
    function handleStateChange(_event: ProgressEvent): void{
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let response: Objekt = JSON.parse(xhr.response);
            console.log(response);
            for (let key in response){
                let div: HTMLDivElement = document.createElement("div");
                div.innerText = "Hi";
                
                let button: HTMLButtonElement = document.getElementsByTagName("button")[0];
                button.appendChild(div);
            }
            //alert("Deine Bestellung: " + response);
        }
    }
}