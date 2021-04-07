let compChoice = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let result = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    return result;
}
computerPlay();


function game() {
    let player = 0;
    let computer = 0;

    do {
    const playerSelection = prompt('What is your move?', '');
    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
        let str = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        if (str === 'Rock' && computerSelection === 'Paper' || str === 'Paper' && computerSelection === 'Scissors' || str === 'Scissors' && computerSelection === 'Rock') {
            computer += 1;
            return `You Lose! ${computerSelection} beats ${str}. computer: ${computer} player: ${player}`;
        } else if (str === 'Rock' && computerSelection === 'Scissors' || str === 'Paper' && computerSelection === 'Rock' || str === 'Scissors' && computerSelection === 'Paper') {
            player += 1;
            return `You Win! ${str} beats ${computerSelection}. computer: ${computer} player: ${player}`;
        } else {
            return `Tie Round! computer: ${computer} player: ${player}`;
        }
    }
        console.log(playRound(playerSelection, computerSelection));
} while (computer < 5 && player < 5)

    function winner() {
        if (computer === 5) {
            alert(`Computer wins the game! ${computer} - ${player}`);
        } else if (player === 5) {
            alert(`Player wins the game! ${player} - ${computer}`);
        }
    }
    winner();    

}

game();