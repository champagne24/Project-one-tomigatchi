
let player= {
    name:'',
    hunger:20,
    exhaustion: 20,
    happiness: 20,
    age : 0,
}
// time
let time= 0;


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
    $('.playername').text(player.name);
    begin();
}

function hide(){
    document.getElementByID('start').style.display='none';
}


// action buttons
$('#feed').click(function() { $(player.hunger).click()
});

$('#play').click(function() { $(player.exhaustion).click()
});

$('#nap').click(function() { $(player.happiness).click()
});




function playAgain(event){
    event.preventDefault();
   

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