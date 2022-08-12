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


function game() {

        function computerPlay() {
            let compChoice = ["Rock", "Paper", "Scissors"];
            let result = (compChoice[Math.floor(Math.random() * compChoice.length)]);
            return result;
        }
        
        // function winner() {
        //     if (computer === 5) {
        //         finalResult.textContent = `Computer wins the game:   ${computer} - ${player}    Press 'New Game' to play again`;
        //         score.removeChild(roundResult);
        //         player = 0;
        //         computer = 0;
        //         rock.disabled = true;
        //         paper.disabled = true;
        //         scissors.disabled = true;
        //     } else if (player === 5) {
        //         finalResult.textContent = `Player wins the game:   ${player} - ${computer}    Press 'New Game' to play again`;
        //         score.removeChild(roundResult);
        //         player = 0;
        //         computer = 0;
        //         rock.disabled = true;
        //         paper.disabled = true;
        //         scissors.disabled = true;
        //     } else if (computer < 5 || player < 5) {
        //         score.removeChild(finalResult);
        //     }
        //     score.appendChild(finalResult);
        // }
        
        function restartGame() {
            newGameBtn.addEventListener('click', () => {
                if (computer < 5 && player < 5 || computer >= 5 || player >= 5) {
                    score.removeChild(roundResult);
                    computer = 0;
                    player = 0;
                }
            }); 
        }
        
        // function newGame() {
        //     newGameBtn.addEventListener('click', () => {
        //         if (winner) {
        //             score.removeChild(finalResult);
        //             computer = 0;
        //             player = 0;
        //             rock.disabled = false;
        //             paper.disabled = false;
        //             scissors.disabled = false;
        //         }
        //     }); 
        // }


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