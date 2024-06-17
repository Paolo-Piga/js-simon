// creo un Array
const numeri = [];



// creo un mathfloor random per creare il randomizer di numeri, ho scelto di fare da 0 a 10 e poi scriverlo sull'h1
//  lo metto all'interno di un ciclo per ripetere sino a 5 numeri
while (numeri.length <5 ){
    numeri  = Math.floor(Math.random() * 11);
     
}

// voglio far vedere i numeri sull'html
let finali = document.getElementById(`randomNum`);
finali.append(numeri);
console.log(numeri);

// creo il set timeout per i 30 secondi e creo una funzione per indicare il tempo scaduto
setTimeout(timer, 30000);
function timer(){
    // faccio sparire i numeri
    finali.remove(numeri);
    alert(`Inizia il gioco!`);
    // creo un ciclo dove l'utente inserisce i numeri uno ad uno con un prompt
    for( i = 0; i < 5; i++){
        let userChoice = prompt(`Inserisci i numeri che hai visto`);
        console.log(userChoice);
    }
}









