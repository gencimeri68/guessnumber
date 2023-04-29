'use strict';
const btnCheck = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const secretNum = document.querySelector('.number');
const displayMessage = document.querySelector('.message');
let scoreNum = document.querySelector('.score')
const highscoreNum = document.querySelector('.highscore')
const guessNum = document.querySelector('.guess');

let score = 20;
let highscore = 0;
let randomNumber = Math.floor(Math.random()*20) +1;
btnCheck.addEventListener('click',function(){
    if(!guessNum.value){
        displayMessage.textContent = 'You should write a number!'
    }
    else if (guessNum.value == randomNumber){
        displayMessage.textContent = 'Correct !'     
        document.body.style.background = 'green'
        if(score > highscore){
            highscore = score;
            highscoreNum.textContent = highscore;
        }  
    }
    else if(guessNum.value < randomNumber){
        displayMessage.textContent =  'Too low' 
        if(score > 1){
            score--;
            scoreNum.textContent = score; 
            
        }else{     
            scoreNum.textContent = score;
            displayMessage.textContent = 'You lose the game !'
        }
        console.log(randomNumber)
    }
    else if(guessNum.value > randomNumber) {
        displayMessage.textContent = 'Too high';
        if(score > 1){
            score--;
            scoreNum.textContent = score; 
            
        }else{     
            scoreNum.textContent = score;
            displayMessage.textContent = 'You lose the game !'
        }
        console.log(randomNumber)
    }
})

againBtn.addEventListener('click',function(){
    displayMessage.textContent = 'Start guessing ...'
    score = 20;
    scoreNum.textContent = score;
    document.body.style.background = '#222';
    randomNumber = Math.floor(Math.random()*20) +1;
    secretNum.textContent ='?';
    guessNum.value = '';
    console.log('Highscore: '+highscore, 'score'+score)
})

