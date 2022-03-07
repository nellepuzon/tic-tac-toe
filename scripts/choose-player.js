import {
  playButton,
  frontPage,
  chooseTurn,
  winningMessage,
  gameContainer,
  playerX,
  playerO,
  oTurnFalse,
  oTurnTrue
} from "./variables.js";

import {
    startGame
} from "./start-game.js"

playButton.addEventListener("click", choosePlayer);

export function choosePlayer() {
  frontPage.classList.add("hide");
  chooseTurn.classList.add("show");
  winningMessage.classList.remove("show");
  gameContainer.classList.remove("show");

  playerX.addEventListener("click", clickedPlayerX);
  function clickedPlayerX() {
    oTurnFalse();
    startGame();
  }

  playerO.addEventListener("click", clickedPlayerO);
  function clickedPlayerO() {
    oTurnTrue();
    startGame();
  }
}
