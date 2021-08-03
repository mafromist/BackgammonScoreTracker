//Define the elements which needs to be change

const scoreP1Input = document.querySelector('#scoreP1');
const scoreP2Input = document.querySelector('#scoreP2');
const setScoreSelect = document.querySelector('#setScore');
const setScoreForm = document.querySelector('#setScoreForm');
const setScoreDisplay = document.querySelector('#setScoreDisplay');
const scoreAddP1Btn = document.querySelector('#scoreAddP1');
const scoreAddP2Btn = document.querySelector('#scoreAddP2');
const resetScoreBtn = document.querySelector('#resetScore');
const latestGameScoreP1 = document.querySelector('#latestGameScoreP1');
const latestGameScoreP2 = document.querySelector('#latestGameScoreP2');


//define score to 0 for both players initial

let scoreP1 = 0;
let scoreP2 = 0;

scoreP1Input.innerText = scoreP1;
scoreP2Input.innerText = scoreP2;


//add event listener to select option to define target goal

let targetScore = 0;

const setTargetScore = () => {
    setScoreSelect.addEventListener('change', function() {
        targetScore = parseInt(setScoreSelect.value);
        setScoreDisplay.innerText = targetScore;
    });
}


//add event listener to button to change the scores


const addScoreP1 = () => {
    scoreAddP1Btn.addEventListener('click', function() {
        scoreP1 += 1;
        scoreP1Input.innerText = scoreP1;
    });
}

const addScoreP2 = () => {

    scoreAddP2Btn.addEventListener('click', function() {
        scoreP2 += 1;
        scoreP2Input.innerText = scoreP2;
    });
}

//if any player hit to the target score;
    //the players add game button will be disabled
    //tracker will append a new list to the ul to keep the history of players winning game

