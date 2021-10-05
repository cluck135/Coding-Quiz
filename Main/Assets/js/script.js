let startButton = document.querySelector(".start-button");
let timeLeft = document.querySelector(".time-left");
let question = document.querySelector(".top-text");
let answers = document.querySelector(".answer-button")

let timer;
let timerCount;
let answers1 = ["Java","CSS","HTML","Csharp"];

function startGame(){
    timerCount = 60;

    displayQuestion();
    startTimer();
}

function displayQuestion(){
    answers.textContent = answers1;
}

function endGame(){

}
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        if(timerCount == 0){
            clearInterval(timer);
            endGame();
        }//else if(//have a variable set to all questions being answered then this is executed)
    }, 1000);

}


startButton.addEventListener("click", startGame)