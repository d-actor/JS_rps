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
  document.getElementById("choice").innerHTML = "You chose " + id
  playerChoice.unshift(this.id)
  compAssign(compChoice.unshift)
  assess(playerChoice[0], compChoice)
}

function assess(playerChoice,compChoice) {
  if (playerChoice  === compChoice) {
     document.getElementById("result").innerHTML = "Computer chose the same. It's a tie!"
 } else if(playerChoice === "Rock") {
     if (compChoice === "Scissors") {
         document.getElementById("result").innerHTML = "Computer chose Scissors. You win!";
     } else {
         document.getElementById("result").innerHTML = "Computer chose Paper. You lose!";
     }
 } else if(playerChoice === "Paper") {
     if(compChoice === "Rock") {
         document.getElementById("result").innerHTML = "Computer chose Rock. You win!";
     } else {
         document.getElementById("result").innerHTML = "Computer chose Scissors. You lose!";
     }
 } else if(playerChoice === "Scissors") {
     if (compChoice === "Rock") {
         document.getElementById("result").innerHTML = "Computer chose Rock. You lose!";
     } else {
         document.getElementById("result").innerHTML = "Computer chose Paper. You win!";
     }
 }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickButton, false);
}
