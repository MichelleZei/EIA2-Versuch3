//wird ben�tigt, um die angkommende Url in key: value Paare zu teilen
interface AssocStringString {
    [key: string]: string;
}

//wird ben�tigt, um die eingegebenen Daten in die Datenbank einzutragen
interface StudentData {
    name: string;
    firstname: string;
    matrikel: number;
}

//wird ben�tigt, um nach der eingegebenen Matrikelnummer in der Datenbank zu suchen bzw zu entfernen 
interface Matrikelnummer{
    matrikel: number;    
}
