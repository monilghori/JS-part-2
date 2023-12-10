let randomNumber=parseInt(Math.random()*100+1)
let play = true

const bt = document.getElementById('subt')
const f = document.getElementById('form')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const input = document.getElementById('guessField')

const p = document.createElement('p')

let prevguess = []
let numOfGuess = 1

if(play)
{
    bt.addEventListener('click',function(e){

        e.preventDefault();
        
        const number=parseInt(input.value)
        console.log(number)
        validate(number)
    })
}
function validate(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter valid number!')
    }
    else if(guess < 1)
    {
        alert('Please enter number morethan 1!')
    }
    else if(guess > 100)
    {
        alert('Please enter number lessthan 100!')
    }
    else{
        prevguess.push(guess)
        if(numOfGuess > 9)
        {
            displayguess(guess)
            displayMessage(`Game Over, Number was ${randomNumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function displayguess(guess){

    input.value=''
    remaning.innerHTML = `${10-numOfGuess}`
    numOfGuess++;
    guessSlot.innerHTML += ` ${guess}`
    // remaning.innerHTML = `${10-numOfGuess}`
}

function checkguess(guess){
    if(guess > randomNumber)
    {
        displayMessage(`Guessed number is high.`)
    }
    else if(guess < randomNumber)
    {
        displayMessage(`Guessed number is low.`)
    }
    else if(guess === randomNumber)
    {
        displayMessage(`You guessed right!!`)
        endgame()
    }
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    input.value = ''
    input.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id="newgame">Start new Game</button>`
    startOver.appendChild(p)
    play = false
    start()
}

function start(){

    const b=document.getElementById('newgame')
    b.addEventListener('click',function(e){
        numOfGuess = 1;
        randomNumber = parseInt(math.random()*100+1)
        prevguess = []
        guessSlot.innerHTML = ''
        remaning.innerHTML = `${10-numOfGuess}`
        input.removeAttribute('disabled')
        startOver.removeChild(p)
        play = true;
    })

}


