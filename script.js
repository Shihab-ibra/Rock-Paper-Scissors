const gameChoices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * gameChoices.length);
    let computerChoice = gameChoices[choiceNumber];
    return computerChoice;
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let scoresCount = 0;
    let winner = '';
    for (let rounds = 0; rounds < 5; rounds++) {
        let playerChoice = prompt("Do you choose Rock, Paper or Scissors? ").toLowerCase();
        if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
            alert('Invalid option. Choose rock, paper or scissors. \nReload the page to start again.');
            break;
        }
        let computerChoice = getComputerChoice();
        function playRound(playerChoice, computerChoice) {
            let roundOutput = '';
            if (playerChoice == computerChoice) {
                roundOutput = 'It\'s a tie';
            } else if (playerChoice == 'rock' && computerChoice == 'scissors' || 
                    playerChoice == 'paper' && computerChoice == 'rock' || 
                    playerChoice == 'scissors' && computerChoice == 'paper') {
                roundOutput = `You win! ${playerChoice} beats ${computerChoice}`;
                playerScore++;
            } else {
                roundOutput = `You lose! ${computerChoice} beats ${playerChoice}`;
                computerScore++;
            }
            return roundOutput;
        }
        console.log(playRound(playerChoice, computerChoice));
    }
    if (playerScore > computerScore) {
        winner = 'You win the game! Congratulations!';
    }
    else {
        winner = 'Computer wins the game! Try again next time!';
    }
    let finalScore = `Your score: ${playerScore}\ncomputer score: ${computerScore}\n${winner}`;
    return finalScore;
}
console.log(game());
