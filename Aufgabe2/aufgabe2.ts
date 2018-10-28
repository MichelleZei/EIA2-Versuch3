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

    /*Das Array mit dem ganzen Deck eines Uno-Spiels wird deklariert und in der Variable karten gespeichert*/
    let karten: string[] = ["B0", "B1", "B1", "B2", "B2", "B3", "B3", "B4", "B4", "B5", "B5", "B6", "B6", "B7", "B7", "B8", "B8", "B9", "B9", "R0", "R1", "R1", "R2", "R2", "R3", "R3", "R4", "R4", "R5", "R5", "R6", "R6", "R7", "R7", "R8", "R8", "R9", "R9", "G0", "G1", "G1", "G2", "G2", "G3", "G3", "G4", "G4", "G5", "G5", "G6", "G6", "G7", "G7", "G8", "G8", "G9", "G9", "Y0", "Y1", "Y1", "Y2", "Y2", "Y3", "Y3", "Y4", "Y4", "Y5", "Y5", "Y6", "Y6", "Y7", "Y7", "Y8", "Y8", "Y9", "Y9", "B Aussetzen","B Aussetzen","R Aussetzen","R Aussetzen","G Aussetzen","B Aussetzen","Y Aussetzen","Y Aussetzen","B Richtungswechsel", "B Richtungswechsel", "R Richtungswechsel", "R Richtungswechsel", "G Richtungswechsel", "G Richtungswechsel", "Y Richtungswechsel", "Y Richtungswechsel", "B+2", "B+2", "R+2", "R+2", "G+2", "G+2", "Y+2", "Y+2", "Wünscher", "Wünscher", "Wünscher", "Wünscher", "Wünscher + 4", "Wünscher + 4", "Wünscher + 4", "Wünscher + 4"];
    /*Die Zahl, die der User eingibt, wird in der Variable maxHand gespeichert*/
    let maxHand: string = prompt("Gib die Anzahld einer Handkarten ein (Ziffer 5-9)");
    
    console.log(karten.length);
    
    function main(): void {
        /*Test*/
        console.log(karten);

        /*Ein neues Div-Element wird kreiert und in der Variable nachziehstapel gespeichert*/
        var nachziehstapel = document.createElement("div");
        /*In das neue div wird der Text Nachziehstapel geschrieben*/
        nachziehstapel.innerText = "Nachziehstapel";
        /*Das neue div wird dem body angehängt*/
        document.body.appendChild(nachziehstapel);
        /*Das neue div wird der Klasse nachziehstapel zugeordnet*/
        nachziehstapel.className = "nachziehstapel";

        /*Ein neues Div-Element wird kreiert und in der Variable ablagestapel gespeichert*/
        var ablagestapel = document.createElement("div");
        /*In das neue div wird der Text Ablagestapel geschrieben*/
        ablagestapel.innerText = "Ablagestapel";
        /*Das neue div wird dem body angehängt*/
        document.body.appendChild(ablagestapel);
        /*Das neue div wird der Klasse ablagestapel zugeordnet*/
        ablagestapel.className = "ablagestapel";

        /*Die Schleife läuft solange durch, bis die Anzahl der Handkarten mit der vom User eingegebene Zahl übereinstimmt*/
        for (let i: number = 0; i < parseInt(maxHand); i++) {
            /*Ein neues Div-Element wird kreiert und in der Variable handKarten gespeichert*/
            var handKarten = document.createElement("div");
            /*Es wird eine zufällige Zahl ermittelt, die zwischen 0 und der länge des Arrays karten liegt und in der Variable t gespeichert*/
            let t: number = Math.floor(Math.random() * karten.length);
            /*In das neue div wird der Text, der im Array karten an Stelle t gespeichert ist, geschrieben. Dabei wird der Erste Buchstabe weggelassen, der nur zur Ermittlung der Farbe benötigt wird*/
            handKarten.innerText = karten[t].substring(1);
            /*Das neue div wird dem body angehängt*/
            document.body.appendChild(handKarten);

            /*Das neue div wird den Klassen handkarten und der Klasse, die im Array karten an Stelle t gespeichert wurde (der erste Buchstabe), zugeordnet*/
            handKarten.className = "handkarten "+ karten[t].substring(0,1);
            console.log(handKarten.className);
            console.log("Substring " + karten[t].substring(0,1));
            /*Es wird eine Zahl ermittelt, die i*200 ist und in der Variable z gespeichert wird, um zu verhindern, dass alle Handkarten an einer Position sind und sich somit überlagern würden*/
            let z: number = i * 200;
            /*die Position (wie weit die Handkarte links vom Bildschirm eingerückt ist) der Handkarte wird mit Hilfe der Variable z bestimmt*/
            handKarten.style.left = String(z) + "px";

            /*Der Eintrag im Array karten an Stelle t, mit dem die Handkarte erstellt wurde, muss aus dem Array herausgenommen werden*/
            karten.splice(t, 1);
            console.log(karten);
        }
    }
}