
let player={
    name:"",
    hunger:"20",
    exhaustion:"20",
    happiness:"20",
}
// dom elements

let feed= document.querySelector("#feed");
let play= document.querySelector("#play");
let nap= document.querySelector("nap");


let hungerStat= document.querySelector('#hunger');
let exhaustionStat= document.querySelector("#exhaustion");
let happinessStat= document.querySelector('#happiness');


let gameStart = document.querySelector(".start-button");
let userName= document.querySelector(".username");
let restartButton=document.querySelector('#restart');


gameStart.addEventListener("click", start)

