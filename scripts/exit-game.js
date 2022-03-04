import {
  exitButton,
  gameContainer,
  titleContainer,
  topShapes,
  bottomShapes,
} from "./variables.js";

function exitGame() {
  gameContainer.classList.remove("show-board");
  titleContainer.classList.remove("hide");
  topShapes.classList.remove("hide-shapes");
  bottomShapes.classList.remove("hide-shapes");
}

exitButton.addEventListener("click", exitGame);
