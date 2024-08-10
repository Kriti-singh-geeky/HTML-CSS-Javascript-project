let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText="Game was draw. play again.";
  msg.style.backgroundColor="#081b31";
};

const showwinner = (userWin,usreChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText=userScore;
     msg.innerText=`you win! your ${usreChoice} beats ${compChoice}`;
     msg.style.backgroundColor="green";
  } else {
    compScore++;
    compScorePara.innerHTML=compScore;
    msg.innerText=`you lost. ${compChoice} beats your ${usreChoice}`;
    msg.style.backgroundColor="red";
  }
};

const playGame = (usreChoice) => {
  //  Generate computer choice
  const compChoice = genCompChoice();

  if (usreChoice === compChoice) {
    //draw Game
    drawGame();
  } else {
    let userWin = true;
    if (usreChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (usreChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showwinner(userWin,usreChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const usreChoice = choice.getAttribute("id");
    playGame(usreChoice);
  });
});
