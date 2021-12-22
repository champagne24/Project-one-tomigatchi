
let player= {
    name:"",
    hunger:10,
    exhaustion: 0,
    happiness: 10,
    age : 0,
}

//buttons

const feed= $("#feed");
const play= $("#play");
const nap= $("nap");
const startButton = $(".start-button");


//status
const hungerStat= $('#hunger');
const exhaustionStat= $('#exhaustion');
const happinessStat= $('#happiness');


function gameStart(e) {
    e.preventDefault();
    hide();
    player.name = $('.username').val();
    $('.petname').text(player.name);
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


function begin(){
    $('start-button').style('background-image', 'url(intersection.png')
    hungerMax(hungerStat, 20);
    exhaustionMax(exhaustionStat,20);
    happinessMax(happinessStat, 20);
}

function playAgain(event){
    event.preventDefault();
   

    
}
function win(){
    document.getElementByID('start').style.display='flex';
    playAgain();
}

function lose(){
    document.getElementByID('start').style.display='flex';
    playAgain()
}


startButton.on('submit', gameStart)