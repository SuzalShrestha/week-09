import { createMainContent } from "./main.js";
import { fetchImage } from "./main.js";
let scoreNum = 0;
const createScoreAndVotes = () => {
  const score = document.createElement("h2");
  score.innerText = " Popularity Score: 0";
  score.id = "score";
  document.querySelector(".container").appendChild(score);

  const buttons = document.createElement("div");
  buttons.id = "buttons";

  const upvotes = document.createElement("button");
  upvotes.innerText = "Upvote";
  upvotes.id = "upvotes";
  upvotes.addEventListener("click", () => {
    let score = document.getElementById("score");
    scoreNum++;
    score.innerText = " Popularity Score: " + scoreNum;
  });
  buttons.appendChild(upvotes);

  const downvotes = document.createElement("button");
  downvotes.innerText = "Downvote";
  downvotes.id = "downvotes";
  downvotes.addEventListener("click", () => {
    let score = document.getElementById("score");
    if (scoreNum > 0) scoreNum--;
    score.innerText = " Popularity Score: " + scoreNum;
  });
  buttons.appendChild(downvotes);

  document.querySelector(".container").appendChild(buttons);
};
const createComments = () => {
  const comments = document.createElement("div");
  comments.id = "comments";
  comments.innerText = "Comment: ";

  const input = document.createElement("input");
  input.placeholder = "Add a comment...";

  const submit = document.createElement("button");
  submit.innerText = "Submit";
  submit.addEventListener("click", () => {
    let commentText = document.querySelector("input").value;
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.innerText = commentText;
    ul.appendChild(li);
    document.querySelector("input").value = "";
    document.getElementById("textField").appendChild(ul);
  });
  comments.appendChild(input);
  comments.appendChild(submit);
  document.querySelector(".container").appendChild(comments);

  const textField = document.createElement("div");
  textField.id = "textField";
  textField.style.height = "500px";
  textField.style.width = "500px";
  textField.style.border = "1px solid black";

  const ul = document.createElement("ul");
  ul.id = "ul";
  ul.style.listStyleType = "none";

  textField.appendChild(ul);
  document.querySelector(".container").appendChild(textField);
};
const makeButton = () => {
  const button = document.createElement("button");
  button.innerText = "New Cat";
  button.addEventListener("click", () => {
    document.querySelector("img").removeAttribute("src");
    scoreNum = 0;
    document.getElementById("score").innerText = " Popularity Score: 0";
    document.getElementById("ul").remove();
    let ul = document.createElement("ul");
    ul.id = "ul";
    ul.style.listStyleType = "none";
    document.getElementById("textField").appendChild(ul);

    fetchImage();
  });
  document.querySelector(".container").appendChild(button);
};
const initializePage = () => {
  // Create container
  const container = document.createElement("section");
  container.className = "container";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.marginTop = "20px";
  document.body.appendChild(container);
};

window.onload = () => {
  initializePage();
  createMainContent();
  createScoreAndVotes();
  createComments();
  makeButton();
};
