let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".Choice");
let msg = document.querySelector(".text-btn");
let Myscore = document.querySelector("#Myscore");
let computScore = document.querySelector("#computerScore");
const drawGame = () => {
    console.log("Game Was draw. play Again");
    msg.innerText = "Game Was draw. play Again"
    msg.style.backgroundColor = "#303841"
} 

const genComputerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];


}
const showWinner = (userWin,userChoice,computChoice) => {
    if (userWin) {
      userScore++;
      Myscore.innerText = userScore
        console.log("you Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${computChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        computerScore++;
        computScore.innerText = computerScore;
        console.log("you lose");
        msg.innerText = `You Lose! ${computChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    console.log(userChoice);
    let computChoice = genComputerChoice();
    console.log(computChoice);
    if (computChoice === userChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Paper") {
            // Rock , scissor
            userWin = computChoice === "Scissor" ? false : true;
        }
        else if (userChoice === "Scissor") {
            // paper, rock
            userWin = computChoice === "Rock" ? false : true;
        }
        else {
            // scissor , paper
            userWin = computChoice === "Paper" ? false : true;
        }
        showWinner(userWin,userChoice,computChoice)
    }


}
choices.forEach(choice => {

    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})