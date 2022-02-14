// Palindroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let word = prompt('inserisci una parola').toLowerCase();
console.log(word)

function parolapalindroma(parola) {

    const parolaScomposta = [...word]
    console.log(parolaScomposta)

    const wordInverted = parolaScomposta.reverse();
    console.log(wordInverted)

    const wordJoin = parolaScomposta.join('')
    console.log(wordJoin)

    if (wordJoin === word) {

        alert('la parola è palindroma')

    } else {
        alert('la parola non è palindroma')
    }

}

parolapalindroma(word);