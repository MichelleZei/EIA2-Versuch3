/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let students: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    //Url zur Datenbank
    databaseURL = "mongodb://Nina:123456a@ds149711.mlab.com:49711/eia2";
    //databaseURL = "mongodb://testuser:testpassword@ds129532.mlab.com:29532/eia2";
    
    //Wie hei�t die Datenbank
    databaseName = "eia2";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);

// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e: Mongo.MongoError, _db: Mongo.Db): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _db.db(databaseName);
        //es wird eine Collection students angelegt und in der Variable students gespeichert
        students = db.collection("students");
    }
}

export function insert(_doc: StudentData): void {
    // try insertion then activate callback "handleInsert"
    students.insertOne(_doc, handleInsert);
}

export function findOne(_matrikel: Matrikelnummer, _callback: Function): void {
    // cursor points to the retreived set of documents in memory
    // student.find ist der Suchbefehl
    // der gefundene Student wird in cursor gespeichert und beinhaltet eine Untermenge von Daten des Suchbefehls
    var cursor: Mongo.Cursor = students.find(_matrikel);
    // try to convert to array, then activate callback "prepareAnswer"
    //kreiert ein JavaScript Array von den Objekten des Cursors
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}

export function removeOne(_matrikel: Matrikelnummer, _callback: Function): void {
    // cursor points to the retreived set of documents in memory
    students.deleteOne(_matrikel);
    // try to convert to array, then activate callback "prepareAnswer"
    //cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
//            //back to _callback
            _callback();
    }
}


// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = students.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: StudentData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}
