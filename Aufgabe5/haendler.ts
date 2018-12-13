/*    
Aufgabe: Aufgabe 5
Name: Michelle Zeiﬂner
Matrikel: 254665
Datum: 26.10.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe5 {

    export interface HeteroPredef {
        preis: number;
        name: string;
        text:string;
    }

    export interface HomoVar {
        [key: string]: HeteroPredef[];
    }

    export let data: HomoVar = {
        "Baeume": [{ text: "Waehle eine Baumart aus", preis: 20, name: "Kiefer" }, { text: "Waehle eine Baumart aus",preis: 30, name: "Tanne" }, { text: "Waehle eine Baumart aus",preis: 45, name: "Fichte" }],
        "Kugeln": [{ text: "Waehle Kugeln aus", preis: 5, name: "Rot" }, { text: "Waehle Kugeln aus", preis: 30, name: "Gruen" }, { text: "Waehle Kugeln aus", preis: 30, name: "Blau" }],
        "Lametta": [{ text: "Waehle Lametta aus", preis: 10, name: "Lametta" }, { text: "Waehle Lametta  aus", preis: 30, name: "Lametta" }],
    }
}