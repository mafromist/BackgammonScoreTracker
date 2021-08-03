//Define the elements which needs to be change

const scoreP1Input = document.querySelector("#scoreP1");
const scoreP2Input = document.querySelector("#scoreP2");
const setScoreSelect = document.querySelector("#setScore");
const setScoreForm = document.querySelector("#setScoreForm");
const setScoreDisplay = document.querySelector("#setScoreDisplay");
const scoreAddP1Btn = document.querySelector("#scoreAddP1");
const scoreAddP2Btn = document.querySelector("#scoreAddP2");
const resetScoreBtn = document.querySelector("#resetScore");
const latestGameScoreP1 = document.querySelector("#latestGameScoreP1");
const latestGameScoreP2 = document.querySelector("#latestGameScoreP2");

//define score to 0 for both players initial

let scoreP1 = 0;
let scoreP2 = 0;

let lastGameScoreP1 = 0;
let lastGameScoreP2 = 0;

let isGameOver = false;

//add event listener to select option to define target goal

let targetScore = 3;

const resetScore = () => {
    isGameOver = false;
    scoreP1 = 0;
    scoreP2 = 0;
    scoreP1Input.innerText = 0;
    scoreP2Input.innerText = 0;
  };

setScoreSelect.addEventListener("change", function () {
  targetScore = parseInt(this.value);
  setScoreDisplay.innerText = targetScore;
  resetScore();
});

//add event listener to button to change the scores

scoreAddP1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    scoreP1 += 1;
    if (scoreP1 === targetScore) {
      isGameOver = true;
    }
    scoreP1Input.innerText = scoreP1;
  }
});

scoreAddP2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    scoreP2 += 1;
    if (scoreP2 === targetScore) {
      isGameOver = true;
    }
    scoreP2Input.innerText = scoreP2;
  }
});

//reset Score

resetScoreBtn.addEventListener("click", resetScore);



//if any player hit to the target score;
    //the players add game button will be disabled
    //tracker will append a new list to the ul to keep the history of players winning game


