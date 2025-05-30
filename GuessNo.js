const randomNo = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#sub')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const LoworHi = document.querySelector('.LoworHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //
    if (isNaN(guess)) {
        alert('Please enter a valid Number')
    } else if (guess < 1) {
        alert('Please enter a valid Number more than 1')
    } else if (guess > 100) {
        alert('Please enter a valid Number less tha 100')
    }
    else {
        prevGuess.push(guess)
        console.log(prevGuess);

        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNo}`)
            endGame()
        } else {
            displayGuess(prevGuess)
            checkGuess(guess)
        }
    }
    function checkGuess(guess) {
        if (guess === randomNo) {
            displayMessage("You guessed it right")
            endGame()
        } else if (guess < randomNo) {
            displayMessage("Number is TODO low")
        } else if (guess > randomNo) {
            displayMessage("Number is TODO High")
        }
    }

    function displayGuess(guess) {
        userInput.value = " ";
        guessSlot.innerHTML = `${guess} `
        numGuess++;
        remaining.innerHTML = `${11 - numGuess} `
    }
    function displayMessage(message) {
        LoworHi.innerHTML = `<h2>${message}</h2>`
    }

    function endGame() {
        userInput.value = '';
        userInput.setAttribute('disabled', '');
        p.classList.add('button')
        p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
        startOver.appendChild(p)
        playGame = false;
        newGame();

    }
    function newGame() {
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click', function (e) {
            randomNo = parseInt((Math.random() * 100 + 1))
            prevGuess = []
            numGuess = 1;
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess} `;
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            playGame = true;

        })
    }

}