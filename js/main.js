    function computerPlay(){
        let compSelect = [
        'rock',
        'paper',
        'scissors'];
        let randomNumber = Math.floor(Math.random()*compSelect.length);
        return compSelect[randomNumber];
    }

    function playerPlay(){
        return playerSelect = prompt('Please choose from rock, paper, or scissors','').toLowerCase();
    }

    function playRound(playerChoice, compChoice) {

        compChoice = computerPlay();
        playerChoice = playerPlay();
        let playerWin = `You won the round! ${playerChoice} beats ${compChoice}`;
        let computerWin = `You lost the round! ${compChoice} beats ${playerChoice}`;
        let tie = `It\'s a tie! ${playerChoice} is the same as ${compChoice}`;
        if(playerChoice === compChoice) {
            return tie;
        } else if( (playerChoice === 'rock' && compChoice === 'paper') ||
        (playerChoice === 'paper' && compChoice === 'scissors') ||
        (playerChoice === 'scissors' && compChoice === 'rock') ){
            return computerWin;
        }
         else {
            return playerWin;
        }
    }

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
