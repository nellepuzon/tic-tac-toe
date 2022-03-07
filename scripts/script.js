// PLAY

const playButton = document.querySelector(".play-button");
const frontPage = document.querySelector(".front-page");
const chooseTurn = document.querySelector(".choose-player");
const playerX = document.querySelector(".x-player");
const playerO = document.querySelector(".o-player");
let oTurn;

playButton.addEventListener("click", choosePlayer);

// CHOOSE PLAYER

const gameContainer = document.querySelector(".container");

function choosePlayer() {
  frontPage.classList.add("hide");
  chooseTurn.classList.add("show");
  winningMessage.classList.remove("show");
  gameContainer.classList.remove("show");

  playerX.addEventListener("click", clickedPlayerX);
  function clickedPlayerX() {
    oTurn = false;
    startGame();
  }

  playerO.addEventListener("click", clickedPlayerO);
  function clickedPlayerO() {
    oTurn = true;
    startGame();
  }
}

// START GAME

let prevHistoryArray;
let nextHistoryArray;
let historyListIndex = 0;

function startGame() {
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
    cell.addEventListener("click", cellClick, { once: true });
  });

  cellHover();

  historyList.innerHTML = "";
  prevHistoryArray = [];
  nextHistoryArray = [];
}

// PLAYER TURN

const yourTurnX = document.querySelector(".your-turn-x");
const yourTurnO = document.querySelector(".your-turn-o");
const playerTurnX = document.querySelector(".player-turn-x");
const playerTurnO = document.querySelector(".player-turn-o");

function playerTurn() {
  if (oTurn) {
    yourTurnO.classList.add("show");
    yourTurnX.classList.remove("show");
    playerTurnO.classList.add("border");
    playerTurnX.classList.remove("border");
  } else {
    yourTurnX.classList.add("show");
    yourTurnO.classList.remove("show");
    playerTurnX.classList.add("border");
    playerTurnO.classList.remove("border");
  }
}

// PLAY GAME

const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
const letterX = "x";
const letterO = "o";
let currentPlayer;
let cell;

function cellClick(e) {
  cell = e.target;
  const cellPosition = cell.innerText;
  currentPlayer = oTurn ? letterO : letterX;
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

const historyList = document.querySelector(".history-list");

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

  historyListIndex += 1;
}

function swapTurns() {
  oTurn = !oTurn;
}

function cellHover() {
  board.classList.remove(letterX);
  board.classList.remove(letterO);
  if (oTurn) {
    board.classList.add(letterO);
  } else {
    board.classList.add(letterX);
  }
}

// CHECK WIN

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const winningMessage = document.querySelector(".winning-message");
const winningText = document.querySelector(".winning-text");

function endGame(draw) {
  if (draw) {
    winningText.innerText = "Draw!";
  } else {
    winningText.innerText = `${oTurn ? "O" : "X"} Wins!`;
  }
  winningMessage.classList.add("show");
}

function isDraw() {
  return [...cells].every(function (cell) {
    return cell.classList.contains(letterX) || cell.classList.contains(letterO);
  });
}

function checkWin(currentPlayer) {
  return winningCombinations.some(function (combination) {
    return combination.every(function (index) {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

// HISTORY

const viewHistoryButton = document.querySelector(".view-history");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const resetButton = document.querySelector(".reset");
const historyPage = document.querySelectorAll(".history");
const yourTurn = document.querySelectorAll(".turn");

viewHistoryButton.addEventListener("click", viewHistory);

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

  historyListIndex = historyListChildren.length - 1;
}

function noCellHover() {
  board.classList.remove(letterX);
  board.classList.remove(letterO);
}

prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
resetButton.addEventListener("click", startGame);

const historyListChildren = document.querySelector(".history-list").children;

function displayListItem(historyListIndex, display) {
  historyListChildren[historyListIndex].style.display = display;
}

function previous() {
  if (prevHistoryArray.length > 1) {
    displayListItem(historyListIndex, "none");
    historyListIndex -= 1;
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
    historyListIndex += 1;
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

// PLAY AGAIN

const playAgainButton = document.querySelector(".play-again-button");
playAgainButton.addEventListener("click", choosePlayer);

// EXIT GAME

const exitButton = document.querySelector(".exit-button");

function exitGame() {
  gameContainer.classList.remove("show");
  winningMessage.classList.remove("show");
  frontPage.classList.remove("hide");
}

exitButton.addEventListener("click", exitGame);