import { createMainContent } from './main.js';
import { createScoreContainer } from './score.js';
import { createCommentSection,createComment } from './comments.js';

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
const restoreUrl=()=>{
    const url=sessionStorage.getItem("url");
    if(url){
        const img=document.querySelector("img");
        img.src=url;
    }
}
const restoreScore=()=>{
    const score=sessionStorage.getItem("score");
    if(score){
        const scoreDisplay=document.querySelector(".score");
        scoreDisplay.innerText=score;
    }
}
const restoreComments=()=>{
    const comments=JSON.parse(sessionStorage.getItem("comments"));
    if(comments){
        for(let comment of comments){
            createComment(comment);
            console.log(comment);
        }
    }
}
const restore=()=>{
    restoreUrl();
    restoreScore();
    restoreComments();
}
window.onload = () => {
    initializePage();
    createMainContent();
    createScoreContainer();
    createCommentSection();
    restore();
};