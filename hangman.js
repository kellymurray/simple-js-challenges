//Create an array of words
var words = [
"javascript",
"ruby",
"python",
"java"];

//Pick a word from the array

var word = words[Math.floor(Math.random() * words.length)];

//Set up the answer array

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

//game loop

while (remainingLetters > 0) {
  alert(answerArray.join(""));
  // Take input from the player
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  if (guess === null) {
    break;
  } else if (guess.length !==1) {
    alert("Please enter a single letter.");
  } else {
    //Update the game with the guess
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
   //End of game loop
  }

 //Show the answer and congratulate player
  alert(answerArray.join(""));
  alert("Good job! The answer was " + word);
