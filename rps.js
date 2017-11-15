var choices = ['Rock', 'Paper', 'Scissors'];
var playerChoice = []
var compChoice = []

var buttons = document.getElementsByClassName("choice");

function compAssign() {
  compChoice = Math.random()
  if(compChoice < 0.34) {
    compChoice = 'Rock';
  } else if(compChoice <= 0.67) {
    compChoice = 'Paper';
  } else {
    compChoice = 'Scissors';
  }
}

function clickButton() {
  var id = this.id
  alert('You chose ' + id)
  playerChoice.unshift(this.id)
  compAssign(compChoice.unshift)
  assess(playerChoice[0], compChoice)
}

function assess(playerChoice,compChoice) {
  if (playerChoice  === compChoice) {
     alert("It's a tie!");
 } else if(playerChoice === "Rock") {
     if (compChoice === "Scissors") {
         alert("Computer chose Scissors. You win!");
     } else {
         alert("Computer chose Paper. You lose!");
     }
 } else if(playerChoice === "Paper") {
     if(compChoice === "Rock") {
         alert("Computer chose Rock. You win!");
     } else {
         alert("Computer chose Scissors. You lose!");
     }
 } else if(playerChoice === "Scissors") {
     if (compChoice === "Rock") {
         alert("Computer chose Rock. You lose!");
     } else {
         alert("Computer chose Paper. You win!");
     }
 }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickButton, false);
}
