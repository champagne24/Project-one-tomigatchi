let time= 0;
let myPet;
let interval= 1;

const feedingPoint= .1;
const agingTime= 300;
const scoreGain= 1;
const pet= $('#pet');

//buttons

const feedButton= document.getElementById('feed');
const playButton= document.getElementById;('play');
const napButton= document.getElementById; ('nap');
const startBut = document.getElementById;('start');


//status
const hungerStat= document.querySelector('.hunger');
const exhaustionStat= document.querySelector('.exhaustion');
const happinessStat= document.querySelector('.happiness');
const ageStat= document.querySelector('.age');
const baby = document.getElementById('baby');
const adult= document.getElementById('adult');
const tama= document.querySelector('.tamagatchi')
class Tamagotchi{
constructor(name, exhaustion = 0, hunger=10, happiness= 10, age= 1){
    this.name= name;
    this.exhaustion= exhaustion;
    this.hunger= hunger;
    this.happiness= happiness;
    this.age= age;
    } 
    appear() {
        resettingGame()
        Character(tama,'show')
        
    }
    isAlive(){
        let points = Math.round(Math.max(this.exhaustion, this.hunger, this.happiness));
        if (points >=20 || this.state ==='dead'){
            this.state= 'dead'
            clearInterval(timer);
            endOfGame()
        }
    }
 }
const playerAction = function playerAction(){
    if (myPet){
        return;
    }
    if (aciton==='feeding'){
        myPet.eat();
    }else if (action==='playing'){
        myPet.play();
    }else if (action==='nap'){
        myPet.nap()
    }
    updateStats();
}
const updateStats= function updateStats() {
    ageStat.textContent= myPet.age;
    hungerStat.textContent= Math.max(Math.round(myPet.hunger),1);
    exhaustionStat.textContent= Math.max(Math.round(myPet.exhaustion),1);
    happinessStat.textContent= Math.max(Math.round(myPet.happiness,1));
}
const evlove= function evlove(time){
    let evolution = [evolution, evolution *2];
    let stages = [baby, adult];
    let height = ['50%', '100%'];
    let index=evolution.indexOf(time);
    if (index !==-1 &&myPet.state !=='dead'){
        console.log('Evloves')
    }

}
const changingHeader= function chaningHeader(){
    inputName.disabled= true;
    startBut.disabled= true;
    insertAdjacentHTML('afterbegin','<h4 id= "name-dispay">${myPet.name.toUpperCase()}<h4>')
    stats.classList.remove('hide')
}
const gameStart= function gameStart(){
    let name= inputName.value;
    mypet= new Pet(name);
    changingHeader();
    myPet.appear();
    time = 0
    time = setInterval(() =>{
    time++;
    console.log('time:', time);
    updateStats()
    myPet.isAlive();   
    },1000 * interval)
}



const buttons= function buttons(e) {
    if (time !==0) {
        if (e.key ==='f'){
            playerAction('feeding')
        }else if (e.key==='p') {
            playerAction('playing')
         } else if(e.key==='n'){
             playerAction('napping')
         }
        
    } else if(e.key=== 'Enter' && startButton.disabled===false){
        gameStart()
    }
}


