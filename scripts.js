const resultdisplay = document.getElementById("result");
const clear = document.getElementById("Clear");
function playGame(playerchoice) {
  const choices = ["scissors", "paper", "Rock"];

  const randomIndex = choices[Math.floor(Math.random() * 3)];
  console.log(randomIndex);

  let result = "";

  switch (playerchoice) {
    case "Scissors":
      switch (randomIndex) {
        case "scissors":
          result = "It's a tie!";
          break;
        case "paper":
          result = "Scissors cuts Paper, you win!";
          break;
        case "Rock":
          result = "Rock crushes Scissors, you lose!";
          break;
      }

    case "Paper":
      switch (randomIndex) {
        case "scissors":
          result = "Scissors cuts Paper, you lose!";
          break;
        case "paper":
          result = "It's a tie!";
          break;
        case "Rock":
          result = "Paper beats Rock, you win!";
          break;
      }
      break;

    case "Rock":
      switch (randomIndex) {
        case "scissors":
          result = "Rock crushes Scissors, you win!";
          break;
        case "paper":
          result = "Paper covers Rock, you lose!";
          break;
        case "Rock":
          result = "It's a tie!";
          break;
      }
      break;
    default:
      result = "Invalid choice! Please Choose Rock, Paper and Scissors.";
  }
  resultdisplay.textContent = `Computer chose ${randomIndex}. ${result}`;
}

clear.addEventListener("click", function () {
  resultdisplay.textContent = "";
});
