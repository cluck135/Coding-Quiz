let startButton = document.querySelector(".start-button");
let timeLeft = document.querySelector(".time-left");
let question = document.querySelector(".top-text");
let li = document.querySelectorAll(".answer-options");
let ul = document.querySelector("ul");
let button = document.querySelectorAll(".btn");
let correct = document.querySelector('.wrong-correct');
ul.style.display = "none";

let timer;
let timerCount;
let counter = 3;
let i = 0;
let j = 0
let ans;
let questions = [
    {
        question: "what is your favorite coding language",
        answers: ["Java","CSS","HTML","Csharp"],
        correctAnswer: 3
    },
    {
        question: "What is your favorite color",
        answers: ["Blue","Red","Green","Yellow"],
        correctAnswer: 2
    },
    {
        question: "Which element do you like",
        answers: ["Tree","Rock","Grass","Sea"],
        correctAnswer: 1
    },
    {
        question: "favorite food",
        answers: ["Fries","Chicken","Beef","Salmon"],
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

function displayQuestion(){
    
        if(i<questions.length){
            question.textContent = questions[i].question;
                for(j; j<questions[i].answers.length; j++){
                    button[j].textContent = questions[i].answers[j];
                }
                j = 0;
        }
}

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

function displayGrade(){
    timer1 = setTimeout(function() {
        correct.style.display = "block";
        correct.style.borderTop = "solid 5px grey";
        if(ans == true){
            correct.textContent = "Correct";
        }else{
            correct.textContent = "Wrong";
        }
    }, 500);
}
function dissapear(){
    timer2 = setTimeout(function(){
        correct.style.display = "none";
    }, 3000);
}

function endGame(){
    let score = timerCount;
    //store this score in a local storage then have a new funcition that displays the highscores and pulls data from local storage
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


startButton.addEventListener("click", startGame)