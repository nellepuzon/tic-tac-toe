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

let oTurn;

playButton.addEventListener("click", startGame);

function startGame() {
  gameContainer.classList.add("show-board");
  titleContainer.classList.add("hide");
  topShapes.classList.add("hide-shapes");
  bottomShapes.classList.add("hide-shapes");
  oTurn = false;
  cells.forEach((cell) => {
    cell.classList.remove(letterX);
    cell.classList.remove(letterO);
    cell.addEventListener("click", cellClick, { once: true });
  });
  cellHover();
}

function cellClick(e) {
  const cell = e.target;
  const currentPlayer = oTurn ? letterO : letterX;
  placeLetter(cell, currentPlayer);
  swapTurns();
  cellHover();
  if (checkWin(currentPlayer)) {
      console.log('winner')
  }
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
  