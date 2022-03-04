import { board, letterO, letterX, notO, oTurn } from "./variables.js";

import { playerTurn } from "./player-turn.js";

import { endGame, isDraw, checkWin } from "./end-game.js";

import { getCellValue, renderBoard, pushBoard } from "./history.js";

export function cellClick(e) {
  const cell = e.target;
  const cellName = cell.innerText;
  const currentPlayer = oTurn ? letterO : letterX;
  getCellValue(currentPlayer, cellName);
  placeLetter(cell, currentPlayer);
  renderBoard(cell, currentPlayer);
  pushBoard();
  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    cellHover();
    playerTurn();
  }
}

function placeLetter(cell, currentPlayer) {
  cell.classList.add(currentPlayer);
}

function swapTurns() {
  notO();
}

export function cellHover() {
  board.classList.remove(letterX);
  board.classList.remove(letterO);
  if (oTurn) {
    board.classList.add(letterO);
  } else {
    board.classList.add(letterX);
  }
}
