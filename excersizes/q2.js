const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getComputerChoice() {
    const weightedChoices = [
        'rock', 'rock', 'rock', 'rock',
        'scissors', 'scissors',
        'snake', 'snake',
        'water', 'water'
    ];
    
    const randomIndex = Math.floor(Math.random() * weightedChoices.length);
    return weightedChoices[randomIndex];
}


function determineWinner(user, computer) {
    if (user === computer) return "It's a tie!";
    if (user === 'rock') {
        if (computer === 'scissors' || computer === 'snake') return "You win!";
        if (computer === 'paper' || computer === 'water') return "You lose!";
    } else if (user === 'paper') {
        if (computer === 'rock' || computer === 'snake') return "You win!";
        if (computer === 'scissors' || computer === 'water') return "You lose!";
    } else if (user === 'scissors') {
        if (computer === 'paper' || computer === 'snake') return "You win!";
        if (computer === 'rock' || computer === 'water') return "You lose!";
    } else if (user === 'snake') {
        if (computer === 'paper' || computer === 'water') return "You win!";
        if (computer === 'rock' || computer === 'scissors') return "You lose!";
    } else if (user === 'water') {
        if (computer === 'rock' || computer === 'scissors') return "You win!";
        if (computer === 'paper' || computer === 'snake') return "You lose!";
    }
    return "Invalid choice";
}


function startGame() {
    rl.question('Choose rock, paper, scissors, snake, or water: ', (userChoice) => {
        userChoice = userChoice.toLowerCase();
        const computerChoice = getComputerChoice();

        const result = determineWinner(userChoice, computerChoice);
        console.log(`You chose: ${userChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(result);

        rl.question('Do you want to play again? (yes/no): ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
                startGame();
            } else {
                console.log('Thanks for playing!');
                rl.close();
            }
        });
    });
}

startGame();
