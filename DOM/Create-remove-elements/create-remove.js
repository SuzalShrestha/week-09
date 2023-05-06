/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split("/")[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDogCard=document.createElement("li");
        const figure=document.createElement("figure");
        const img=document.createElement("img");
        img.src=url;
        const figCaption=document.createElement("figcaption");
        figCaption.innerText=breed;
        figure.appendChild(img);
        figure.appendChild(figCaption);
        newDogCard.appendChild(figure);

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const gallery=document.querySelector(".gallery>ul");
        gallery.appendChild(newDogCard);


    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog=document.querySelector(".gallery>ul>li:first-child");

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const lastDog=document.querySelector(".gallery>ul>li:last-child");

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastDog.remove();
});