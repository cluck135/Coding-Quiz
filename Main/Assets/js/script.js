let startButton = document.querySelector(".start-button");
let timeLeft = document.querySelector(".time-left");
let timer;
let timerCount = 60;

function startGame(){
    startTimer();
}

function endGame(){

}
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        if(timerCount == 0){
            clearInterval(timer);
            endGame()
        }else if(//have a variable set to all questions being answered then this is executed)
    }, 1000);

}


startButton.addEventListener("click", startGame)