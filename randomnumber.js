const randomnumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#submit1');
const guessfield = document.querySelector('#text1');
const previous = document.querySelector('.para1');
const totalguess = document.querySelector('.para2');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.footer');

const p =document.createElement('p');

let prevguess = [];
let numGuess = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(guessfield.value);
        // console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please give a valid number');
    }
    else if(guess<1){
        alert('Please give a valid number');
    }
    else if(guess>100){
        alert('Please enter an number less than 100');
    }
    else{
        prevguess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Limit exceed, game over!, Random number was ${randomnumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomnumber){
        displayMessage('You guessed right');
    }
    else if(guess<randomnumber){
        displayMessage('Number is Low');
    }
    else if(guess>randomnumber){
        displayMessage('Number is high');
    }
}

function displayGuess(guess){
    guessfield.value= '';
    previous.innerHTML += `${guess + ", "}`;
    numGuess++;
    totalguess.innerHTML = `Guess Remaining: ${11-numGuess}`
    if((11-numGuess)==8){
        alert("Guess Complete");
    }
    guessfield.removeAttribute('disabled');
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message}</h2>`
}

function endGame(guess){
    guessfield = '';
    guessfield.setAttribute('disabled', ' ');
    p.classList.add('button');
    p.innerHTML = `<h2> id = "newGame">Start new Game </h2> `;
    startover.appendChild(p);
    playGame=false;
    newGame();

}

function newGame(guess){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomnumber = parseInt(Math.random()*100+1);
        prevguess = [];
        numGuess = 1;
        previous.innerHTML = '';
        totalguess.innerHTML = `${11 - numGuess}`;
        guessfield.removeAttribute('disabled');
        startover.removeChild(p);

        playGame = true;

    })
} 
