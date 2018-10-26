/*    
Aufgabe: Aufgabe 2
Name: Michelle Zeißner
Matrikel: 254665
Datum: 18.10.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe2 {
    window.addEventListener("load", main);

    let karten: string[] = ["B0", "B1", "B1", "B2", "B2", "B3", "B3", "B4", "B4", "B5", "B5", "B6", "B6", "B7", "B7", "B8", "B8", "B9", "B9", "R0", "R1", "R1", "R2", "R2", "R3", "R3", "R4", "R4", "R5", "R5", "R6", "R6", "R7", "R7", "R8", "R8", "R9", "R9", "G0", "G1", "G1", "G2", "G2", "G3", "G3", "G4", "G4", "G5", "G5", "G6", "G6", "G7", "G7", "G8", "G8", "G9", "G9", "Y0", "Y1", "Y1", "Y2", "Y2", "Y3", "Y3", "Y4", "Y4", "Y5", "Y5", "Y6", "Y6", "Y7", "Y7", "Y8", "Y8", "Y9", "Y9", "B Aussetzen","B Aussetzen","R Aussetzen","R Aussetzen","G Aussetzen","B Aussetzen","Y Aussetzen","Y Aussetzen","B Richtungswechsel", "B Richtungswechsel", "R Richtungswechsel", "R Richtungswechsel", "G Richtungswechsel", "G Richtungswechsel", "Y Richtungswechsel", "Y Richtungswechsel", "B+2", "B+2", "R+2", "R+2", "G+2", "G+2", "Y+2", "Y+2", "Wünscher", "Wünscher", "Wünscher", "Wünscher", "Wünscher + 4", "Wünscher + 4", "Wünscher + 4", "Wünscher + 4"];
    let maxHand: string = prompt("Gib die Anzahld einer Handkarten ein (Ziffer 5-9)");
    
    console.log(karten.length);
    function main(): void {
        /*Test*/
        console.log(karten);

        var nachziehstapel = document.createElement("div");
        nachziehstapel.innerText = "Nachziehstapel";
        document.body.appendChild(nachziehstapel);

        nachziehstapel.className = "nachziehstapel";

        var ablagestapel = document.createElement("div");
        ablagestapel.innerText = "Ablagestapel";
        document.body.appendChild(ablagestapel);

        ablagestapel.className = "ablagestapel";

        for (let i: number = 0; i < parseInt(maxHand); i++) {
            var handKarten = document.createElement("div");
            let t: number = Math.floor(Math.random() * karten.length);
            handKarten.innerText = karten[t].substring(1);
            document.body.appendChild(handKarten);

            let h: CSSStyleDeclaration = handKarten.style;
            handKarten.className = "handkarten "+ karten[t].substring(0,1);
            console.log(handKarten.className);
            console.log("Substring " + karten[t].substring(0,1));
            let z: number = i * 200;
            h.left = String(z) + "px";

            karten.splice(t, 1);
            console.log(karten);
        }
    }
}