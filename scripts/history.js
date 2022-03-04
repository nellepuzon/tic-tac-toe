import {
  gameContainer,
  cells,
  winningMessage,
  yourTurnO,
  yourTurnX,
  playerTurnO,
  playerTurnX,
  prevButton,
  nextButton,
  exitHistory,
  historyContainer,
  viewHistoryButton,
  historyList,
  moveHistory,
  boardState,
  letterO,
  letterX
} from "./variables.js";

import { startGame } from "./start-game.js";

import { cellClick } from "./play-game.js";

function viewHistory() {
  gameContainer.classList.add("show-board");
  cells.forEach(function (cell) {
    // cell.classList.remove(letterX);
    // cell.classList.remove(letterO);
    cell.removeEventListener("click", cellClick);
    // cell.addEventListener("click", cellClick, { once: true });
  });
  // cellHover();
  winningMessage.classList.remove("winning-message-show");

  yourTurnO.style.display = "none";
  yourTurnX.style.display = "none";
  playerTurnO.style.display = "none";
  playerTurnX.style.display = "none";
  prevButton.style.display = "flex";
  nextButton.style.display = "flex";
  exitHistory.style.display = "flex";
  historyContainer.style.display = "flex";
}

exitHistory.addEventListener("click", startGame);
viewHistoryButton.addEventListener("click", viewHistory);

// MOVE HISTORY LIST

export function getCellValue(turn, position) {
  const div = document.createElement("div");
  if (turn == letterX) {
    div.innerHTML = `player <span class="markedX">X</span> marked <span class="position">${position}</span>`;

    turn = 0;
  } else if (turn == letterO) {
    div.innerHTML = `player <span class="markedO">O</span> marked <span class="position">${position}</span>`;

    turn = 1;
  }
  historyList.append(div);
}

export function renderBoard(cell, turn) {
  if (cell.classList.contains("top-left")) {
    boardState[0][0] = turn;
  } else if (cell.classList.contains("top-center")) {
    boardState[0][1] = turn;
  } else if (cell.classList.contains("top-right")) {
    boardState[0][2] = turn;
  } else if (cell.classList.contains("middle-left")) {
    boardState[1][0] = turn;
  } else if (cell.classList.contains("center")) {
    boardState[1][1] = turn;
  } else if (cell.classList.contains("middle-right")) {
    boardState[1][2] = turn;
  } else if (cell.classList.contains("bottom-left")) {
    boardState[2][0] = turn;
  } else if (cell.classList.contains("bottom-center")) {
    boardState[2][1] = turn;
  } else if (cell.classList.contains("bottom-right")) {
    boardState[2][2] = turn;
  }
}

export function pushBoard() {
  // moveHistory.push(boardState)
  moveHistory.push(JSON.parse(JSON.stringify(boardState)));
  // const div = document.createElement("div");
  // div.innerHTML = JSON.stringify(moveHistory.pop());
  // const historyList = document.querySelector(".history-list");
  // historyList.append(div);
}
