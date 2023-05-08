// Your code here
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const redButton = document.getElementById("red-input");
  redButton.addEventListener("input", (e) => {
    if (e.target.value === "red") {
      redButton.style.backgroundColor = "red";
    }
  });
  //  add item to list
  const input = document.getElementById("list-add");
  let text = "";
  input.addEventListener("change", (e) => {
    text = e.target.value;
  });
  const button = document.getElementById("add-item");
  button.addEventListener("click", () => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  });
  // change color
  const inputColor = document.getElementById("color-select");
  inputColor.addEventListener("change", (e) => {
    const color = e.target.value;
    const section = document.getElementById("section-3");
    section.style.backgroundColor = color;
  });
  //remove listener
});
