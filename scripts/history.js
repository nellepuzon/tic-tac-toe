import {
  gameContainer,
  board,
  cells,
  letterX,
  letterO,
  winningMessage,
  yourTurn,
  historyPage,
  viewHistoryButton,
  prevButton,
  nextButton,
  resetButton,
  historyListChildren,
  historyListIndexLength,
  prevHistoryArray,
  nextHistoryArray,
  historyListIndexMinus,
  historyListIndexPlus,
  historyListIndex
} from "./variables.js"

import {
  startGame
} from "./start-game.js"

import {
  cellClick,
} from "./play-game.js"

function viewHistory() {
  gameContainer.classList.add("show");
  cells.forEach(function (cell) {
    cell.removeEventListener("click", cellClick);
  });
  noCellHover();
  winningMessage.classList.remove("show");

  for (let i = 0; i < yourTurn.length; ++i) {
    yourTurn[i].classList.remove("show");
  }

  for (let i = 0; i < historyPage.length; ++i) {
    historyPage[i].classList.add("show");
  }

 historyListIndexLength();
}

function noCellHover() {
  board.classList.remove(letterX);
  board.classList.remove(letterO);
}

viewHistoryButton.addEventListener("click", viewHistory);

function previous() {
  if (prevHistoryArray.length > 1) {
    displayListItem(historyListIndex, "none");
    historyListIndexMinus();
    nextButton.style.opacity = "1";
    nextButton.classList.add("active");
    previousMove();
  }
  if (prevHistoryArray.length < 2) {
    prevButton.style.opacity = "0.3";
    prevButton.classList.remove("active");
  }
}

function next() {
  if (nextHistoryArray.length > 0) {
    historyListIndexPlus();
    displayListItem(historyListIndex, "block");
    prevButton.style.opacity = "1";
    prevButton.classList.add("active");
    nextMove();
  }
  if (nextHistoryArray.length < 1) {
    nextButton.style.opacity = "0.3";
    nextButton.classList.remove("active");
  }
}

function displayListItem(historyListIndex, display) {
  historyListChildren[historyListIndex].style.display = display;
}

function previousMove() {
  let undoMove = prevHistoryArray.pop();
  let prevPlayer = undoMove[1];
  let prevCell = undoMove[0];
  nextHistoryArray.push(undoMove);
  prevCell.classList.remove(prevPlayer);
}

function nextMove() {
  let redoMove = nextHistoryArray.pop();
  let nextPlayer = redoMove[1];
  let nextCell = redoMove[0];
  prevHistoryArray.push(redoMove);
  nextCell.classList.add(nextPlayer);
}

prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
resetButton.addEventListener("click", startGame);