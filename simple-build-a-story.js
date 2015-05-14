//collect words from user
var myNouns = prompt("Please give me a noun.");
var myVerbs = prompt("Please give me a verb.");
var myAdjs = prompt("Please give me an adjective.");

//join variables into the story
var myStory = "Once upon a time there was a " + myAdjs + "and brave " + myNouns + " who decided to " + myVerbs + "!";

document.write(myStory);
