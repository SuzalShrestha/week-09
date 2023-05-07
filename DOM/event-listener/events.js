// Your code here
window.addEventListener("DOMContentLoaded", () => {
  alert("DOM fully loaded and parsed");
  const redButton = document.getElementById("red-input");
  redButton.addEventListener("input", (e) => {
    if (e.target.value === "red") {
      redButton.style.backgroundColor = "red";
    }
  });
});
