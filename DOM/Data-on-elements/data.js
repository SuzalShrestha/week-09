// Your code here
window.addEventListener("DOMContentLoaded",()=>{
    const button=document.getElementById("add");
    console.log(button);
    button.addEventListener("click",()=>{
        const list=document.getElementById("shopping-list");
        const li=document.createElement("li");
        const type=document.getElementById("type").value;
        li.textContent=document.getElementById("name").value;
        li.setAttribute("data-type",type);
        list.appendChild(li);
    });
});
