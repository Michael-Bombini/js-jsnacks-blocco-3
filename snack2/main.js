/*
Snack2
Fai inserire un numero, che chiameremo N, all’utente. 
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

*/


//n è uguale a 5 quindi dovremmo generare 5 ARRAY
const n = parseInt(prompt("Inserisci quante serie di numeri vuoi generare"));
let errore = false;
if(isNaN(n) || n <= 0)
{
    errore = true;
    alert("Attenzione hai inserito un valore non valido \n o il tuo numero è uguale o minore di 0");
}
const array = [];

for(let i = 0 ; i < n && !errore ; i++){
    for(let j = 0 ; j < 10 ; j++){
        array.push(Math.floor(Math.random() * 100) + 1);

    }
    console.log(array.join(" , "));
    array.length = 0;
}


alert("I valori generati sono nella console");