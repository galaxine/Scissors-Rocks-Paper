/**
 * This is the conversion of JS into TS
 *
 * NEW: Adding buttons that listen and give points. No more console entering. HOORAY!
 */
var rockButton = document.querySelector('#rock');
var paperButton = document.querySelector('#paper');
var scissorButton = document.querySelector('#scissor');
var choice;
var playerPoints = 0;
var computerPoints = 0;
var whoWon = '';
rockButton.addEventListener('click', function () {
    choice = 1;
    gameMechanics(choice);
});
paperButton.addEventListener('click', function () {
    choice = 2;
    gameMechanics(choice);
});
scissorButton.addEventListener('click', function () {
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
            break;
        case 'p':
            playerPoints++;
            break;
        default:
            break;
    }
}
function whoWinsGame(computerPoints, playerPoints) {
    if (computerPoints === 3) {
        alert('The computer won, you dead');
    }
    else if (playerPoints === 3) {
        alert('The player won, computer dead');
    }
}
function computerSelection() {
    var number = Math.ceil(Math.random() * 3);
    return number;
}
function playRound(playerSelection) {
    var p = playerSelection;
    var c = computerSelection();
    if (p === 1 && c === 2) {
        console.log('Rock got beaten by Paper! Computer wins');
        return 'c';
    }
    else if (p === 2 && c === 1) {
        console.log('Paper beats Rock! Player wins');
        return 'p';
    }
    else if (p === 2 && c === 3) {
        console.log('Paper got beaten by Scissor! Computer wins');
        return 'c';
    }
    else if (p === 3 && c === 2) {
        console.log('Scissor beats Paper! Player wins');
        return 'p';
    }
    else if (p === 3 && c === 1) {
        console.log('Scissor is beaten by Rock! Computer wins');
        return 'c';
    }
    else if (p === 1 && c === 3) {
        console.log('Rock beats Scissor! Player wins');
        return 'p';
    }
    console.log('DRAW!');
    return 'd';
}
