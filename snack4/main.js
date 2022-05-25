/*
Snack4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli 
se può partecipare o no alla festa. 
Interrompi il ciclo appena il nome è stato trovato.


*/

const listaInvitati = ["Mario Rossi" , "Gatsby" , "Pippo" , "Pluto" , "Luigi" , "Tizio" ];

const nomeUtente = prompt("Inserisci il tuo nome");

let trovato = false;
let i = 0 ;

while(!trovato && i!=listaInvitati.length){
    while(i<listaInvitati.length){
        if(listaInvitati[i] === nomeUtente){
            trovato = true;
        }
        i++;
    }
        

}


if(trovato)
alert("Puoi partecipare alla festa del Grande Gatsby");
else
alert("NON puoi partecipare alla festa!");
