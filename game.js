
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColors[nextSequence()];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

console.log(randomChosenColor);
console.log(gamePattern);
console.log($("#" + randomChosenColor));
