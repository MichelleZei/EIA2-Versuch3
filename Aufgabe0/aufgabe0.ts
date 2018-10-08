/*    
Aufgabe: Aufgabe 0
Name: Michelle Zeißner
Matrikel: 254665
Datum: 08.10.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe0{
    //Nachdem die Seite geladen hat, wird die Funktion "main" aufgerufen.
    document.addEventListener("DOMContentLoaded", main);
    
    //Variable mit dem Namen "name" mit dem Typ "string wird angelegt.
    var name: string;
    
    //Funktion enthält die Anweisungen, die durchlaufen werden, wenn die Funktion aufgerufen wird.
    function main(): void{
        
        //in der Variable "name" wird das gespeichert, was der User in das prompt-Feld eingibt. In diesem Fall seinen Namen.
        name = prompt("Gib deinen Namen ein");
        //Es wird auf den ersten Tag Namens "span" zugegriffen. In dieses wird "Hallo" plus der gespeicherte Name hineingeschrieben.
        //Es erscheint eine HTML-Seite, auf der der User mit seinem eingegebenen Namen begrüßt wird.
        document.getElementsByTagName("span")[0].innerHTML += "Hallo " + name;
        
        
        //Kontrolle, ob die html die (richtige) ts-Datei aufruft.
        console.log("Hello World");
    }
}