let startButton = document.querySelector(".start-button");
let timeLeft = document.querySelector(".time-left");
let question = document.querySelector(".top-text");
let sub = document.querySelector("sub")
let li = document.querySelectorAll(".answer-options");
let ul = document.querySelector("ul");
let button = document.querySelectorAll(".btn");
let correct = document.querySelector(".wrong-correct");
let initials = document.querySelector("#initials");
let label = document.querySelector("label");
let entry = document.querySelector(".entry");

ul.style.display = "none";
initials.style.display = "none";
label.style.display = "none";
entry.style.display = "none";

let timer;
let timerCount;
let counter = 3;
let i = 0;
let j = 0;

let ans;
//checks if local storage is empty for highscores or not 
let highscores = [];
let check = [];
check = JSON.parse(localStorage.getItem("highscores"));
if(check !== null){
    highscores = JSON.parse(localStorage.getItem("highscores"));
}

// quiz questions and answers object array
let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<html>","<js>","<head>","<script>"],
        correctAnswer: 3
    },
    {
        question: "What is the prefix for an ID?",
        answers: ["<","@","#","."],
        correctAnswer: 2
    },
    {
        question: "Which of the following is an element?",
        answers: ["function()","<header>",".body","$('section')"],
        correctAnswer: 1
    },
    {
        question: "what is the prefix for a class?",
        answers: ["%","#",".","<"],
        correctAnswer: 2
    }
]

function startGame(){
    timerCount = 60;
    startButton.style.display = "none";
    ul.style.display = "block"; 
    
    displayQuestion();
    startTimer();
}
//displays questions and answers for each question
function displayQuestion(){
    
        if(i<questions.length){
            question.textContent = questions[i].question;
                for(j; j<questions[i].answers.length; j++){
                    button[j].textContent = questions[i].answers[j];
                }
            j = 0;
        }
}

//timer in the top right of website
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        if(timerCount == 0 || i == questions.length){
            clearInterval(timer);
            endGame();
        }

    }, 1000);
}

// displays whether or not you answered the question correctly or not
function displayGrade(){
    timer1 = setTimeout(function() {
        correct.style.display = "block";
        correct.style.width = "20%";
        correct.style.borderTop = "solid 5px skyblue";
        correct.style.textAlign = "center";
        correct.style.fontSize = "20px";
        correct.style.color = "black";
        if(ans == true){
            correct.textContent = "Correct";
        }else{
            correct.textContent = "Wrong";
        }
    }, 1);
}
//removes the correct or wrong displayed after a certain time period
function dissapear(){
    timer2 = setTimeout(function(){
        correct.style.display = "none";
    }, 900);
}

// end game display
function endGame(){
    let score = timerCount;
    question.textContent = "All Done!";
    sub.textContent = "Your Final score is: " + score;
    ul.style.display = "none";
    initials.style.display = "block";
    label.style.display = "block";
    entry.style.display = "block";
    //store this score in a local storage then have a new funcition that displays the highscores and pulls data from local storage
}

// stores your score(based on time left) and initials. then sends you to the highscore page
function storeScore(){

    let obj = {
        "name": initials.value,
        "score": timerCount
    }
    highscores.push(obj);
    localStorage.setItem("highscores", JSON.stringify(highscores));


    entry.style.display = "none";
    label.style.display = "none";
    initials.style.display = "none";
}

button.forEach(item => {
    item.addEventListener("click", function(e){
        console.log(e.target);
        let check = questions[i].answers.indexOf(e.target.textContent);
    
        if(check != questions[i].correctAnswer){
            ans = false;
            timerCount = timerCount-10;
            i++;
            displayGrade();
            dissapear();
            displayQuestion();
            
        }else{
            ans = true;
            i++;
            displayGrade();
            dissapear();
            displayQuestion();

        }
    });
});
//starts the game
startButton.addEventListener("click", startGame);
//submits your score and initials
entry.addEventListener("click", storeScore);