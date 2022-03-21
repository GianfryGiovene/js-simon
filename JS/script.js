/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali.
 Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire,
 uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri,
 il software dice quanti e quali dei numeri da indovinare sono stati individuati.
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
    let casualNumber;
    for(let i = 0; i<5; i++){ 
        do{
        casualNumber = randomNumber(1,20);
        }while(casualNumbersArray.includes(casualNumber));
        casualNumbersArray.push(casualNumber);
        const cell = document.createElement('div');
        cell.className = 'number-'+(i+1);
        cell.innerText = casualNumber
        numbersRow.appendChild(cell);
        
    }
    return casualNumbersArray;
}



// display none function
const displayNone = ()=>{

    const numbersRow = document.getElementById('numbers'); 
    numbersRow.id= 'd-none';
    
}

// remembered user numbers function

const numbersRemembered = (numbersArray,identifiedArray)=>{
    for(let i = 0; i<numbersArray.length; i++){

        const number = parseInt(prompt('Inserire numero ricordato'));

        if(identifiedArray.includes(number) && numbersArray.includes(number) ){
            
        }else if(numbersArray.includes(number)){
            identifiedArray.push(number);
        }  
    }
}

// results function

const finalResults = (identified)=>{
    const length = identified.length;
    const results = document.getElementById('results');
    results.className = 'd-block'
    results.innerText = `Hai individuato ${length} numeri su 5,
    i numeri trovati sono: ${identified}`;
}



//  start game function
const startGame = ()=>{
    const numbersIdentified =[];
    console.log('funge');
    const casualNumbers =  cellCreator();
    console.log(casualNumbers);
    setTimeout(displayNone, 30000);
    setTimeout(function(){

        numbersRemembered(casualNumbers, numbersIdentified);
        finalResults(numbersIdentified);
          
    }, 30500);
}

// ----- FINE FUNZIONI--------


// -----PROGRAMMA--------

btnStartGame.addEventListener('click',startGame);
    



// ----- FINE PROGRAMMA--------