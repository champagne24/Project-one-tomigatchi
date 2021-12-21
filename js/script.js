
let player= function (){
    this.name= ""
    this.hunger= 20
    this.exhaustion= 20
    this.happiness= 20
    this.age = 0
    
}
// time
let time=0


//buttons

const feed= $("#feed");
const play= $("#play");
const nap= $("nap");
const startButton = $(".start-button");


//status
const hungerStat= $('#hunger');
const exhaustionStat= $("#exhaustion");
const happinessStat= $('#happiness');



function gameStart(event) {
    event.preventDefault();
    hide();
    player.name = $('.username').val();
    $('.username').text(player.name);
    play();
}

//hide 
function hide(){
    document.getElementByClass('startButton').style.display='none';
}




function playAgain(event){
    event.preventDefault();
    if(this.id=='hunger')
    user.hunger= 5
}
function win(){
    $('.start-button').style.display='flex';
    playAgain();
}

function lose(){
    $('.start-button').style.display='flex';
    playAgain()
}


startButton.on('submit',gameStart)