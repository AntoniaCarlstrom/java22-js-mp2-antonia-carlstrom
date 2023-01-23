const playerText = document.querySelector(".playerText");
const playerName = document.querySelector(".playerName");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");
const resultText2 = document.querySelector(".resultText2");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const nameButton = document.querySelector(".nameBtn");
const scorePlayerDiv = document.querySelector(".scorePlayerDiv");
const scoreComputerDiv = document.querySelector(".scoreComputerDiv");
const restartButton = document.querySelector(".btn");
const form = document.querySelector("form");
const overlay = document.querySelector(".overlay");

let player;
let computer;
let result;
let scorePlayer = 0;
let scoreComputer = 0;

nameButton.addEventListener("click", (event) => {
  event.preventDefault();
  const nameInput = document.querySelector("form input");
  const playerNameFromInput = nameInput.value;
  playerName.textContent = playerNameFromInput + ":";
  form.style.visibility = "hidden";
});

choiceBtns.forEach((button) =>
  button.addEventListener("click", (event) => {
    event.preventDefault();
    player = button.textContent;
    computerTurn();
    playerText.textContent = `${player}`;
    computerText.textContent = `${computer}`;
    resultText.textContent = checkWinner();

    if (resultText.textContent == "You lose!") {
      scoreComputer++;
    } else if (resultText.textContent == "You win!") {
      scorePlayer++;
    }
    scorePlayerDiv.textContent = `Score: ${scorePlayer}`;
    scoreComputerDiv.textContent = `Score: ${scoreComputer}`;

    if (scorePlayer === 3) {
      resultText2.textContent = `Game over! Player wins! ${scorePlayer} vs ${scoreComputer}`;
      restartButton.style.visibility = "visible";
      overlay.classList.remove("hidden");
    } else if (scoreComputer === 3) {
      resultText2.textContent = `Game over! Computer wins! ${scoreComputer} vs ${scorePlayer}`;
      restartButton.style.visibility = "visible";
      overlay.classList.remove("hidden");
    }

    console.log(scorePlayer);
    console.log(scoreComputer);
  })
);

restartButton.addEventListener("click", () => {
  location.reload();
});

function computerTurn() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computer = "STEN";
      break;
    case 2:
      computer = "SAX";
      break;
    case 3:
      computer = "PÅSE";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Oavgjort!";
  } else if (computer == "STEN") {
    return player == "SAX" ? "You lose!" : "You win!";
  } else if (computer == "SAX") {
    return player == "PÅSE" ? "You lose!" : "You win!";
  } else if (computer == "PÅSE") {
    return player == "STEN" ? "You lose!" : "You win!";
  }
}
