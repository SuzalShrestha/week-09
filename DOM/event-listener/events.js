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
  const removeListener = document.getElementById("remove-listeners");
  removeListener.addEventListener("click", () => {
    inputColor.removeEventListener("change", (e) => {
      const color = e.target.value;
      const section = document.getElementById("section-3");
      section.style.backgroundColor = color;
    });
    button.removeEventListener("click", () => {
      const list = document.querySelector("ul");
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    });
    input.removeEventListener("change", (e) => {
      text = e.target.value;
    });
    redButton.removeEventListener("input", (e) => {
      if (e.target.value === "red") {
        redButton.style.backgroundColor = "red";
      }
    });
    window.removeEventListener("DOMContentLoaded", () => {
      console.log("DOM fully loaded and parsed");
    });
  });
  //event listener which triggers alert when space bar is pressed
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      alert("Space bar pressed");
    }
  });
  //create a event listener which triggers when hovering over a div element
  const div = document.getElementById("hover-div");
  div.addEventListener("mouseover", () => {
    div.innerText = "Hovering over me!";
    //return back after mouse is out
  }
  );
  div.addEventListener("mouseout", () => {
    div.innerText = "Hover over me!";
  });

});
