const topShapes = document.querySelector(".top-decor");
const bottomShapes = document.querySelector(".bottom-decor");
const titleContainer = document.querySelector(".title-container");
const playButton = document.querySelector(".play-button");
const gameContainer = document.querySelector(".container");
const letterX = "x";
const letterO = "o";
const cells = document.querySelectorAll(".cell");

let oTurn;

playButton.addEventListener("click", startGame);

function startGame() {
  gameContainer.classList.add("show-board");
  titleContainer.classList.add("hide");
  topShapes.classList.add("hide-shapes");
  bottomShapes.classList.add("hide-shapes");
  oTurn = false;
}

cells.forEach((cell) => {
    cell.classList.remove(letterX);
    cell.classList.remove(letterO);
    cell.addEventListener("click", cellClick, { once: true });
  });


function cellClick(e) {
  const cell = e.target;
  const playerTurn = oTurn ? letterO : letterX;
  placeLetter(cell, playerTurn);
    swapTurns();
    cellHover();
  }


function placeLetter(cell, playerTurn) {
  cell.classList.add(playerTurn);
}

function swapTurns() {
  oTurn = !oTurn;
}

