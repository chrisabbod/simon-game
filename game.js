
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

  console.log(gamePattern);
}

$(".btn").click(function(event) {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);
})