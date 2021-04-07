function computerPlay() {
    let compChoice = ["Rock", "Paper", "Scissors"];
    let result = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    return result;
}
computerPlay();

function game() {
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('What is your move?', '');
    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
        let str = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        if (str === 'Rock' && computerSelection === 'Paper') {
            computer += 1;
            return "You Lose! Paper beats Rock." + " computer: " + computer + " player: " + player;
        } else if (str === 'Rock' && computerSelection === 'Scissors') {
            player += 1;
            return "You Win! Rock beats Scissors." + " computer: " + computer + " player: " + player;
        } else if (str === 'Paper' && computerSelection === 'Scissors') {
            computer += 1;
            return "You Lose! Scissors beats Paper." + " computer: " + computer + " player: " + player;
        } else if (str === 'Paper' && computerSelection === 'Rock') {
            player += 1;
            return "You Win! Paper beats Rock." + " computer: " + computer + " player: " + player;
        } else if (str === 'Scissors' && computerSelection === 'Rock') {
            computer += 1;
            return "You Lose! Rock beats Scissors." + " computer: " + computer + " player: " + player;
        } else if (str === 'Scissors' && computerSelection === 'Paper') {
            player += 1;
            return "You Win! Scissors beats Paper." + " computer: " + computer + " player: " + player;
        } else {
            return "Tie Round! Play again." + " computer: " + computer + " player: " + player;
        }
    }
        console.log(playRound(playerSelection, computerSelection));
}
    if (player < computer) {
        alert("Computer wins the game! " + computer + "-" + player);
    } else if (player > computer) {
        alert("Player wins the game! " + player + "-" + computer);
    } else {
        alert("Tie game! " + player + "-" + computer);
    }
}

game();