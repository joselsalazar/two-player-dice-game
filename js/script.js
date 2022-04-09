"use strict";

// Select Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const playerDiv = document.querySelectorAll(".player");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

// Starting Conditions
const resetGame = () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
};

resetGame();

const toggle = () => {
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

const playerSwitch = () => {
  currentScore = 0;
  const playerScore = document.querySelector(`#current--${activePlayer}`);
  playerScore.textContent = currentScore;
  if (activePlayer === 1) {
    activePlayer -= 1;
    toggle();
  } else {
    activePlayer += 1;
    toggle();
  }
};

const winLogic = () => {
  resetGame();
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", () => {
  const playerScore = document.querySelector(`#current--${activePlayer}`);
  // Generate Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(activePlayer);

  //   Display Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `images/dice-${dice}.png`;
  //   If 1, Jump To Next Player
  if (dice !== 1) {
    currentScore += dice;
    scores[activePlayer] += dice;
    playerScore.textContent = currentScore;
  } else {
    playerSwitch();
  }
});

btnNew.addEventListener("click", () => {
  resetGame();
});

btnHold.addEventListener("click", () => {
  const currentScoreElement = document.querySelector(
    `#current--${activePlayer}`
  );
  const highScoreElement = document.querySelector(`#score--${activePlayer}`);
  const currentScore = parseInt(currentScoreElement.textContent);
  const highScore = parseInt(highScoreElement.textContent);
  const totalScore = currentScore + highScore;
  highScoreElement.textContent = totalScore;
  if (totalScore >= 50) {
    winLogic();
  } else {
    playerSwitch();
  }
});
