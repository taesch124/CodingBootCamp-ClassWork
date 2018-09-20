const winsText = document.getElementById("win-text");
const loseText = document.getElementById("lose-text");
const guessesLeftText = document.getElementById("guesses-left-text");
const guessedLettersText = document.getElementById('guessed-letters-text');

/*
1. Generate Random Letter
2. User guesses letter
3. Compare letter to computer choice
4. If match, win and reset
5. If not a match, add to guessedLetters and subtract guessLeft
6. If guessedLeft reaches 0, lose and reset
*/

const possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wins = 0,
losses = 0;
let guessesLeft = 10;
guessesLeftText.innerHTML = guessesLeft;
let guessedLetters = [];
let currentLetter = generateRandomLetter();

document.onkeyup = function(event) {
    let userGuess = event.key;
    if (guessedLetters.indexOf(userGuess) !== -1 || possibleLetters.indexOf(userGuess) === -1) return;

    if(userGuess === currentLetter) {
        wins++;
        winsText.innerHTML = wins;
        alert("That's right! I was thinking of " + currentLetter + "!");
        resetGame();
    } else {
        guessedLetters.push(userGuess);
        guessedLettersText.innerHTML = printGuessedLetters(guessedLetters);
        guessesLeft--;
        guessesLeftText.innerHTML = guessesLeft;
        
        if(guessesLeft <= 0) {
            losses++;
            loseText.innerHTML = losses;
            setTimeout(function() {
                alert("Sorry, I was thinkng of " + currentLetter + ". :(");
                resetGame();
            }, 0);
        }
    }
}

function generateRandomLetter() {
    let randomIndex = Math.floor(Math.random() * possibleLetters.length);
    let letter = possibleLetters[randomIndex];
    console.log(letter);
    return letter;
}

function resetGame() {
    guessesLeft = 10;
    guessesLeftText.innerHTML = guessesLeft;
    guessedLetters = [];
    guessedLettersText.innerHTML = "";
    currentLetter = generateRandomLetter();
}

function printGuessedLetters(letters) {
    let resultString = "";
    for (let i = 0; i < letters.length; i++) {
        if(i === letters.length - 1) {
            resultString += letters[i];
        } else {
            resultString += letters[i] + ", ";
        }
    }
    return resultString;
}