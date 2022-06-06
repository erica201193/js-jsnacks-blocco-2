
let nomi = ["Luca", "Marco", "Paolo"]

let cognomi = ["Rossi", "Bianchi", "Verdi"]

let nomiCasuali = []

for (let i = 1 <= nomi.length; i++;) {
    let indiceNomi = Math.floor(Math.random() * nomi.length);
    let indiceCognomi = Math.floor(Math.random() * cognomi.length);

    const nomeCognome = nomi[indiceNomi] + " " + cognomi[indiceCognomi]

    nomiCasuali.push(nomeCognome);

}

console.log (nomiCasuali)