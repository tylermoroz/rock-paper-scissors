function computerPlay() {
    let compChoice = ["Rock", "Paper", "Scissors"];
    let result = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    return result;
}
computerPlay();


function game() {
    let player = 0;
    let computer = 0;

    do {
    const playerSelection = prompt('Rock, Paper or Scissors?', '');
    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
        let str = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        if (str === 'Rock' && computerSelection === 'Paper' || str === 'Paper' && computerSelection === 'Scissors' || str === 'Scissors' && computerSelection === 'Rock') {
            computer += 1;
            return `You Lose! ${computerSelection} beats ${str}. computer: ${computer} player: ${player}`;
        } else if (str === 'Rock' && computerSelection === 'Scissors' || str === 'Paper' && computerSelection === 'Rock' || str === 'Scissors' && computerSelection === 'Paper') {
            player += 1;
            return `You Win! ${str} beats ${computerSelection}. computer: ${computer} player: ${player}`;
        } else if (str === computerSelection) {
            return `Tie Round! computer: ${computer} player: ${player}`;
        } else if (str === 'Nuke'){
            player -= player;
            computer -= computer;
            alert(`Wait... That's illegal! Restarting Game...`)
        } else if (str !== 'Rock' || str !== 'Paper' || str !== 'Scissors' || str !== 'Nuke') {
            alert(`Please enter a valid answer.`);
        }
    }
        console.log(playRound(playerSelection, computerSelection));
} while (computer < 5 && player < 5)

    function winner() {
        if (computer === 5) {
            alert(`Computer wins the game:   ${computer} - ${player}
Refresh the page to play again!`);
        } else if (player === 5) {
            alert(`Player wins the game:   ${player} - ${computer}
Refresh the page to play again!`);
        }
    }
    winner();    

}

game();