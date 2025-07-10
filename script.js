const buttons = document.querySelectorAll("button");
const notif = document.querySelector(".notif");
const scoreboard = document.querySelector(".scoreboard");
const humanScoreUI = document.querySelector("#human-score");
const computerScoreUI = document.querySelector("#computer-score");
const notifText = document.querySelector("#notif-text");

let humanScore = 0;
let computerScore = 0;
let clickCount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.textContent.toLowerCase();

    playGame(humanChoice);
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "👊";
  } else if (randomNumber === 1) {
    return "🖐";
  } else {
    return "✌";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!🔁 No score added.";
  } else if (humanChoice === "👊" && computerChoice === "✌") {
    humanScore++;
    return "You win!😎" + humanChoice + "beats" + computerChoice;
  } else if (humanChoice === "🖐" && computerChoice === "👊") {
    humanScore++;
    return "You win!😆" + humanChoice + "beats" + computerChoice;
  } else if (humanChoice === "✌" && computerChoice === "🖐") {
    humanScore++;
    return "You win!🤩" + humanChoice + "beats" + computerChoice;
  } else {
    computerScore++;
    return "You lose!😫" + computerChoice + "beats" + humanChoice;
  }
}

function playGame(humanchoice) {
  const humanChoice = humanchoice;
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  notifText.textContent = result;
  humanScoreUI.textContent = humanScore;
  computerScoreUI.textContent = computerScore;

  clickCount++;

  if (clickCount == 5) {
    setTimeout(() => {
      if (humanScore === computerScore) {
        alert(
          `Its a tie! Your score: ${humanScore} Computer score: ${computerScore}`
        );
      } else if (humanScore > computerScore) {
        alert(
          `You win! Your score: ${humanScore} Computer score: ${computerScore}`
        );
      } else {
        alert(
          `You lose! Your score: ${humanScore} Computer score: ${computerScore}`
        );
      }

      clickCount = 0;
      humanScore = 0;
      computerScore = 0;
      notifText.textContent = "Start a new round!🚀";
      humanScoreUI.textContent = humanScore;
      computerScoreUI.textContent = computerScore;
    }, 0);
  }
}
