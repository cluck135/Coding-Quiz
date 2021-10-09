let scoreList = document.querySelector(".highscoreList");
let scoreClear = document.querySelector(".clear");
    //pulls highscore data from the local storage
let list = JSON.parse(localStorage.getItem("highscores"));


//runs through each object in the list and displays previous scores
if(list !== null){
  for(let i = 0; i<list.length; i++){

    let li = document.createElement("li");
    li.textContent = list[i].name + ": " + list[i].score;

    scoreList.appendChild(li);
  }
}
//sets local storage of scores to be empty
function clearScore(){
   
    localStorage.removeItem("highscores");
}
//clears the highscore list
scoreClear.addEventListener("click", clearScore)
