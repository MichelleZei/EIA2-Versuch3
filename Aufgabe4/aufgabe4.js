/*
Aufgabe: Aufgabe 4
Name: Michelle Zei�ner
Matrikel: 254665
Datum: 26.10.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe4;
(function (Aufgabe4) {
    console.log("Hello");
    window.addEventListener("load", init);
    let output;
    let auswahl;
    function init(_event) {
        console.log(Aufgabe4.data);
        createBaumart(Aufgabe4.data);
        createKugeln(Aufgabe4.data);
        createLametta(Aufgabe4.data);
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
        legend.innerText = Aufgabe4.data["Baeume"][1].text;
        let select = document.createElement("select");
        select.name = "Baumart";
        select.id = "baumart";
        for (let i = 0; i < Aufgabe4.data["Baeume"].length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe4.data["Baeume"][i].name;
            //option.value = data["Baeume"][i].preis.toString();
            option.setAttribute("preis", Aufgabe4.data["Baeume"][i].preis.toString());
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
        legend.innerText = Aufgabe4.data["Kugeln"][1].text;
        for (let i = 0; i < Aufgabe4.data["Kugeln"].length; i++) {
            let div = document.createElement("div");
            div.innerText += " " + Aufgabe4.data["Kugeln"][i].name;
            let input = document.createElement("input");
            input.type = "number";
            input.name = Aufgabe4.data["Kugeln"][i].name;
            input.setAttribute("preis", Aufgabe4.data["Kugeln"][i].preis.toString());
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
        legend.innerText = Aufgabe4.data["Lametta"][1].text;
        for (let i = 0; i < Aufgabe4.data["Lametta"].length; i++) {
            let div = document.createElement("div");
            div.innerText += " " + Aufgabe4.data["Lametta"][i].name + " " + Aufgabe4.data["Lametta"][i].preis + "g";
            let input = document.createElement("input");
            input.type = "radio";
            input.name = Aufgabe4.data["Lametta"][i].name;
            input.id = i.toString();
            input.setAttribute("preis", Aufgabe4.data["Lametta"][i].preis.toString());
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
        button.type = "submit";
        button.innerText = "Senden";
        let form = document.getElementById("form");
        form.appendChild(button);
    }
    function createOutput(_sum) {
        let output = document.createElement("output");
        output.id = "out";
        output.innerText = "Warenkorb: " + _sum;
        let form = document.getElementById("form");
        form.appendChild(output);
    }
    function handleChange(_event) {
        let inputs = document.body.querySelectorAll("input");
        console.log(inputs);
        let out = document.getElementsByTagName("output");
        console.log(out);
        if (out.length == 1) {
            deleteoutput();
        }
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            let preis = parseFloat(inputs[i].getAttribute("preis"));
            if (inputs[i].getAttribute("preis") != null) {
                if (inputs[i].value != " " && parseFloat(inputs[i].value) > 0) {
                    sum += preis * parseFloat(inputs[i].value);
                    console.log("Preis " + preis);
                }
                if (inputs[i].checked) {
                    sum += preis;
                }
            }
        }
        let option = document.body.querySelectorAll("option");
        for (let i = 0; i < option.length; i++) {
            if (option[i].selected == true) {
                let optpreis = parseFloat(option[i].getAttribute("preis"));
                sum += optpreis;
            }
        }
        createOutput(sum);
    }
    function deleteoutput() {
        let deleteout = document.getElementById("out");
        deleteout.remove();
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=aufgabe4.js.map