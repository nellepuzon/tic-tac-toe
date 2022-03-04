import {
  oTurn,
  yourTurnO,
  yourTurnX,
  playerTurnO,
  playerTurnX,
} from "./variables.js";

export function playerTurn() {
  if (oTurn) {
    yourTurnX.style.display = "none";
    yourTurnO.style.display = "flex";
    playerTurnO.style.border = "2px dashed rgb(255, 255, 255, 0.5)";
    playerTurnX.style.border = "none";
  } else {
    yourTurnO.style.display = "none";
    yourTurnX.style.display = "flex";
    playerTurnX.style.border = "2px dashed rgb(255, 255, 255, 0.5)";
    playerTurnO.style.border = "none";
  }
}
