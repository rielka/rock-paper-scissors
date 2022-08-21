


let userChoice = ["Rock", "Paper", "Scissors"];
let resultEl = document.getElementById("result");
let userEl = document.getElementById("player-score");
let computerEl = document.getElementById("computer-score");
let endResultEl = document.getElementById("end-result");
let imgPlayEl = document.getElementById("img-play");
let imgCompEl = document.getElementById("img-comp");
let newPlayEl = document.getElementById("new-game");
let userScore = 0;
let computerScore = 0;
let display;


function playGame() {
    const options = document.querySelectorAll(".options"); 
    options.forEach((option) => {
        option.addEventListener("click", function () {
            const playerSelection = this.value;
            
            const cOptions = ["Rock", "Paper", "Scissors"];
            const computerSelection = cOptions[Math.floor(Math.random() * 3)];
            
            playRound(playerSelection);
            checkWin();
            updateScore(); 
            
            
            endResultEl.style.fontFamily = "fantasy";
            endResultEl.style.color = "red";
            endResultEl.style.fontSize = "25px";
            endResultEl.style.fontWeight = "bold";

            userEl.style.fontStyle = "oblique";
            userEl.style.color = "red";
            userEl.style.fontSize = "25px";
            userEl.style.fontFamily = "fantasy";
            userEl.style.fontWeight = "bold";

            computerEl.style.fontStyle = "oblique";
            computerEl.style.color = "red";
            computerEl.style.fontSize = "25px";
            computerEl.style.fontFamily = "fantasy";
            computerEl.style.fontWeight = "bold"; 
            endResultEl.textContent = checkWin();       
        });  
    }); 
}



function updateScore() {
    document.getElementById("player-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
}
        
function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return userChoice[index];    
}

    function playRound(playerSelection) {
        let computerSelection = getComputerChoice();
        let choice = playerSelection + computerSelection;

        switch (choice) {
          case "RockScissors":
          case "PaperRock":
          case "ScissorsPaper":
            resultEl.innerText = `${playerSelection} beats ${computerSelection}`;
            resultEl.style.fontStyle = "oblique";
            resultEl.style.color = "green";
            resultEl.style.fontSize = "25px";
            resultEl.style.fontFamily = "fantasy";
            resultEl.style.fontWeight = "bold"; 
            userScore++;

            break;
      
          case "RockPaper":
          case "PaperScissors":
          case "ScissorsRock":
            resultEl.innerText = `${computerSelection} beats ${playerSelection}`;
            resultEl.style.fontStyle = "oblique";
            resultEl.style.color = "green";
            resultEl.style.fontSize = "25px";
            resultEl.style.fontFamily = "fantasy";
            resultEl.style.fontWeight = "bold"; 
            computerScore++;
            break;
      
          case "RockRock":
          case "PaperPaper":
          case "ScissorsScissors":
            resultEl.innerText = "It\'s a tie!";
            resultEl.style.fontStyle = "oblique";
            resultEl.style.color = "green";
            resultEl.style.fontSize = "25px";
            resultEl.style.fontFamily = "fantasy";
            resultEl.style.fontWeight = "bold"; 
            break;
        }
        //updateMoves(playerSelection, computerSelection);     
}

function gameOver() { 
    
    refresh();
}

function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 2000);
}


function checkWin() {
        if (userScore === 5) {
            
            //document.getElementById("img-play").style.display = "none";
            //document.getElementById("img-comp").style.display = "none";
            //document.getElementById("result").style.display = "none"; 

            gameOver(); 
            display = "Game over! Congratulations! You win the game!";
        }
       
        else if (computerScore === 5) {  
            //document.getElementById("img-play").style.display = "none";
            //document.getElementById("img-comp").style.display = "none";
            //document.getElementById("result").style.display = "none";  
            gameOver();
            display = "Game over! Computer wins the game! Try again later!";
        }    
        
        
        return display;   
}

/*

function updateMoves(playerSelection, computerSelection) {
    document.getElementById("img-play").src = `images/${playerSelection}.jpg`;
    document.getElementById("img-comp").src = `images/${computerSelection}.jpg`; 
}*/



  



    

