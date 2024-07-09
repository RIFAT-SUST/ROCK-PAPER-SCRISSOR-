let UserScore = 0;
let CompScore = 0;

let choices = document.querySelectorAll(".choice");
// let imgcombo  = document.querySelector ("#img");
let msg = document.querySelector("#msg");
let UserScorePara = document.querySelector ("#user-score");
let CompScorePara = document.querySelector ("#comp-score");
let winningpoint = document.querySelector (".rules");
let heading = document.querySelector (".sironam");
let scoreBoard = document.querySelector (".score-board");
let NewGame = document.querySelector (".button");

const resetGame = () =>{
    CompScore = 0;
    UserScore = 0;
    EnableBoxes();
    
    // NewGame.classList.add("hide");
}
const matchDraw = () =>{
    msg.innerText = "Game is Draw.Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,comChoice) => {
    if ( userWin){
        UserScore++;
        UserScorePara.innerText = UserScore;
        if(UserScore === 6 ){
            msg.innerText = `You are the ultimate fucking winner!`;
            msg.style.backgroundColor = "green";
            DisableBoxes();
        }
        else{msg.innerText = `You Win! Your choice
         "${userChoice}" beats computers choice "${comChoice}".`;
        msg.style.backgroundColor = "green";
    }
   }
    else {
        CompScore++;
        CompScorePara.innerText = CompScore;
        if (CompScore === 6 ) {
           msg.innerText = `You are the fucking loser! Try again Mo**fuck**`;
           msg.style.backgroundColor = "red"
           DisableBoxes();
        }
        else {
        msg.innerText = `You lose! Computers choice
         "${comChoice}" beats your choice "${userChoice}"`;
        msg.style.backgroundColor = "red";
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});

const genComputerChoice = () =>{
    let option = ["rock","paper","scissors"];
   let randIdx = Math.floor(Math.random() * 3);
   return option[randIdx];
}
 const playGame = (userChoice) =>{
   console.log("User choice:",userChoice);
   let comChoice = genComputerChoice();
   console.log("Computer choice:",comChoice);
   if(userChoice === comChoice){
    //Match is draw
    matchDraw();
   }
   else {
    let  userWin = true ;
    if (userChoice === "rock"){
//obviesly compter choice should be = paper or scissor for result of not match draw.
     userWin = comChoice === "paper" ? false: true ; 
    }
    else if (userChoice === "paper"){
        // rock or scissors
        userWin = comChoice === "scissors" ? false : true;
    }
    else{
        // rock or paper 
        userWin = comChoice === "rock" ? false : true ;
    }
    showWinner(userWin,userChoice,comChoice);
}
 }

const EnableBoxes = () => {
    for(let choice of choices){
        choice.classList.toggle("hide");
    }
    winningpoint.classList.toggle("hide");
    scoreBoard.classList.toggle("hide");
    heading.classList.toggle("hide");
    NewGame.classList.toggle("hide");
    UserScorePara.innerText = "0";
    CompScorePara.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31"

        // winningpoint.style.display = "block";
        // for ( let choice of choices){
        //     choice.style.display = "block";
        // }
        // scoreBoard.style.display = "block";
        // heading.style.display = "block";
        // NewGame.style.display = "none";
}

const DisableBoxes = () => {
    // winningpoint.style.display ="none";
    // for ( let choice of choices){
    //     choice.style.display = "none";
    // }
    // scoreBoard.style.display = "none";
    // heading.style.display = "none";
    // NewGame.style.display = "block";
    for(let choice of choices){
        choice.classList.toggle("hide");
    }
    winningpoint.classList.toggle("hide");
    scoreBoard.classList.toggle("hide");
    heading.classList.toggle("hide");
    NewGame.classList.toggle("hide");
}
NewGame.addEventListener("click",resetGame);
