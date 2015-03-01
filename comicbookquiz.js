//Five answers
var correctAnswers = 0;

var firstAnswer = "MARVEL";
var secondAnswer = "SUPERMAN";
var thirdAnswer = "WONDER WOMAN";
var fourthAnswer = "UNCLE BEN";
var fifthAnswer = "BRUCE WAYNE";

alert("Ready to test your comic book knowledge? Go!");

// Ask at least five questions.

var firstQuestion = prompt("Who owns Iron Man: DC or Marvel?");
if ( firstQuestion.toUpperCase() === firstAnswer){
  correctAnswers += 1;
}

var secondQuestion = prompt("Who is Clark Kent's alter-ego?");
if (secondQuestion.toUpperCase() === secondAnswer){
  correctAnswers += 1;
}

var thirdQuestion = prompt("Who is from the island of Themyscira?");
if (thirdQuestion.toUpperCase() === thirdAnswer){
  correctAnswers += 1;
}

var fourthQuestion = prompt("Who said 'With great power comes great responsibility'?");
if (fourthQuestion.toUpperCase() === fourthAnswer){
  correctAnswers += 1;
}

  var fifthQuestion = prompt("What is Batman's real name?");
if (fifthQuestion.toUpperCase() === fifthAnswer){
  correctAnswers += 1;
}

//Provide a final message after the quiz letting the user know the number of questions he or she got right.
document.write("<p>You got " + correctAnswers + " questions right! Excalibur!</p>");

// Rank the player. If the player answered all five correctly, give that player the gold medal; 3-4 is a silver medal; 1-2 correct answers is a bronze medal and 0 correct is no medal at all.

if (correctAnswers === 5) {
  document.write("<p>Superior! You get the gold crown.</p>");
} else if (correctAnswers >=3) {
  document.write("<p>Amazing! You get the silver crown.</p>");
} else if (correctAnswers >=1) {
  document.write("<p>Incredible! You get the bronze crown.</p>");
} else {
    document.write("<p>Time to brush up on your superhero knowledge, sidekick!</p>");
}