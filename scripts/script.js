const topShapes = document.querySelector(".top-decor");
const bottomShapes = document.querySelector(".bottom-decor");
const titleContainer = document.querySelector(".title-container");
const playButton = document.querySelector(".play-button");
const gameContainer = document.querySelector(".container");

playButton.addEventListener("click", startGame);

function startGame() {
    gameContainer.classList.add("show-board");
    titleContainer.classList.add("hide");
    topShapes.classList.add("hide-shapes");
    bottomShapes.classList.add("hide-shapes");
}


