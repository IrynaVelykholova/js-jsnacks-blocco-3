const listaNumeri = [];
let somma = 0;

while (somma < 50) {
    const numero = parseInt(prompt("Inserisci un numero"));
    listaNumeri.push(numero);
    somma += numero;
    console.log(somma);
    console.log(listaNumeri)
    }
    if (somma > 50) {
    console.log("La somma dei tuoi numeri è maggiore di 50 perchè la somma è" + " " + somma)
    }