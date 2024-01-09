let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/*if (score===null){
score= {
wins:0,
losses:0,
ties:0
}
}*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you lose";
    } else if (computerMove === "paper") {
      result = "you win";
    } else if (computerMove === "scissors") {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissors") {
      result = "you lose";
    } else if (computerMove === "rock") {
      result = "you win";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "you lose";
    } else if (computerMove === "scissors") {
      result = "you win";
    }
  }

  console.log(result);

  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  console.log(result);

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-moves").innerHTML = `you
  <img src="images/${playerMove}-emoji.png" class="move-button" />
  <img src="images/${computerMove}-emoji.png" class="move-button" />
  computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins:${score.wins}, \n losses:${score.losses}, \n ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let move = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    move = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    move = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    move = "scissors";
  }

  return move;
}