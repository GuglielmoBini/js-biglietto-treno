/* TRACCIA
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 1- il prezzo del biglietto è definito in base ai km (0.21 € al km)
 2- va applicato uno sconto del 20% per i minorenni
 3- va applicato uno sconto del 40% per gli over 65.
 4- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/* STEP
1- prendo l'elemento dal DOM.

2- chiedo all'utente il numero di chilometri che vuole percorrere.

3- chiedo all'utente la sua età.

4- calcolo il prezzo del biglietto, che è definito in base ai chilometri (0.21 € al km).

5- calcolo il prezzo del biglietto in base all'età dell'utente e applico lo sconto corretto al biglietto.
*/

// ESERCIZIO

// 1- prendo l'elemento dal DOM.

const targetElement = document.getElementById("target");

// 2- chiedo all'utente il numero di chilometri che vuole percorrere.

const kilometres = parseInt(prompt("Quanti chilometri deve fare?", 25).trim());
console.log(kilometres);

// 3- chiedo all'utente la sua età.

const userAge = parseInt(prompt("Quanti anni ha?", 30).trim());
console.log(userAge);

// 4- calcolo il prezzo del biglietto, che è definito in base ai chilometri (0.21 € al km).

const ticketPrice = kilometres * 0.21;

// 5- calcolo il prezzo del biglietto in base all'età dell'utente e applico lo sconto corretto al biglietto.

if (userAge >= 1 && userAge < 18) {
  targetElement.innerText = `il prezzo del tuo biglietto è: ${
    Math.round((ticketPrice - (ticketPrice * 20) / 100) * 100) / 100
  } €`;
}

if (userAge >= 18 && userAge < 65) {
  targetElement.innerText = `il prezzo del tuo biglietto è: ${
    Math.round(ticketPrice * 100) / 100
  } €`;
}

if (userAge >= 65) {
  targetElement.innerText = `il prezzo del tuo biglietto è: ${
    Math.round((ticketPrice - (ticketPrice * 40) / 100) * 100) / 100
  } €`;
}
