let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice: ");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats rock";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats paper";
  } else {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
  }
  if (humanScore === computerScore) {
    console.log("It's a tie!");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
  } else if (humanScore > computerScore) {
    console.log("You win the game!");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
  } else {
    console.log("You lose the game!");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }
}

playGame();
