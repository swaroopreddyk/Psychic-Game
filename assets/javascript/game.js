//variables declaration
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let guessedLetters = [];
let wins = 0,
  losses = 0;
let guessesLeft = 9;

document.onkeyup = function (event) {
  let userGuess = event.key;
  userGuess = userGuess.toLowerCase();
  var compGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Computer Guess: "+ compGuess);
  console.log("User Guess: "+userGuess);

  //save the user pressed keys and display to the screen
  guessedLetters.push(userGuess);
  document.querySelector('#guessedLetters').innerHTML = "Guessed letters: " + guessedLetters;
  console.log(guessedLetters);

  if (compGuess === event.key) {
    wins++;
  } else if (compGuess != event.key) {
    losses++;
    guessesLeft--;
    document.querySelector('#game').innerHTML = "<p>Wins: " + wins + "</p>" +
      "<p> Losses: " + losses + "</p>" +
      "<p> Guesses Left: " + guessesLeft + "</p>"
    "<p> Guessed Letters: " + guessedLetters + "</p>";
  }

  //Reset counters and game
  if (guessesLeft === 0) {
    wins = 0;
    losses = 0;
    guessesLeft = 9;
    guessedLetters = [];

    document.querySelector('#game').innerHTML = "<p>Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses Left: " + guessesLeft + "</p>";
  }

};