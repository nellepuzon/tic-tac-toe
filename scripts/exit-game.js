import {
  gameContainer,
  winningMessage,
  frontPage,
  exitButton
} from "./variables.js"

function exitGame() {
  gameContainer.classList.remove("show");
  winningMessage.classList.remove("show");
  frontPage.classList.remove("hide");
}

exitButton.addEventListener("click", exitGame);