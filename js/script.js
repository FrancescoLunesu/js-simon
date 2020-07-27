// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert,
//  parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta
// i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

// dichiaro una variabile (array) in cui andrò ad inserire i numeri random
var numeriRandom = [];


// con un ciclo for richiamo la funzione 5 volte e pushando il risultato (il numero random) dentro l'array dichiarato prima
for (var i = 0; i<=4; i++){
    var gen = randomNum(1,100);
    numeriRandom.push(gen);
}
// genero un alert con il contenuto dell'array per visualizzare i 5 numeri random
alert(numeriRandom);



// FUNZIONI //

// FUNZIONE PER GENERARE NUMERI RANDOM!
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}