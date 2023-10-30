**Griglia Campo Minato**
**Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

###SOLUZIONE
- [X] prelevare dal select la difficoltà che ci definisce il numero delle celle da creare (x)
- [X] generare 16 bombe: array di 16 numeri casuali non duplicati nel renge di gioco (da 1 a X)
- [X] definire il numero massimo di tentativi consentiti (X - 16)
- [X] array di numeri "non bombe" cliccate dall'utente per avere il punteggio
- [X] nasconedere title
- [X] ripulire la griglia precente
- [X] mostrare la griglia
- [X] creare x celle, per ogni numero da 1 a x :
    - [X] creare la cella
    - [X] inserire il numero nella cella
    - [X] aggiungere il clickListener alla cella
    - [X] aggiungere la cella alla griglia


al click sulla cella :
 - [X] leggo il numero cliccato
 - [] Se il numero cliccato è presente nell'array delle bombe:
   - []la cella diventa rossa
   - []fine gioco ---> utente perde
 - [] ALTRIMENTi
   - []la cella diventa blu
   - [] aggiunge il numero all'array di numeri "non bombe" cliccati
   SE
    - [] la lunghezza dell'array "non bombe" è === al numero massimo di tentativi: 
        fine gioco ---> utente vince