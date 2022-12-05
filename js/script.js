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

5- calcolo uno sconto del 20%.
5b- calcolo il prezzo del biglietto con lo sconto del 20% applicato.

6- calcolo uno sconto del 40%.
6b- calcolo il prezzo del biglietto con lo sconto del 40% applicato.

7- applico gli sconti in base all'età dell'utente.

8- calcolare il prezzo finale del biglietto (con massimo 2 decimali).
*/

// ESERCIZIO

// 1- prendo l'elemento dal DOM.

const targetElement = document.getElementById("target");

// 2- chiedo all'utente il numero di chilometri che vuole percorrere.

const kilometres = parseInt(prompt("Quanti chilometri deve fare?", 25).trim());

// 3- chiedo all'utente la sua età.

const userAge = parseInt(prompt("Quanti anni ha?", 30).trim());

// 4- calcolo il prezzo del biglietto, che è definito in base ai chilometri (0.21 € al km).

const ticketPrice = kilometres * 0.21;

// 5- calcolo uno sconto del 20%.

const discountUnder = (ticketPrice * 20) / 100;

// 5b- calcolo il prezzo del biglietto con lo sconto del 20% applicato.

const ticketUnder = ticketPrice - discountUnder;

// 6- calcolo uno sconto del 40%.

const discountOver = (ticketPrice * 40) / 100;

// 6b- calcolo il prezzo del biglietto con lo sconto del 40% applicato.

const ticketOver = ticketPrice - discountOver;

/* 7- applico gli sconti in base all'età dell'utente e 
   8- calcolo il prezzo finale del biglietto e lo stampo nel DOM.
*/

if (userAge >= 1 && userAge < 18) {
  targetElement.innerText = `il prezzo del tuo biglietto è: ${ticketUnder}`;
}

if (userAge >= 18 && userAge < 65) {
  targetElement.innerText = `il prezzo del tuo biglietto è: ${ticketPrice}`;
}

if (userAge >= 65) {
  targetElement.innerText = `il prezzo del tuo biglietto è: ${ticketOver}`;
}
