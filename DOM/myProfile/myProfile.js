//creating h1
function addHeader(){
let header = document.createElement("h1");
header.innerText = "Sujal Shrestha";
document.body.append(header);
};

//creating ul
function addUl(array){
    let ul = document.createElement("ul");
    for(let item of array){
        let li = document.createElement("li");
        li.innerText = item;
        ul.append(li);
    }
    document.body.append(ul);
};

//creating classes
function addClasses(){
    const header = document.querySelector("h1");
    header.classList.add("name");
    const ul = document.querySelector("ul");
    ul.classList.add("my-details");
    const li = document.querySelectorAll("li");
    li.forEach((item) => {
        item.classList.add("details");
    });    
}

//creating clock
function addClock(){
    const clock = document.createElement("span");
    const item = document.querySelector("li:last-child");
    item.append(clock);
    setInterval(() => {
        clock.innerText = new Date().toLocaleTimeString();
    }, 1000);
}

//calling functions
addHeader();
addUl(["I am learning Frontend Development App Academy","I am 19 years old from Nepal","I am currently studing Electronic Engineering","I am currently learning DOM manipulation","I live in Pokhara, Nepal and its currently "]);
addClasses();
addClock();