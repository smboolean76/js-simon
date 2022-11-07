// Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*---------------------
    FUNCTIONS
----------------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*---------------------
    MAIN
----------------------*/
const timer = 3;
// 1. Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
const numbers = [];
const numbersElement = document.getElementById('numbers');

while( numbers.length < 5 ) {
    const numb = getRndInteger(1, 100);
    if( !numbers.includes(numb) ) {
        numbers.push(numb);
    }
}

numbersElement.innerHTML = numbers;

setTimeout(function() {
    // Dopo 30 secondi i numeri scompaiono
    numbersElement.remove();
    // numbersElement.innerHTML = "";
}, timer * 1000);

setTimeout(function() {
    const numbersGuessed = [];
    // l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    for( let i = 0; i < 5; i++  ) {
        const numb = Number( prompt('Inserisci un numero') );
        if( numbers.includes(numb) && !numbersGuessed.includes(numb) ) {
            numbersGuessed.push(numb);
        }
    }
    // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    if( numbersGuessed.length > 0 ) {
        alert(`Hai indovinato ${numbersGuessed.length} numeri, i numeri indovinati sono: ${numbersGuessed}`);
    } else {
        alert('Sei una schiappa!');
    }
}, (timer + 1) * 1000);