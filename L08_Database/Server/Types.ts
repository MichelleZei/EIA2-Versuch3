//wird benötigt, um die angkommende Url in key: value Paare zu teilen
interface AssocStringString {
    [key: string]: string;
}

//wird benötigt, um die eingegebenen Daten in die Datenbank einzutragen
interface StudentData {
    name: string;
    firstname: string;
    matrikel: number;
}

//wird benötigt, um nach der eingegebenen Matrikelnummer in der Datenbank zu suchen bzw zu entfernen 
interface Matrikelnummer{
    matrikel: number;    
}
