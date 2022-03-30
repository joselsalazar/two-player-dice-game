"use strict";

// Select Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling Dice Functionality
btnRoll.addEventListener("click", () => {
  // Generate Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   Display Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `images/dice-${dice}.png`;

  //   If 1, Jump To Next Player
  if (dice === 1) {
    player0El.classList.remove("player--active");
    player1El.classList.add("player--active");
  }
});
