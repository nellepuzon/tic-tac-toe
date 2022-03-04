// START GAME

export const topShapes = document.querySelector(".top-decor");
export const bottomShapes = document.querySelector(".bottom-decor");
export const titleContainer = document.querySelector(".title-container");
export const playButton = document.querySelector(".play-button");
export let oTurn;

export function updateVar() {
  oTurn = false;
}

export function notO() {
  oTurn = !oTurn;
}

// PLAYER TURN

export const yourTurnX = document.querySelector(".your-turn-x");
export const yourTurnO = document.querySelector(".your-turn-o");
export const playerTurnX = document.querySelector(".player-turn-x");
export const playerTurnO = document.querySelector(".player-turn-o");

// PLAY GAME

export const gameContainer = document.querySelector(".container");
export const letterX = "x";
export const letterO = "o";
export const cells = document.querySelectorAll(".cell");
export const board = document.querySelector(".board");

// END GAME

export const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export const winningMessage = document.querySelector(".winning-message");
export const winningText = document.querySelector(".winning-text");
export const playAgainButton = document.querySelector(".play-again-button");

// EXIT GAME

export const exitButton = document.querySelector(".exit-button");

// VIEW HISTORY

export const prevButton = document.querySelector(".previous");
export const nextButton = document.querySelector(".next");
export const exitHistory = document.querySelector(".exit");
export const historyContainer = document.querySelector(".show-history");
export const viewHistoryButton = document.querySelector(".view-history");

// MOVE HISTORY LIST

export const historyList = document.querySelector(".history-list");
export const moveHistory = [];
export let boardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];


