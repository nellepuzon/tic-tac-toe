import {
  winningText,
  winningMessage,
  cells,
  letterO,
  letterX,
  oTurn,
  winningCombinations,
  playAgainButton
} from "./variables.js";

import {
  choosePlayer
} from "./choose-player.js"

export function endGame(draw) {
  if (draw) {
    winningText.innerText = "Draw!";
  } else {
    winningText.innerText = `${oTurn ? "O" : "X"} Wins!`;
  }
  winningMessage.classList.add("show");
}

export function isDraw() {
  return [...cells].every(function (cell) {
    return cell.classList.contains(letterX) || cell.classList.contains(letterO);
  });
}

export function checkWin(currentPlayer) {
  return winningCombinations.some(function (combination) {
    return combination.every(function (index) {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

playAgainButton.addEventListener("click", choosePlayer);
