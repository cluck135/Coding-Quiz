let scoreList = document.querySelector(".highscoreList");
let scoreClear = document.querySelector(".clear");
    
let list = JSON.parse(localStorage.getItem("highscores"));
let clear = [];

for(let i = 0; i<list.length; i++){

  let li = document.createElement("li");
  li.textContent = list[i].name + ": " + list[i].score;

  scoreList.appendChild(li);
}
function clearScore(){
    //clear.splice(index, 1);
    localStorage.setItem("highscores", clear);
    //ul.remove;
}

scoreClear.addEventListener("click", clearScore)
