/**
 * This is the conversion of JS into TS
 *
 * NEW: Adding buttons that listen and give points. No more console entering. HOORAY!
 * VAR is bad, so I changed it manually to let.
 * And I am gonna continue to program in JS.
 * I realized that TS is not good yet for me to use, until I sufficiently understand JS.
 */
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorButton = document.querySelector('#scissor');
let playerPointSpan = document.querySelector('.point-player');
let computerPointSpan = document.querySelector('.point-computer');
let choice;
let playerPoints = 0;
let computerPoints = 0;
let whoWon = '';
rockButton.addEventListener('click', function() {
    choice = 1;
    gameMechanics(choice);
});
paperButton.addEventListener('click', function() {
    choice = 2;
    gameMechanics(choice);
});
scissorButton.addEventListener('click', function() {
    choice = 3;
    gameMechanics(choice);
});

function gameMechanics(choice) {
    whoWon = playRound(choice);
    whoWinsPoints(whoWon);
    whoWinsGame(computerPoints, playerPoints);
}

function whoWinsPoints(whoWon) {
    switch (whoWon) {
        case 'c':
            computerPoints++;
            computerPointSpan.textContent = "" + computerPoints;
            break;
        case 'p':
            playerPoints++;
            playerPointSpan.textContent = "" + playerPoints;
            break;
        default:
            break;
    }
}

function whoWinsGame(computerPoints, playerPoints) {
    if (computerPoints === 3) {
        alert('The computer won, you dead');
    } else if (playerPoints === 3) {
        alert('The player won, computer dead');
    }
}

function computerSelection() {
    var number = Math.ceil(Math.random() * 3);
    return number;
}

function playRound(playerSelection) {
    let p = playerSelection;
    let c = computerSelection();
    if (p === 1 && c === 2) {
        console.log('Rock got beaten by Paper! Computer wins');
        return 'c';
    } else if (p === 2 && c === 1) {
        console.log('Paper beats Rock! Player wins');
        return 'p';
    } else if (p === 2 && c === 3) {
        console.log('Paper got beaten by Scissor! Computer wins');
        return 'c';
    } else if (p === 3 && c === 2) {
        console.log('Scissor beats Paper! Player wins');
        return 'p';
    } else if (p === 3 && c === 1) {
        console.log('Scissor is beaten by Rock! Computer wins');
        return 'c';
    } else if (p === 1 && c === 3) {
        console.log('Rock beats Scissor! Player wins');
        return 'p';
    }
    console.log('DRAW!');
    return 'd';
}