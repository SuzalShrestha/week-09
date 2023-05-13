import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
function initiateBoard() {
  //message
  const message = document.createElement("span");
  message.setAttribute("id", "message");
  document.body.appendChild(message);

  //play again button
  const playAgain = document.createElement("button");
  playAgain.setAttribute("id", "play-again");
  playAgain.innerText = "Play Again";
  playAgain.addEventListener("click", () => {
    location.reload();
  });
  document.body.appendChild(playAgain);

  //board
  const container = document.createElement("div");
  container.setAttribute("id", "board");
  document.body.appendChild(container);

  for (let i = 0; i < board.grid.length; i++) {
    //row
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board.grid[i].length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-col", j);
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}
initiateBoard();

function callback(e) {
  const cell = e.target;
  const row = cell.getAttribute("data-row");
  const col = cell.getAttribute("data-col");
  const updatedBoard = board.makeHit(row, col);

  if (updatedBoard) {
    cell.classList.add("hit");
    cell.innerText = updatedBoard;
  } else {
    cell.classList.add("miss");
  }
  if (board.isGameOver()) {
    document.getElementById("message").innerText = "You Win!!";
    document.getElementById("board").removeEventListener("click", callback);
  }
}
document.getElementById("board").addEventListener("click", callback);
