import {
  gameContainer,
  chooseTurn,
  historyPage,
  yourTurn,
  cells,
  letterO,
  letterX,
  historyList,
  prevHistoryArrayEmpty,
  nextHistoryArrayEmpty,
} from "./variables.js";

import { playerTurn } from "./player-turn.js";

import { cellHover, cellClick } from "./play-game.js";

export function startGame() {
  gameContainer.classList.add("show");
  chooseTurn.classList.remove("show");
  for (let i = 0; i < historyPage.length; ++i) {
    historyPage[i].classList.remove("show");
  }
  for (let i = 0; i < yourTurn.length; ++i) {
    yourTurn[i].classList.add("show");
  }

  playerTurn();

  cells.forEach(function (cell) {
    cell.classList.remove(letterX);
    cell.classList.remove(letterO);
    // cell.removeEventListener("click", cellClick);
    cell.addEventListener("click", cellClick, { once: true });
  });

  cellHover();

  historyList.innerHTML = "";
  prevHistoryArrayEmpty();
  nextHistoryArrayEmpty();
}
