function addInArray() { //fonction qui ajoute un élément dans le tableau et test si un chiffre à bien été saisi.
    let inputElt = document.getElementById("arrayInput");

    if (inputElt.value === "") {
        alert("Vous n'avez pas rentré de chiffres");
    } else {
        inputElt.value = Math.trunc(inputElt.value); //Math.trunc arrondi à l'entier inférieur pour eviter les nombres décimaux.
        array1.push(inputElt.value);
        let liElt = document.createElement("li");
        liElt.textContent = inputElt.value;
        document.getElementById("showArray").appendChild(liElt);
    }
    inputElt.value = "";
}

function deleteArray() { //Vide le tableau
    array1.splice(0, array1.length);
    document.getElementById("showArray").innerHTML = "";
    document.getElementById("resultSum").innerHTML = "";
    document.getElementById("resultPosNeg").innerHTML = "";
}

function sumArray() { //Calcul la somme total du tableau.
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        sum = sum + Number(array1[i]);
    }
    return sum;
}

function numberOfNegative() { //Calcul le nombre d'élements positifs et négatifs
    let nbNegative = 0;
    let nbPositive = 0;

    if (array1.length === 0) {
        let error = "Votre tableau est vide";
        return error;
    } else if (array1.length > 0) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] < 0) {
                nbNegative++;
            } else {
                nbPositive++;
            }
        }

        let textPositiveSingle = " élement est positif et ";
        let textNegativeSingle = " élement est négatif !";
        let textPositiveMulti = " élements sont positifs et ";
        let textNegativeMulti = " élements sont négatifs !";
        let resultPositive;
        let resultNegative;

        if (nbNegative > 1 || nbNegative === 0) {
            resultNegative = textNegativeMulti;
        } else {
            resultNegative = textNegativeSingle;
        }

        if (nbPositive > 1 || nbPositive === 0) {
            resultPositive = textPositiveMulti;
        } else {
            resultPositive = textPositiveSingle;
        }

        let result = nbPositive + resultPositive + nbNegative + resultNegative;
        return result;
    }
}

let arrayPositive = [];
let arrayNegative = [];

function splitArray() {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < 0) {
            arrayNegative.push(array1[i]);
        } else {
            arrayPositive.push(array1[i]);
        }

    }
}



function showArrayPositive() {
    let titleElt = document.createElement("h2");
    titleElt.textContent = "Liste d'élement(s) positif(s) de votre tableau";
    document.getElementById("contentCenter").appendChild(titleElt);

    for (let i = 0; i < arrayPositive.length; i++) {
        let liElt = document.createElement("li");
        liElt.textContent = arrayPositive[i];
        document.getElementById("contentCenter").appendChild(liElt);
    }

    if (arrayPositive.length === 0) {
        let infoMsg = document.createElement("p");
        infoMsg.textContent = "Il n'y a pas d'élements positifs dans votre tableau";
        document.getElementById("contentCenter").appendChild(infoMsg);
    }
    
    let centerElt = document.getElementById("center");
    centerElt.style.backgroundColor = "#e0e0e0";
    centerElt.style.borderLeft = "solid";
    centerElt.style.borderColor = "#525252";
    centerElt.style.borderLeftWidth = "5px";
}

function showArrayNegative() {
    let titleElt = document.createElement("h2");
    titleElt.textContent = "Lise d'élement(s) négatif(s) de votre tableau";
    document.getElementById("contentRight").appendChild(titleElt);
    

    for (let i = 0; i < arrayNegative.length; i++) {
        let liElt = document.createElement("li");
        liElt.textContent = arrayNegative[i];
        document.getElementById("contentRight").appendChild(liElt);
    }

    if (arrayNegative.length === 0) {
        let infoMsg = document.createElement("p");
        infoMsg.textContent = "Il n'y a pas d'élements négatifs dans votre tableau";
        document.getElementById("contentRight").appendChild(infoMsg);
    }
    
    let rightElt = document.getElementById("right");
    rightElt.style.backgroundColor = "#e0e0e0";
    rightElt.style.borderLeft = "solid";
    rightElt.style.borderColor = "#525252";
    rightElt.style.borderLeftWidth = "5px";
    
}

function clearArrayPosNeg() {
    document.getElementById("contentCenter").innerHTML = "";
    document.getElementById("contentRight").innerHTML = "";
    arrayPositive.splice(0, arrayPositive.length);
    arrayNegative.splice(0, arrayNegative.length);
}
