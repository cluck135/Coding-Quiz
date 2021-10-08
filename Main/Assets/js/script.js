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
let highscores = [];
let js = localStorage.getItem("highscores")
if(js !== ""){
    highscores = JSON.parse(localStorage.getItem("highscores"));
}


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
    }, 1);
}
function dissapear(){
    timer2 = setTimeout(function(){
        correct.style.display = "none";
    }, 900);
}

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

startButton.addEventListener("click", startGame);
entry.addEventListener("click", storeScore);