import {
  oTurn,
  yourTurnO,
  yourTurnX,
  playerTurnO,
  playerTurnX,
} from "./variables.js";

export function playerTurn() {
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
