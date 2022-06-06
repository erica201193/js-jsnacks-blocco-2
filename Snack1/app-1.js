/*
Snack1
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const numeroInserito = document.getElementById("number-input").value;
const risultato = document.getElementById("risultato");
const button = document.getElementById("my-btn");

let numero = parseInt(numeroInserito)



button.addEventListener("click", function() {
    console.log("funziona il botone")
    
    if (numero % 2 === 0) {
        console.log("Il numero generato è pari");
    }
})

risultato.innerHTML = "ciao"