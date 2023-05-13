// Your code here
async function getKitten() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const url = data[0].url;
    const img = document.createElement("img");
    img.src = url;
    const gallery = document.querySelector(".gallery>ul");
    gallery.appendChild(img);
  } catch (e) {
    console.log("Couldn't fetch kitten :(");
  }
}
window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const h1 = document.createElement("h1");
  h1.innerText = "Kitten Pics";
  body.appendChild(h1);
  const gallery = document.createElement("div");
  gallery.classList.add("gallery");
  const ul = document.createElement("ul");
  gallery.appendChild(ul);
  body.appendChild(gallery);
  getKitten();
});
