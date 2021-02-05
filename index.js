var correctOrder=[],userOrder=[];
var gameStatus=false;

var colors=["green","red","yellow","blue"];
var level=0,count=0;

$(document).keydown(function() {
    if(!gameStatus) {
        gameStatus=true;
        startGame();
    }
});

$(".btn").click(function() {

    var selected=$(this).attr("id");
    playSound(selected);

    if(gameStatus) {

        if(selected === correctOrder[count]) {
            if(count === correctOrder.length -1) {
                count=0;
                startGame();
            } else {
                count++;
            }
        } else {
            playSound("wrong");
            gameOver();
        }
    } else {
        alert("Game not Started. Follow the instructions to Play");
    }
    
});

function startGame() {
    $("#title").text("Level "+ ++level);
    var random=Math.floor(Math.random() * 4);

    var choosen=colors[random]
    correctOrder.push(choosen);

    $("#"+choosen).animate({opacity: 0.25},600,function() {
        $("#"+choosen).animate({opacity: 1},600);
    });

}

function gameOver() {
    level=0;
    count=0;
    correctOrder=[];
    gameStatus=false;

    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    },400);

    $("#title").text("Game Over, Press any key to Restart");
}

function playSound(name) {
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}