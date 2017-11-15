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
    console.log(playerChoice)
    console.log(compChoice)
  alert('You clicked ' + id)
  playerChoice.unshift(this.id)
  console.log(playerChoice)
  compAssign(compChoice.unshift)
  console.log(compChoice)
  assess(playerChoice[0], compChoice)
}

function assess(playerChoice,compChoice) {
    if(playerChoice == 'Rock' && compChoice == "Scissors") {
    alert('You win!')
  } else if(playerChoice == 'Paper' && compChoice == "Scissors") {
    alert('You lose!')
  } else if(playerChoice == 'Scissors' && compChoice == "Scissors") {
    alert('Tie!')
  } else if(playerChoice == 'Rock' && compChoice == "Paper") {
    alert('You lose!')
  } else if(playerChoice == 'Paper' && compChoice == "Paper") {
    alert('Tie!')
  } else if(playerChoice == 'Scissors' && compChoice == "Paper") {
    alert('You Win!')
  } else if(playerChoice == 'Rock' && compChoice == "Rock") {
    alert('Tie!')
  } else if(playerChoice == 'Paper' && compChoice == "Rock") {
    alert('You Win!')
  } else if(playerChoice == 'Scissors' && compChoice == "Rock") {
  alert('You lose!')
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickButton, false);
}
