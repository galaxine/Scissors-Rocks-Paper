/* Just make it simple: 
 * Add a button, ask the player if he wants to play, turn the screen black after confirmation
 * Whenever th player loses, turn the background into a more red color.
 * When the player wins, ask it with a new js prompt if he wants to play again.
 * same if he loses
 */
// i want to put these in WHEN the actual game starts
const gameArea = document.querySelector('.game-text');
const container = document.querySelector('.content-container');
//css classes being used to depict how badly the player is losing
let gameBackground = {
        'dead': "content-container-dead",
        'deader': "content-container-deadder",
        'deadest': "content-container-deadest",
        'default': "content-container"
    }
    //logic values
let choice;
let playerPoints = 0;
let computerPoints = 0;
let whoWon = '';

//this goes to where the screen is:
let gamePointContainer = document.querySelector('.screen');
let playerPointSpan = document.createElement('span');
playerPointSpan.textContent = playerPoints;
let computerPointSpan = document.createElement('span');
computerPointSpan.textContent = computerPoints;
let pointTable = document.createElement('p');
gamePointContainer.appendChild(pointTable);
pointTable.append('Player: ', playerPointSpan, ' :  Computer: ', computerPointSpan);

const rockButton = makeButton('#rock');
const paperButton = makeButton('#paper');
const scissorButton = makeButton('#scissor');
gameArea.appendChild(rockButton)
gameArea.appendChild(paperButton)
gameArea.appendChild(scissorButton)

function makeButton(id) {
    let button = document.createElement('button');
    button.setAttribute(
        "style", "padding: 5px 10px"
    );
    let content = id.slice(1, id.length);
    button.textContent = content;
    button.id = `${id}`;
    return button;
}


rockButton.addEventListener('click', () => {
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

function backgroundChangeTest(container, number) {
    let className = container.className;
    switch (number) {
        case 1:
            container.classList.replace(
                className, gameBackground.dead
            );
            break;
        case 2:
            container.classList.replace(
                className, gameBackground.deader
            )
        case 3:
            container.classList.replace(
                className, gameBackground.deadest
            )
            break;
        case 4:
            container.classList.replace(
                className, gameBackground.default
            );
            break;
        default:
            break;
    }
}


function gameMechanics(choice) {
    whoWon = playRound(choice);
    whoWinsPoints(whoWon);
    whoWinsGame(computerPoints, playerPoints);
}



function whoWinsPoints(whoWon) {
    switch (whoWon) {
        case 'c':
            computerPoints++;
            computerPointSpan.textContent = computerPoints;
            backgroundChangeTest(container, computerPoints);
            break;
        case 'p':
            playerPoints++;
            playerPointSpan.textContent = playerPoints;
            break;
        default:
            break;
    }
}

function resultGame() {
    let gameOver = document.querySelector(".game-container");
    let winOrLose = document.createElement('p');
    if (playerPoints > computerPoints) {
        winOrLose.textContent = "you Win! Reload to play again!";
        gameArea.remove('#rock');
        gameArea.remove('#paper');
        gameArea.remove('#scissor');
    } else {
        winOrLose.textContent = "you Lose! Reload to play again";
        gameArea.remove('#rock');
        gameArea.remove('#paper');
        gameArea.remove('#scissor');
    }
    gameOver.setAttribute(
        "style",
        "font-family: 'Gemunu Libre', sans-serif;")
    gameOver.append(winOrLose);
}

function whoWinsGame(computerPoints, playerPoints) {
    if (computerPoints === 3) {
        resultGame();
    } else if (playerPoints === 3) {
        resultGame();
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