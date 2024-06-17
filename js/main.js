// creo un mathfloor random per creare il randomizer di numeri, ho scelto di fare da 0 a 10 e poi scriverlo sull'h1
document.getElementById("titolo").innerHTML  = Math.floor(Math.random() * 11); 

// creo il set timeout per i 30 secondi e creo una funzione per indicare il tempo scaduto
setTimeout(timer, 30000);
function timer(){
    alert(`Tempo scaduto!`)
}