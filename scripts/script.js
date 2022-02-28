const topShapes = document.querySelector(".top-decor");
const bottomShapes = document.querySelector(".bottom-decor");
const titleContainer = document.querySelector(".title-container");
const playButton = document.querySelector(".play-button");
const gameContainer = document.querySelector(".container");
const letterX = "x";
const letterO = "o";
const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
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
const playAgainButton = document.querySelector(".play-again-button");
const exitButton = document.querySelector(".exit-button");

let oTurn;

playButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
exitButton.addEventListener("click", exitGame);

function startGame() {
  gameContainer.classList.add("show-board");
  titleContainer.classList.add("hide");
  topShapes.classList.add("hide-shapes");
  bottomShapes.classList.add("hide-shapes");  
  oTurn = false;
  cells.forEach((cell) => {
    cell.classList.remove(letterX);
    cell.classList.remove(letterO);
    cell.removeEventListener("click", cellClick);
    cell.addEventListener("click", cellClick, { once: true });
  });
  cellHover();
  winningMessage.classList.remove("winning-message-show");
}

function cellClick(e) {
  const cell = e.target;
  const currentPlayer = oTurn ? letterO : letterX;
  placeLetter(cell, currentPlayer);
  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    cellHover();
  }
}

function endGame(draw) {
  if (draw) {
    winningText.innerText = "Draw!";
  } else {
    winningText.innerText = `${oTurn ? "O" : "X"} Wins!`;
  }
  winningMessage.classList.add("winning-message-show");
}

function isDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains(letterX) || cell.classList.contains(letterO);
  });
}

function placeLetter(cell, currentPlayer) {
  cell.classList.add(currentPlayer);
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

function checkWin(currentPlayer) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

function exitGame() {
  gameContainer.classList.remove("show-board");
  titleContainer.classList.remove("hide");
  topShapes.classList.remove("hide-shapes");
  bottomShapes.classList.remove("hide-shapes");
}