/*
Aufgabe: Aufgabe 5
Name: Michelle Zei�ner
Matrikel: 254665
Datum: 26.10.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    console.log("Hello");
    window.addEventListener("load", init);
    let output;
    let auswahl;
    Aufgabe6.createURL = "?";
    function init(_event) {
        console.log(Aufgabe6.data);
        createBaumart(Aufgabe6.data);
        createKugeln(Aufgabe6.data);
        createLametta(Aufgabe6.data);
        createButton();
        //createOutput();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function createBaumart(_homoVar) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = Aufgabe6.data["Baeume"][1].text;
        let select = document.createElement("select");
        select.name = "Baumart";
        select.id = "baumart";
        for (let i = 0; i < Aufgabe6.data["Baeume"].length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe6.data["Baeume"][i].name;
            //option.value = data["Baeume"][i].preis.toString();
            option.setAttribute("preis", Aufgabe6.data["Baeume"][i].preis.toString());
            option.id = Aufgabe6.data["Baeume"][i].name;
            select.appendChild(option);
        }
        let form = document.getElementById("form");
        fieldset.appendChild(legend);
        form.appendChild(fieldset);
        console.log(document.body.children);
        fieldset.appendChild(select);
    }
    function createKugeln(_homoVar) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = Aufgabe6.data["Kugeln"][1].text;
        for (let i = 0; i < Aufgabe6.data["Kugeln"].length; i++) {
            let div = document.createElement("div");
            div.innerText += " " + Aufgabe6.data["Kugeln"][i].name;
            let input = document.createElement("input");
            input.type = "number";
            input.name = Aufgabe6.data["Kugeln"][i].name;
            input.setAttribute("preis", Aufgabe6.data["Kugeln"][i].preis.toString());
            input.step = "1";
            input.max = "10";
            input.min = "0";
            input.value = "0";
            fieldset.appendChild(div);
            div.appendChild(input);
        }
        let form = document.getElementById("form");
        fieldset.appendChild(legend);
        form.appendChild(fieldset);
    }
    function createLametta(_homoVar) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = Aufgabe6.data["Lametta"][1].text;
        for (let i = 0; i < Aufgabe6.data["Lametta"].length; i++) {
            let div = document.createElement("div");
            div.innerText += " " + Aufgabe6.data["Lametta"][i].name + " " + Aufgabe6.data["Lametta"][i].preis + "g";
            let input = document.createElement("input");
            input.type = "radio";
            input.name = Aufgabe6.data["Lametta"][i].name;
            input.id = i.toString();
            input.setAttribute("preis", Aufgabe6.data["Lametta"][i].preis.toString());
            let label = document.createElement("label");
            label.htmlFor = input.id;
            fieldset.appendChild(div);
            div.appendChild(input);
        }
        let form = document.getElementById("form");
        fieldset.appendChild(legend);
        form.appendChild(fieldset);
    }
    function createButton() {
        let button = document.createElement("button");
        button.type = "button";
        button.innerText = "Senden";
        let form = document.getElementById("form");
        form.appendChild(button);
    }
    function createOutput(_sum) {
        // ein neues OutputElement wird kreiert
        let output = document.createElement("output");
        // das Element bekommt eine ID
        output.id = "out";
        // un es wird "Warenkorb" und die Summe hineingeschrieben
        output.innerText = "Warenkorb: " + _sum;
        // das Form element wird geholt
        let form = document.getElementById("form");
        //dem Form wird das outputfeld angeh�ngt
        form.appendChild(output);
    }
    function handleChange(_event) {
        let inputs = document.body.querySelectorAll("input");
        console.log(inputs);
        let out = document.getElementsByTagName("output");
        console.log(out);
        if (out.length == 1) {
            deleteoutput();
            Aufgabe6.createURL = "?";
        }
        let sum = 0;
        //geht alle Inputs durch
        for (let i = 0; i < inputs.length; i++) {
            //holt sich den Preis von jedem input, der durch das Attribute "preis" gespeichert wurde
            let preis = parseFloat(inputs[i].getAttribute("preis"));
            //holt sich den Namen jedes Inputs
            let name = inputs[i].name;
            //Wenn der Preis nicht gleich null ist, dann
            if (inputs[i].getAttribute("preis") != null) {
                //Wird, wenn der Value des Inputs nicht leer ist und der Value gr��er null ist
                if (inputs[i].value != " " && parseFloat(inputs[i].value) > 0) {
                    //Der preis mal die anzahl der gewollten Artikel auf den Preis aufgerechnet
                    sum += preis * parseFloat(inputs[i].value);
                    console.log("Preis: " + preis * parseFloat(inputs[i].value) + " Name: " + name);
                    Aufgabe6.createURL += name + "=" + parseFloat(inputs[i].value) + "&";
                }
                // Wenn der ein input angeklickt wurde, dann
                if (inputs[i].checked) {
                    //wird auch dieser preis auf die Summe aufgerechnet
                    sum += preis;
                    Aufgabe6.createURL += name + "=" + preis + "&";
                }
            }
        }
        //holt sich alle option
        let option = document.body.querySelectorAll("option");
        //geht alle option durch
        for (let i = 0; i < option.length; i++) {
            //Wenn die option[i] angeklickt wurde, dann
            if (option[i].selected == true) {
                // holt man sich den preis durch getAttribute
                let optpreis = parseFloat(option[i].getAttribute("preis"));
                // und rechnet den preis auf die Summe auf
                sum += optpreis;
                Aufgabe6.createURL += option[i].id + "=" + parseFloat(option[i].getAttribute("preis")) + "&";
            }
        }
        console.log(Aufgabe6.createURL);
        // die Fkt createOutput wird aufgerufen mit sum als Parameter
        createOutput(sum);
    }
    function deleteoutput() {
        // das HTMLElement out holen
        let deleteout = document.getElementById("out");
        //und es l�schen
        deleteout.remove();
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=createForm.js.map