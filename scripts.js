function computerPlay() {
    //pick randomly between rock, paper, or scissors
    //maybe with .random(something here)?
    const options = ['rock', 'paper', 'scissors'];
    return options[(Math.random() * options.length) | 0]
    //list of rock, paper, and scissors; pick one randomly
}

function playRound(playerSelection, computerSelection) {
// validate playerSelection, use RegEx?
// or, maybe need to change playerSelection into form Rock, Paper, Scissors
// and those are the only options the computer can pick
let PChoice = playerSelection.toLowerCase();
let CChoice = computerSelection.toLowerCase();
    
    if (PChoice === CChoice) {
    //if validated player selection, need to fix/figure out validation here
        return 'Tie';
    }

    else if (PChoice == 'rock') {
        if (CChoice == 'paper') {
            return 'You Lose! Paper beats Rock';
        }
        else if (CChoice == 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
    }

    else if (PChoice == 'scissors') {
        if (CChoice == 'rock') {
            return 'You Lose! Rock beats Scissors';
        }
        else if (CChoice == 'paper') {
            return 'You Win! Scissors beats Paper';
        }
    }

    else if (PChoice == 'paper') {
        if (CChoice == 'scissors' ) {
            return 'You Lose! Scissors beats Paper';
        }
        else if (CChoice == 'rock') {
            return 'You Win! Paper beats Rock';
        }
    }
}

function game() {
//5 round game
//so for loop does 5 loops, whats inside each?
// need to prompt each time, and also keep/announce score
let playerScore = 0;
let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let choice = prompt('rock, paper, or scissors?');

        if (playRound(choice, computerPlay()).charAt(4) == 'W') {
            playerScore++;
            console.log('You won this round! Your score increased');
            // announce score change/ player score increase
        }

        else if (playRound(choice, computerPlay()).charAt(4) == 'L') {
            compScore++;
            console.log("You lost this round! The computer's score increased");
            // announce score change/ comp score increase
        }
        // use string.charAt(4);
        // for string being the win/lose message. 
        // this should determine a win or loss, tie does nothing anyway
    }

    if (playerScore > compScore) {
        console.log('You won!');
    }

    else if (compScore > playerScore) {
        console.log('You lost!');
    }

    else {
        console.log('You tied!')
    }
    // announce who won/lost?
}

game()