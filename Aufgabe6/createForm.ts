/*    
Aufgabe: Aufgabe 5
Name: Michelle Zeiﬂner
Matrikel: 254665
Datum: 26.10.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {
    console.log("Hello");

    window.addEventListener("load", init);
    let output: HTMLElement
    let auswahl: HeteroPredef[];
    export let createURL: string = "?";
    
    function init(_event: Event): void {
        console.log(data);


        createBaumart(data);
        createKugeln(data);
        createLametta(data);
        createButton();
        //createOutput();
        let fieldsets: NodeListOf<HTMLFieldSetElement> =
            document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function createBaumart(_homoVar: HomoVar): void {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");

        legend.innerText = data["Baeume"][1].text;

        let select: HTMLSelectElement = document.createElement("select");
        select.name = "Baumart";
        select.id = "baumart";


        for (let i: number = 0; i < data["Baeume"].length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = data["Baeume"][i].name;
            //option.value = data["Baeume"][i].preis.toString();
            option.setAttribute("preis", data["Baeume"][i].preis.toString());
            option.id = data["Baeume"][i].name;
            select.appendChild(option);

        }

        let form: HTMLElement = document.getElementById("form");
        fieldset.appendChild(legend);
        form.appendChild(fieldset);
        console.log(document.body.children);
        fieldset.appendChild(select);
    }

    function createKugeln(_homoVar: HomoVar): void {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");

        legend.innerText = data["Kugeln"][1].text;

        for (let i: number = 0; i < data["Kugeln"].length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.innerText += " " + data["Kugeln"][i].name;
            let input: HTMLInputElement = document.createElement("input");
            input.type = "number";
            input.name = data["Kugeln"][i].name;
            input.setAttribute("preis", data["Kugeln"][i].preis.toString());
            input.step = "1";
            input.max = "10";
            input.min = "0";
            input.value = "0";
            fieldset.appendChild(div);
            div.appendChild(input);
        }
        let form: HTMLElement = document.getElementById("form");
        fieldset.appendChild(legend);
        form.appendChild(fieldset);
    }

    function createLametta(_homoVar: HomoVar): void {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");

        legend.innerText = data["Lametta"][1].text;

        for (let i: number = 0; i < data["Lametta"].length; i++) {
            let div: HTMLDivElement = document.createElement("div");
            div.innerText += " " + data["Lametta"][i].name + " " + data["Lametta"][i].preis + "g";
            let input: HTMLInputElement = document.createElement("input");
            input.type = "radio";
            input.name = data["Lametta"][i].name;
            input.id = i.toString();
            input.setAttribute("preis", data["Lametta"][i].preis.toString());
            let label: HTMLLabelElement = document.createElement("label");
            label.htmlFor = input.id;

            fieldset.appendChild(div);
            div.appendChild(input);
        }

        let form: HTMLElement = document.getElementById("form");
        fieldset.appendChild(legend);
        form.appendChild(fieldset);
    }

    function createButton(): void {
        let button: HTMLButtonElement = document.createElement("button");
        button.type = "button";
        button.innerText = "Senden";

        let form: HTMLElement = document.getElementById("form");
        form.appendChild(button);
    }

    function createOutput(_sum: number): void {

        let output: HTMLElement = document.createElement("output");
        output.id = "out";
        output.innerText = "Warenkorb: " + _sum;

        let form: HTMLElement = document.getElementById("form");
        form.appendChild(output);
    }

    function handleChange(_event: Event): void {

        let inputs: NodeListOf<HTMLInputElement> = <NodeListOf<HTMLInputElement>>document.body.querySelectorAll("input");
        console.log(inputs);

        let out: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>document.getElementsByTagName("output");
        console.log(out);
        if (out.length == 1) {

            deleteoutput();
            createURL = " ";
        }

        let sum: number = 0;

        for (let i: number = 0; i < inputs.length; i++) {
            let preis: number = parseFloat(inputs[i].getAttribute("preis"));
            let name: string = inputs[i].name;
            if (inputs[i].getAttribute("preis") != null) {
                if (inputs[i].value != " " && parseFloat(inputs[i].value) > 0) {
                    sum += preis * parseFloat(inputs[i].value);
                    console.log("Preis: " + preis * parseFloat(inputs[i].value) + " Name: " + name);
                    createURL += name + "=" + parseFloat(inputs[i].value) + "&";
                }
                if (inputs[i].checked) {
                    sum += preis;
                    createURL += name + "=" + preis + "&";

                }
            }
        }

        let option: NodeListOf<HTMLOptionElement> = <NodeListOf<HTMLOptionElement>>document.body.querySelectorAll("option");
        for (let i: number = 0; i < option.length; i++) {
            if (option[i].selected == true) {

                let optpreis: number = parseFloat(option[i].getAttribute("preis"));
                sum += optpreis;
                createURL += option[i].id + "=" + parseFloat(option[i].getAttribute("preis")) + "&";
            }
        }
        console.log(createURL);
        createOutput(sum);
    }

    function deleteoutput(): void {
        let deleteout: HTMLElement = document.getElementById("out");

        deleteout.remove();
    }

}