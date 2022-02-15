// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

// chiedo di scegliere tra pari o dispari
const scelta = prompt('Scegli: pari o dispari?');
// chiedo un numero all'utente
const numberUser = parseInt(prompt('scgli un numero da 1 a 5'));
console.log(scelta, numberUser)

// genero  numero random da 1 a 5 per il pc
function random(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return parseInt(Math.random() * (max - min) + min);

}

const numberPc = random(1, 5);
console.log(numberPc)

// funzione per sommare i numeri
function somma(num1, num2) {
    let somma = num1 + num2;
    return somma
}

const risultato = somma(numberUser, numberPc);
console.log(risultato)


// controllo vincitore

if (scelta === 'pari' && risultato % 2 == 0 || scelta === 'dispari' && risultato % 2 !== 0) {
    alert('complimenti hai vinto!')
} else {
    alert('mi dispiace, hai perso!')
}