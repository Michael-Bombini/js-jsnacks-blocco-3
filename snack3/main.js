/*
Snack3
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.


*/



let somma = 0 ;

for(let i = 0 ; i < 5 ; i++){
    const input = parseInt(prompt("Inserisci un numero"));
    if(!isNaN(input) && input > 0 )
        somma+= input;
    else{
        alert("Attenzione il valore inserito non è valido");
        i--;
    }
}

alert(`La somma calcolata è ${somma}` );


