/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let num1 = 3
let num2 = 2

if (num1 > num2) {
  console.log("Il numero più grande è: ", num1);
} else {
  console.log("Il numero più grande è: ", num2);
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let num1 = 4
if (num1 != 5) {

  console.log("not equal");
  
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* let num1 = 30
if (num1 % 5 == 0) {
  console.log(num1,"è divisibile per 5");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 40
totalShoppingCart > 50 ? console.log("La spedizione è gratuita. checkout: ", totalShoppingCart) : console.log("Il costo della spedizione è di 10€. checkout: ", totalShoppingCart + 10); */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let totalShoppingCart = 100
totalShoppingCart = totalShoppingCart - (totalShoppingCart*20)/100
totalShoppingCart > 50 ? console.log("La spedizione è gratuita. checkout: ", totalShoppingCart) : console.log("Il costo della spedizione è di 10€. checkout: ", totalShoppingCart + 10); */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let num1 = 2
let num2 = 3
let num3 = 1
if ((num3 < num2 && num3 < num1) && (num2 < num1 && num2 > num3)) {
  console.log("numeri ordinati: ", num1, num2, num3);
} else {if ((num3 > num2 && num3 > num1) && (num2 > num1 && num2 < num3)) {
  console.log("numeri ordinati: ", num3, num2, num1);
} else {if ((num3 < num2 && num3 > num1) && (num2 > num1 && num2 > num3)) {
  console.log("numeri ordinati: ", num2, num3, num1);
} else {if ((num3 < num2 && num3 < num1) && (num2 > num1 && num2 < num3)) {
  console.log("numeri ordinati: ", num2, num1, num3);
  
} else {
  
}
  
}
  
}
  
} 
  
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* let y = 2

let type

let condition = 1

condition = typeof condition
type = typeof y

type ===  condition? console.log("il valore è un numero") : console.log("il valore fornito non è un numero") */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* let x = 45

x % 2 === 0 ? console.log(x, "è pari") : console.log(x, "è dispari"); */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */


/*   let val = 4
  if (val < 10 && val > 4) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}



/* me.city = "Toronto" */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* delete me.lastName */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* delete me.skills */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* let num = []

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* num[9] = 100 */
