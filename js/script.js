// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert,
//  parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta
// i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

// dichiaro una variabile (array) in cui andrò ad inserire i numeri random
var numeriRandom = [];
// dichiaro una variabile in cui setto la durata (in secondi) del countdown
var timeleft = 5;
// dichiaro una variabile timer in cui utilizzo il metodo setInterval (funzione, tempo)
var timer = setInterval(countdown, 1000);
// dichiaro una valiabile (array) in cui andrò a conservare i numeri inseriti dall'utente tramite prompt
var numeriUtente = [];
// utilizzo il metodo setTimeout per richiamare la funzione "inserimento" che inizierà dopo 30 secondi
// imposto 1 secondo in più perché altrimenti nel countdown che viene stampato a video non viene visualizzato l'ultimo secondo //
setTimeout(inserimento, 6000);


// con un ciclo for richiamo la funzione 5 volte e pushando il risultato (il numero random) dentro l'array dichiarato prima
for (var i = 0; i<=4; i++){
    var gen = randomNum(1,100);
    numeriRandom.push(gen);
}
// genero un alert con il contenuto dell'array per visualizzare i 5 numeri random
alert(numeriRandom);

// console.log(numeriRandom);

// FUNZIONI //

// FUNZIONE PER GENERARE NUMERI RANDOM!
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// FUNZIONE PER IL COUNTDOWN
function countdown(){
    // SE IL TEMPO RIMASTO (timeleft) E' MINORE O UGUALE A ZERO ALLORA IL setInterval VIENE STOPPATO
    if(timeleft <= 0){
        clearInterval(timer);
    }
    document.getElementById("timing").innerHTML = "Countdown: " + timeleft;
    timeleft -= 1;
}

// CHECK
// FUNZIONE PER L'INSERIMENTO DEI 5 NUMERI DA PARTE DELL'UTENTE TRAMITE PROMPT
function inserimento(){
    for (var i = 0; i <= 4; i++){
        var userNumb = parseInt(prompt("Inserisci un numero:"));
        // numeriUtente.push(userNumb); (prova)

        // DENTRO A UN CICLO WHILE CONFRONTO I NUMERI GENERATI AL CARICAMENTO DELLA PAGINE (numeriRandom) E I NUMERI INSERITI DALL'UTENTE TRAMITE PROMPT
        var j = 0;
        while (j<=4){
            if (userNumb == numeriRandom[j]){
                numeriUtente.push(userNumb);
            }
            j++;
        }
    }
    document.getElementById("risultato").innerHTML = "Hai indovinato: " + numeriUtente.length + " numeri!" + " I numeri indovinati sono: " + numeriUtente;
}
