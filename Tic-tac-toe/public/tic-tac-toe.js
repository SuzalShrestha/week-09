// Your code here
function checkWinner() {
  const squares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    let a, b, c;
    if (squares[combo[0]].children[0]) {
      a = squares[combo[0]].children[0].getAttribute("src");
    }
    if (squares[combo[1]].children[0]) {
      b = squares[combo[1]].children[0].getAttribute("src");
    }
    if (squares[combo[2]].children[0]) {
      c = squares[combo[2]].children[0].getAttribute("src");
    }
    if (a && b && c) {
      if (a === b && b === c && a !== null) {
        return squares[combo[0]].children[0].getAttribute("alt");
      }
    }
  }
  return "None";
}
window.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("board");
  const newGame = document.getElementById("new-game");
  const giveUp = document.getElementById("give-up");
  var playerTurn = "X";
  var winner = "None";

  newGame.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].innerHTML = "";
    }
    document.getElementById("status").innerText = "Winner";
    grid.addEventListener("click", callback);
    newGame.disabled = true;
    winner = "None";
    playerTurn = "X";
    giveUp.disabled = false;
  });

  newGame.disabled = true;
  
  giveUp.addEventListener("click", () => {
    if (winner !== "None") {
      return;
    }
    if (playerTurn === "X") {
      document.getElementById("status").innerText = "Winner: O";
    } else {
      document.getElementById("status").innerText = "Winner: X";
    }
    newGame.disabled = false;
    grid.removeEventListener("click", callback);
    giveUp.disabled = true;
  });

  function callback(e) {
    if (e.target.tagName === "IMG") {
      return;
    }
    if (winner !== "None") {
      return;
    }
    if (playerTurn === "X") {
      e.target.innerHTML =
        "<img src='https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg' alt='X'>";
      playerTurn = "O";
    } else {
      e.target.innerHTML =
        "<img src='https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg' alt='O'>";
      playerTurn = "X";
    }
    //for tie
    const squares = document.querySelectorAll(".square");
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].children[0]) {
        count++;
      }
    }

    if (count === 9) {
      document.getElementById("status").innerText = "Winner: None";
      newGame.disabled = false;
      giveUp.disabled = true;
      grid.removeEventListener("click", callback);
    }
    winner = checkWinner();
    if (winner) {
      if (winner !== "None") {
        document.getElementById("status").innerText = "Winner: " + winner;
        newGame.disabled = false;
        giveUp.disabled = true;
        grid.removeEventListener("click", callback);
      }
    }
  }
  grid.addEventListener("click", callback);
});
