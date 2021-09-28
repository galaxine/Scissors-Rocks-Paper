/**
 * This is the conversion of JS into TS
 *
 * NEW: Adding buttons that listen and give points. No more console entering. HOORAY!
 * VAR is bad, so I changed it manually to let.
 * And I am gonna continue to program in JS.
 * I realized that TS is not good yet for me to use, until I sufficiently understand JS.
 */

// I want the images as an object so I can run through it and access it easier
let path = 'media/images/';
const images = {
    'chef': `${path}Chef.png`,
    'news': `${path}News-recut.png`,
    'garbage': `${path}garbage_can.png`,
    'torture': {
        'normal': `${path}torture_room.png`,
        'invert': `${path}tortureroom_invert.png`
    },
    'answer': {
        'right': `${path}right_answer.png`,
        'wrong': `${path}wrong_answer.png`
    },
    'game': {
        'over': `${path}gameover.png`,
        'won': `${path}game_won.png`
    }

};
// I want to add these WHEN the actual game starts
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorButton = document.querySelector('#scissor');
// i want to put these in WHEN the actual game starts
let playerPointSpan = document.querySelector('.point-player');
let computerPointSpan = document.querySelector('.point-computer');
let choice;
let playerPoints = 0;
let computerPoints = 0;
let whoWon = '';
// i tried out if adding images work. it does. Now try it by creating an element 
// and append it to the parent
const gameScreen = document.querySelector('.screen');
const image = document.createElement("img");
image.alt = "GameScreen";
image.srcset = images.game.over;
gameScreen.appendChild(image);



// i am trying now to make text appear.
const gameTextContainer = document.querySelector('.game-text')







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