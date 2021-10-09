let scoreList = document.querySelector(".highscoreList");
let scoreClear = document.querySelector(".clear");
    //pulls highscore data from the local storage
let list = JSON.parse(localStorage.getItem("highscores"));
let clear = [];

//runs through each object in the list and displays previous scores
for(let i = 0; i<list.length; i++){

  let li = document.createElement("li");
  li.textContent = list[i].name + ": " + list[i].score;

  scoreList.appendChild(li);
}
//sets local storage of scores to be empty
function clearScore(){
   
    localStorage.setItem("highscores", clear);
}
//clears the highscore list
scoreClear.addEventListener("click", clearScore)
