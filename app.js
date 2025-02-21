let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice =() => {
    const options=["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
    //rock,paper,scissors
};
const drawGame=()=>{
    console.log("Draw game");
    msg.innerText="Draw game! paygame Again";
};
const showWinner= (userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText="you win!";
    }else{
        console.log("computer win");
        msg.innerText="computer win";
    }
};
const playGame = (userChoice) =>{
    console.log("user choice=",userChoice);
    //Generate computer choice:
    const compChoice = genCompChoice();
    console.log("comp choise",compChoice);
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
            let userWin = true;
            if(userChoice === "rock"){
                //scisser,paper
                userWin = compChoice ==="paper" ? false : true;
            }else if(userChoice ==="paper"){
                //rock,scissor
                userWin = compChoice ==="scissors" ? false : true;
            }else{
                //rock,paper
                userWin = compChoice ==="rock" ? false : true;
            }
            showWinner(userWin);
            }
            // hi i am 
    
    
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});
