/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali.
 Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire,
 uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// -----VARIABILI GLOBALI--------
const btnStartGame = document.getElementById('start-game');

// ----- FINE VARIABILI GLOBALI--------


// -----FUNZIONI--------




// casual numbers function
function randomNumber(min,max){
    const range = max - min + 1;
    const number = Math.floor(Math.random()*range + min);
    return number;
}


// cell creator function
function cellCreator(){

    const numbersRow = document.getElementById('numbers');
    const casualNumbersArray =[];
    for(let i = 0; i<5; i++){
        const casualNumber = randomNumber(1,20);
        const cell = document.createElement('div');
        cell.className = 'number-'+(i+1);
        cell.innerText = casualNumber
        numbersRow.appendChild(cell);
        casualNumbersArray.push(casualNumber);
    }
    return casualNumbersArray;
}

// display none function
const displayNone = ()=>{

    const numbersRow = document.getElementById('numbers'); 
    numbersRow.id= 'd-none';

}

// remembered user numbers function

const numbersRemembered = (numbersArray)=>{
    displayNone();
    const casualNumbersArray = numbersArray;
    const numbersIdentified =[];
    for(let i = 0; i<casualNumbersArray.length; i++){
        const number = parseInt(prompt('Inserire numero ricordato'));

        if(casualNumbersArray[i]===number){
            numbersIdentified.push(number);
        }
    }
    return numbersIdentified;
}





//  start game function
const startGame = ()=>{
    const numbersIdentified =[];
    console.log('funge');
    const casualNumbers =  cellCreator();
    console.log(casualNumbers);
    setTimeout(displayNone, 4500);
    setTimeout(function(){
        for(let i = 0; i<casualNumbers.length; i++){
            const number = parseInt(prompt('Inserire numero ricordato'));
            if(casualNumbers[i]===number){
                numbersIdentified.push(number);
            }
        }   
    }, 5000);
    console.log('numeri individuati', numbersIdentified);
    




}

// ----- FINE FUNZIONI--------


// -----PROGRAMMA--------

btnStartGame.addEventListener('click',startGame);
    



// ----- FINE PROGRAMMA--------