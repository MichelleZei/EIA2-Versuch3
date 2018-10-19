/*    
Aufgabe: Aufgabe 2
Name: Michelle Zeiﬂner
Matrikel: 254665
Datum: 18.10.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe2 {
    window.addEventListener("load", main);

    let karten: string[] = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10", "11", "11", "12", "12", "13", "13", "14", "14", "15", "15", "16", "16"];

    function main(): void {
        /*Test*/
        console.log(karten);
        
        let maxHand: string = prompt("Gib die Anzahld einer Handkarten ein (Ziffer 5-9)");

        var ueberschrift = document.createElement("h1");
        ueberschrift.innerText = "UNO";
        document.body.appendChild(ueberschrift);
        
        var nachziehstapel = document.createElement("div");
        nachziehstapel.innerText = "Nachziehstapel";
        document.body.appendChild(nachziehstapel);
        
        let n: CSSStyleDeclaration = nachziehstapel.style;
        n.position = "absolute";
        n.height = "200px";
        n.width = "100px";
        n.backgroundColor = "red";
        n.cssFloat = "left";
        n.margin = "5px";
        n.padding = "5px";
        n.left = "200px";
        
        var ablagestapel = document.createElement("div");
        ablagestapel.innerText = "Ablagestapel";
        document.body.appendChild(ablagestapel);
        
        let a: CSSStyleDeclaration = ablagestapel.style;
        a.position = "absolute";
        a.height = "200px";
        a.width = "100px";
        a.backgroundColor = "green";
        a.cssFloat = "left";
        a.margin = "5px";
        a.padding = "5px";
        a.left = "500px"; 
        
        for(let i: number = 0; i < parseInt(maxHand); i++){
            var handKarten = document.createElement("div");
            let t: number = Math.floor(Math.random() * 32);
            handKarten.innerText = karten[t];
            console.log(t);
            document.body.appendChild(handKarten);
        
            let h: CSSStyleDeclaration = handKarten.style;
            let z: number = i*200; 
            h.border = "1px";
            h.borderColor = "black";
            h.borderStyle = "solid";
            h.position = "absolute";
            h.height = "200px";
            h.width = "100px";
/*            h.backgroundColor = "blue";*/
            h.cssFloat = "left";
            h.margin = "5px";
            h.padding = "5px";
            h.top = "350px";
            h.left = String(z) + "px";
            
            karten.splice(t, 1);
            console.log(karten);
        }
    }
}