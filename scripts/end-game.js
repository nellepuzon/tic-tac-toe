import {
  winningText,
  winningMessage,
  yourTurnO,
  yourTurnX,
  playerTurnO,
  playerTurnX,
  cells,
  letterO,
  letterX,
  winningCombinations,
  playAgainButton,
  oTurn,
} from "./variables.js";

import { startGame } from "./start-game.js";

export function endGame(draw) {
  if (draw) {
    winningText.innerText = "Draw!";
  } else {
    winningText.innerText = `${oTurn ? "O" : "X"} Wins!`;
  }
  winningMessage.classList.add("winning-message-show");
  yourTurnO.style.display = "none";
  yourTurnX.style.display = "none";
  playerTurnX.style.border = "none";
  playerTurnO.style.border = "none";
}

export function isDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains(letterX) || cell.classList.contains(letterO);
  });
}

export function checkWin(currentPlayer) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

playAgainButton.addEventListener("click", startGame);
