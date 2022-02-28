const topShapes = document.querySelector(".top-decor");
const bottomShapes = document.querySelector(".bottom-decor");
const titleContainer = document.querySelector(".title-container");
const playButton = document.querySelector(".play-button");
const gameContainer = document.querySelector(".container");


let oTurn;

playButton.addEventListener("click", startGame);

function startGame() {
    oTurn = false;
    gameContainer.classList.add("show-board");
    titleContainer.classList.add("hide");
    topShapes.classList.add("hide-shapes");
    bottomShapes.classList.add("hide-shapes");
}


