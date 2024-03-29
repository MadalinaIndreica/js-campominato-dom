const gridElem = document.querySelector(".grid");
//array numeri non bombe:
let notBombsCells = [];
let gameOver = false;

// BUTTON
document.getElementById("my-button").addEventListener("click", ButtonClick);



// FUNZIONI
 //al click del bottone 
function ButtonClick() {
    gridElem.innerHTML = '';
    document.getElementById("title").classList.add("hidden");
    const levelSelect = document.getElementById("level").value;
    //generare bombe nei vari renge
    let bombs = bombsGenerator(levelSelect);
    console.log(bombs);
    
    //numero massimo tentativi consentiti
    const maxChance = levelSelect - bombs.length;
    console.log(maxChance);
    

   

    for (let i = 1; i <= levelSelect; i++) {
        const curNumber = i;
         const cell = generateGridCell(curNumber);

         //logica del gioco 

        cell.addEventListener("click", function() {
          if (gameOver){
            return;
          }
          //this.textContent
           console.log(curNumber);
           notBombsCells.push (curNumber);
           console.log(notBombsCells);

           if (bombs.includes(curNumber)) {
            
            cell.classList.add("red-background");
            console.log("bomba trovata! hai perso");
            alert("bomba trovata! hai perso");
            gameOver = true; 
        
            //gridElem.classList.add("hidden");
            
           } 
           else
            {
            this.style.backgroundColor ="blue";

           }
           if (notBombsCells.length  === maxChance){
            
            gameOver = true;
            console.log("hai vintooooo");}


        })
         gridElem.append(cell);

         if (levelSelect === "81" ) {
            cell.classList.add ("medium");
           }else if (levelSelect === "49") {
           cell.classList.add ("hard");
           }
       }
    
       

}



/**
 * Genero la cella con un numero all'interno
 * @param {number} innerNumber
 * @returns {any} elemento cella
 */
function generateGridCell(innerNumber) {
  const newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.innerHTML = innerNumber;
  return newCell;
   
}
/**
 * Genero un numero random
 * @param {number} min
 * @param {number} max
 * @returns {any}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/**
 * Genero un array di 16 numeri random senza ripetizione da 1 a 16
 * @param {number} max
 * @returns {any}
 */
function bombsGenerator (max) {
  const result = [];
  while (result.length < 16) {
    const rndNumber = getRndInteger(1, max);
    if (!result.includes (rndNumber)) {
      result.push(rndNumber);
    }
  }
  return result;
}
// console.log(bombsGenerator(22));