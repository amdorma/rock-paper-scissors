let buttons = document.querySelectorAll('button');
let gameOver = false;
let playerScore = 0
let computerScore = 0;
let gameWinner = '';

function computerPlay(){
    let compSelect = [
    'rock',
    'paper',
    'scissors'];
    let randomNumber = Math.floor(Math.random()*compSelect.length);
    return compSelect[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let playerWin = `You won the round! ${playerSelection} beats ${computerSelection}`;
    let computerWin = `You lost the round! ${computerSelection} beats ${playerSelection}`;
    let tie = `It\'s a tie! ${playerSelection} is the same as ${computerSelection}`;
    if(playerSelection === computerSelection) {
        return tie;
    } else if( (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ){
        return playerWin;
    }
     else {
        return computerWin;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        if (gameOver === true) return;
        playRound(playerSelection, computerSelection)
    });
});


/* console.log(playRound())

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0
    for( round = 0; round < 5; round++ ){
        let round = playRound();
        if(round.indexOf('won') > -1) {
            playerScore++
        } else if (round.indexOf('lost') > -1){
            computerScore++
        } else {
            tie++
        }
        console.log(`Player:${playerScore} vs Computer:${computerScore} Ties = ${tie}`);
    }
    let playerWinGame = `Player has won the game with ${playerScore} points!`;
    let computerWinGame = `Computer has won the game with ${computerScore} points! Sucks to suck.`
    if(playerScore > computerScore) {
        return playerWinGame;
    } else {
        return computerWinGame;
    }
}
*/