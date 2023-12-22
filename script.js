const gameChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * gameChoices.length);
    let computerChoice = gameChoices[choiceNumber];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt('Choose Rock, Paper or Scissors? ');
        if (typeof playerChoice === 'string') playerChoice = playerChoice.toLowerCase();
    
    } while ((!gameChoices.includes(playerChoice) && playerChoice) || playerChoice == '')
    
    return playerChoice;
}

function playGame() {
    let round = 0;
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;
    let winner = '';
    for (round; round < 5; round++) {
        playerChoice = getPlayerChoice();
        if (playerChoice == null) break;
        computerChoice = getComputerChoice();

        function playRound(playerChoice, computerChoice) {
            if (playerChoice == computerChoice) {
                return 'It\'s a tie';
            } else if (playerChoice == 'rock' && computerChoice == 'scissors' ||
                    playerChoice == 'paper' && computerChoice == 'rock' ||
                    playerChoice == 'scissors' && computerChoice == 'paper') {
                playerScore++;
                return `You win! ${playerChoice} beats ${computerChoice}`;
            } else {
                computerScore++;
                return `You lose! ${computerChoice} beats ${playerChoice}`;
            }
        }
        console.log(playRound(playerChoice, computerChoice));
    }

    switch (true) {
        case playerScore == computerScore:
            winner = 'It\'s a tie';
            break;
        case playerScore > computerScore:
            winner = 'You win the game! Congratulations!';
            break;
        default:
            winner = 'Computer wins the game! Try again next time!';
            break;
    }
    
    let finalScore = `Your score: ${playerScore}\ncomputer score: ${computerScore}\n${winner}`;
    return finalScore;
}
console.log(playGame());