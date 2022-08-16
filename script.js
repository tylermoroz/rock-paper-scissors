const score = document.querySelector('#score');
const finalResult = document.createElement('p');
let player = 0;
let computer = 0;
const playerSelection = document.querySelectorAll('.btn');
const roundResult = document.createElement('p');
const newGameBtn = document.querySelector('#new-game');
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
roundResult.style.color = 'white';
roundResult.style.fontSize = '44px';
roundResult.style.textShadow = '0px 0px 10px white';
finalResult.style.color = 'white';
finalResult.style.fontSize = '44px';
finalResult.style.textShadow = '0px 0px 10px white';

function on() {
    this.style.boxShadow = "0px 0px 10px 8px aquamarine";
    this.firstElementChild.classList.remove("base-color");
    this.firstElementChild.classList.add("highlight-color");
}

function resetBtnOn() {
    this.style.boxShadow = "0px 0px 10px 8px aquamarine";
    this.firstElementChild.classList.remove("base-glow");
    this.firstElementChild.classList.add("highlight-glow");
}

function resetBtnOff() {
    this.style.boxShadow = "0px 0px 8px 5px white";
    this.firstElementChild.classList.remove("highlight-glow");
    this.firstElementChild.classList.add("base-glow");
}

function off() {
    this.style.boxShadow = "0px 0px 8px 5px white";
    this.firstElementChild.classList.remove("highlight-color");
    this.firstElementChild.classList.add("base-color");
}

newGameBtn.addEventListener('mouseover', resetBtnOn);
newGameBtn.addEventListener('mouseout', resetBtnOff);
rock.addEventListener('mouseover', on);
rock.addEventListener('mouseout', off);
paper.addEventListener('mouseover', on);
paper.addEventListener('mouseout', off);
scissors.addEventListener('mouseover', on);
scissors.addEventListener('mouseout', off);

function game() {

        function computerPlay() {
            let compChoice = ["Rock", "Paper", "Scissors"];
            let result = (compChoice[Math.floor(Math.random() * compChoice.length)]);
            return result;
        }
        
        function winner() {
            if (computer === 5) {
                finalResult.textContent = `Computer wins the game:   ${computer} - ${player}    Press 'New Game' to play again`;
                score.removeChild(roundResult);
                player = 0;
                computer = 0;
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
                rock.style.boxShadow = "0px 0px 8px 5px white";
                rock.firstElementChild.classList.remove("highlight-color");
                rock.firstElementChild.classList.add("base-color");
                paper.style.boxShadow = "0px 0px 8px 5px white";
                paper.firstElementChild.classList.remove("highlight-color");
                paper.firstElementChild.classList.add("base-color");
                scissors.style.boxShadow = "0px 0px 8px 5px white";
                scissors.firstElementChild.classList.remove("highlight-color");
                scissors.firstElementChild.classList.add("base-color");
            } else if (player === 5) {
                finalResult.textContent = `Player wins the game:   ${player} - ${computer}    Press 'New Game' to play again`;
                score.removeChild(roundResult);
                player = 0;
                computer = 0;
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
                rock.style.boxShadow = "0px 0px 8px 5px white";
                rock.firstElementChild.classList.remove("highlight-color");
                rock.firstElementChild.classList.add("base-color");
                paper.style.boxShadow = "0px 0px 8px 5px white";
                paper.firstElementChild.classList.remove("highlight-color");
                paper.firstElementChild.classList.add("base-color");
                scissors.style.boxShadow = "0px 0px 8px 5px white";
                scissors.firstElementChild.classList.remove("highlight-color");
                scissors.firstElementChild.classList.add("base-color");
            } else if (computer < 5 || player < 5) {
                score.removeChild(finalResult);
            }
            score.appendChild(finalResult);
        }
        
        function restartGame() {
            newGameBtn.addEventListener('click', () => {
                if (computer < 5 && player < 5) {
                    score.removeChild(roundResult);
                    computer = 0;
                    player = 0;
                }
            }); 
        }
        
        function newGame() {
            newGameBtn.addEventListener('click', () => {
                if (winner) {
                    score.removeChild(finalResult);
                    computer = 0;
                    player = 0;
                    rock.disabled = false;
                    paper.disabled = false;
                    scissors.disabled = false;
                }
            }); 
        }


        function playRound(playerSelection, computerSelection) {
            
            if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock') {
                computer += 1;
                roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}. computer: ${computer} player: ${player}`;
            } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
                player += 1;
                roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}. computer: ${computer} player: ${player}`;
            } else if (playerSelection === computerSelection) {
                roundResult.textContent = `Tie Round! computer: ${computer} player: ${player}`;
            } 
            
            score.appendChild(roundResult);
            winner();
            
        }

        playerSelection.forEach((btn) => {
            btn.addEventListener('click', () => {
                playRound(btn.id, computerPlay());
            });
        });   

        restartGame();
        newGame();
        
}

game();