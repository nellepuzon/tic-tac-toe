import {
  currentPlayer,
  letterX,
  letterO,
  oTurn,
  historyList,
  board,
  notOTurn,
  historyListIndexPlus,
  prevHistoryArray,
  cellTarget,
  cell,
  currentPlayerTurn
} from "./variables.js"

import {
  checkWin,
  endGame,
  isDraw
} from "./end-game.js"

import {
  playerTurn
} from "./player-turn.js"

export function cellClick(e) {
  cellTarget(e);
  const cellPosition = cell.innerText;
  currentPlayerTurn();

  getCellValue(currentPlayer, cellPosition);
  placeLetter(cell, currentPlayer);

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

function getCellValue(currentPlayer, cellPosition) {
  const div = document.createElement("div");
  if (currentPlayer == letterX) {
    div.innerHTML = `player <span class="markedX">X</span> marked <span class="position">${cellPosition}</span>`;
  } else {
    div.innerHTML = `player <span class="markedO">O</span> marked <span class="position">${cellPosition}</span>`;
  }
  div.classList.add("history-item");
  historyList.append(div);
}

function placeLetter(cell, currentPlayer) {
  cell.classList.add(currentPlayer);
  prevHistoryArray.push([cell, currentPlayer]);

  if (currentPlayer == "x") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }

historyListIndexPlus();
}

export function swapTurns() {
  notOTurn();
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
