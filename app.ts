/**
 * This is the conversion of JS into TS
 *
 * NEW: Adding buttons that listen and give points. No more console entering. HOORAY!
 */

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const playerPointSpan = document.querySelector('.point-player');
const computerPointSpan = document.querySelector('.point-computer');

let choice: number;
let playerPoints: number = 0;
let computerPoints: number = 0;
let whoWon: String = '';

rockButton.addEventListener('click', () => {
  choice = 1;
  gameMechanics(choice);
});
paperButton.addEventListener('click', () => {
  choice = 2;
  gameMechanics(choice);
});

scissorButton.addEventListener('click', () => {
  choice = 3;
  gameMechanics(choice);
});

function gameMechanics(choice: number) {
  whoWon = playRound(choice);
  whoWinsPoints(whoWon);
  whoWinsGame(computerPoints, playerPoints);
}

function whoWinsPoints(whoWon: String) {
  switch (whoWon) {
    case 'c':
      computerPoints++;
      computerPointSpan.textContent = `${computerPoints}`;
      break;
    case 'p':
      playerPoints++;
      playerPointSpan.textContent = `${playerPoints}`;
      break;
    default:
      break;
  }
}

function whoWinsGame(computerPoints: number, playerPoints: number) {
  if (computerPoints === 3) {
    alert('The computer won, you dead');
  } else if (playerPoints === 3) {
    alert('The player won, computer dead');
  }
}

function computerSelection(): Number {
  let number: Number = Math.ceil(Math.random() * 3);
  return number;
}

function playRound(playerSelection: Number) {
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
