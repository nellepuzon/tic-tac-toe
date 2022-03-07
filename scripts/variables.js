// PLAY
export const playButton = document.querySelector(".play-button");

// CHOOSE PLAYER 
export const chooseTurn = document.querySelector(".choose-player");
export const frontPage = document.querySelector(".front-page");


// GAME
export const gameContainer = document.querySelector(".container");
export let oTurn;
export let cell;
export let currentPlayer;
export let prevHistoryArray;
export let nextHistoryArray;
export let historyListIndex = 0;
export const letterX = "x";
export const letterO = "o";
export const cells = document.querySelectorAll(".cell");
export const board = document.querySelector(".board");
export const playerX = document.querySelector(".x-player");
export const playerO = document.querySelector(".o-player");
export const yourTurn = document.querySelectorAll(".turn");
export const yourTurnX = document.querySelector(".your-turn-x");
export const yourTurnO = document.querySelector(".your-turn-o");
export const playerTurnX = document.querySelector(".player-turn-x");
export const playerTurnO = document.querySelector(".player-turn-o");

// WIN
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

// HISTORY
export const prevButton = document.querySelector(".previous");
export const nextButton = document.querySelector(".next");
export const historyList = document.querySelector(".history-list");
export const resetButton = document.querySelector(".reset");
export const viewHistoryButton = document.querySelector(".view-history");
export const historyPage = document.querySelectorAll(".history");
export const historyListChildren = document.querySelector(".history-list").children;

// EXIT
export const playAgainButton = document.querySelector(".play-again-button");
export const exitButton = document.querySelector(".exit-button");

// UPDATED VARIABLES

export function oTurnFalse() {
  oTurn = false;
}

export function oTurnTrue() {
  oTurn = true;
}

export function cellTarget(e) {
  cell = e.target;
}

export function notOTurn() {
  oTurn = !oTurn
}

export function historyListIndexPlus() {
  historyListIndex += 1
}

export function historyListIndexMinus() {
  historyListIndex += 1
}


export function historyListIndexLength() {
  historyListIndex = historyListChildren.length - 1;
}

export function prevHistoryArrayEmpty() {
  prevHistoryArray = []
}

export function nextHistoryArrayEmpty() {
  nextHistoryArray = []
}

export function currentPlayerTurn() {
  currentPlayer = oTurn ? letterO : letterX;
}

