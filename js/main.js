let buttons = document.querySelectorAll('button');
let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');
let winner = document.querySelector('#status');
let buttonSection = document.querySelector('.buttons')
let results = document.querySelector('.results');
let playAgain = document.createElement('button');
playAgain.setAttribute('id', 'play-again')

playAgain.textContent = 'Play again?';

playAgain.addEventListener('click', () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    winner.textContent = 'First to five wins! Select your weapon!';
    results.removeChild(playAgain);
    buttons.forEach((button) => button.style.display = 'initial');
})

function computerPlay(){
    let compSelect = [
    'rock',
    'paper',
    'scissors'];
    let randomNumber = Math.floor(Math.random()*compSelect.length);
    return compSelect[randomNumber];
}

function addPoint(score) {
    let scoreCard = Number(score.textContent);
    score.textContent = ++scoreCard;
}

function handleResult() {
    const playerScoreFinal = Number(playerScore.textContent);
    const computerScoreFinal = Number(computerScore.textContent);
    if (playerScoreFinal == 5 || computerScoreFinal == 5) {
        if (playerScoreFinal > computerScoreFinal) {
            winner.textContent = "You Won!"
        } else {
            winner.textContent = "You lost!"
        }
        results.appendChild(playAgain);
        buttons.forEach((button) => button.style.display = 'none');
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return console.log('It\'s a tie!');
    } else if( (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ){
        addPoint(playerScore);
    }
     else {
        addPoint(computerScore);
    }
    handleResult();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});