// creo il randomizer
let random = numeriRandom (1, 99, 5);
const messaggio = document.getElementById(`randomNum`);
messaggio.innerHTML = random;
console.log(random);

// FUNZIONE DA RIGA 9 A RIGA 35 COPIATA DALLA CORREZIONE DELL'ESERCIZIO

// CREA ELEMENTO CON CLASSE
function created (tag, cssClass) {
    const element = document.createElement (tag);
    element.classList.add(cssClass);
    return element
}

// CREA NUMERO CASUALE IN UN RANGE
function randomNumberRange (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// GENERA NUMERI CASUALI IN UN RANGE DI NUMERI
function numeriRandom (min, max, count){
    // Crea array vuoto
    const numberList = [];

    // Crea un ciclo che genera 16 numeri casuali
    while (numberList.length < count){
        let randomNumber = randomNumberRange (min, max);

        // inserisci il numero casuale solo se non è gia presente nell'array
        if(!numberList.includes(randomNumber)){
            numberList.push(randomNumber);
        }
    }
    return numberList
}



// variabile che gestisce i secondi
let timerContatore = 0;
// contatore 
const contatore = document.getElementById(`counterSecondi`);



// creo il set timeout per i 30 secondi e creo una funzione per indicare il tempo scaduto
let clock = setInterval(function(){
    timerContatore++;
    contatore.innerHTML = timerContatore;
}, 10000)

// faccio scomparire i numeri finito il tempo
setTimeout(function(){
messaggio.classList.add("sparire");
contatore.classList.add("sparire");
clearInterval(clock);
}, 1000 * 30)

// creo un array vuoto
const listaNumeri = [];
setTimeout(function(){
    // creo un ciclo dove l'utente deve inserire i numeri
    for (let i = 0; i < random.length; i++){
        userInput = parseInt(prompt("Inserisci i numeri che hai visto uno alla volta"));
        
        if (random.includes(UserInput)){
         listaNumeri.push(random[i]);   
        }
    }

    const risultato = document.getElementById(`ultimoMex`);
    risultato.innerHTML = `Hai indovinato ${listaNumeri.length} numeri: ${listaNumeri}`;

}, 1000 * 31)









