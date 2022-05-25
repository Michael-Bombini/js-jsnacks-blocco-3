/*
Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/


const array = [];
let somma = 0 ;

while(somma<50){
    const input = parseInt(prompt("Inserisci un numero"));
    if(!isNaN(input) && input > 0 ){
        somma+= input;
        array.push(input);
    }
    
}


alert(`La somma degli elementi è ${somma} `);
alert(`Questi sono gli elementi dell'array  \n ${array.join(" , ")}`);


