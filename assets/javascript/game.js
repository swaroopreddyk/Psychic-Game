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
  console.log("Computer Guess: " + compGuess);
  console.log("User Guess: " + userGuess);

  //save the user pressed keys and display to the screen
  guessedLetters.push(userGuess);
  document.querySelector('#guessedLetters').innerHTML = "Guessed letters: " + guessedLetters;
  console.log(guessedLetters);

  if (compGuess === event.key) {
    wins++;
    resetGame();
  } else if (compGuess != event.key) {
    guessesLeft--;
    screenDisplay();
  }

  if (guessesLeft === 0) {
    losses++;
    resetGame();
  }

  function resetGame() {
    guessesLeft = 9;
    guessedLetters = [];
    document.querySelector('#guessedLetters').innerHTML = "Guessed letters: " + guessedLetters;
    screenDisplay();
  };

  function screenDisplay() {
    document.querySelector('#game').innerHTML = "<p>Wins: " + wins + "</p>" +
      "<p> Losses: " + losses + "</p>" +
      "<p> Guesses Left: " + guessesLeft + "</p>";
  }

};