const gameChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * gameChoices.length);
    let computerChoice = gameChoices[choiceNumber];
    return computerChoice;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    const options = document.querySelectorAll(".options");
    const result = document.querySelector('.result');
    const pScore = document.querySelector('.playerScore');
    const cScore = document.querySelector('.computerScore');
    const resetBtn = document.querySelector('.resetBtn');

    options.forEach((choice) => {
        choice.addEventListener("click", function () {
            const playerChoice = this.innerText.toLowerCase();
            const computerChoice = getComputerChoice();

            const playRound = (playerChoice, computerChoice) => {
                if (playerChoice == computerChoice) {
                    result.textContent = 'It\'s a tie';
                } else if (playerChoice == 'rock' && computerChoice == 'scissors' || 
                           playerChoice == 'paper' && computerChoice == 'rock' ||
                           playerChoice == 'scissors' && computerChoice == 'paper') {
                    pScore.innerText = ++playerScore;
                    result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
                } else {
                    cScore.innerText = ++computerScore;
                    result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
                }
            }
            playRound(playerChoice, computerChoice);
        });
    });
    
    resetBtn.addEventListener('click', () => {
        window.location.href = window.location.href;
    })
}

playGame();