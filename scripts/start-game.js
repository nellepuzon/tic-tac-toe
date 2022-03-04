import {
  topShapes,
  bottomShapes,
  titleContainer,
  playButton,
  yourTurnX,
  yourTurnO,
  playerTurnX,
  playerTurnO,
  gameContainer,
  cells,
  winningMessage,
  letterO,
  letterX,
  updateVar,
  prevButton,
  nextButton,
  exitHistory,
  historyContainer,
  historyList
} from "./variables.js";

import { cellHover, cellClick } from "./play-game.js";

export function startGame() {
  gameContainer.classList.add("show-board");
  titleContainer.classList.add("hide");
  topShapes.classList.add("hide-shapes");
  bottomShapes.classList.add("hide-shapes");
  yourTurnX.style.display = "flex";
  yourTurnO.style.display = "none";
  playerTurnX.style.display = "flex";
  playerTurnO.style.display = "flex";
  playerTurnX.style.border = "2px dashed rgb(255, 255, 255, 0.5)";
  playerTurnO.style.border = "none";
  updateVar();
  cells.forEach(function (cell) {
    cell.classList.remove(letterX);
    cell.classList.remove(letterO);
    cell.removeEventListener("click", cellClick);
    cell.addEventListener("click", cellClick, { once: true });
  });
  cellHover();
  winningMessage.classList.remove("winning-message-show");
  prevButton.style.display = "none";
  nextButton.style.display = "none";
  exitHistory.style.display = "none";
  historyContainer.style.display = "none";
  historyList.innerHTML = "";
}

playButton.addEventListener("click", startGame);
