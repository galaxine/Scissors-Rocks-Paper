/**
 * This is the conversion of JS into TS
 */

function computerSelection(): Number {
  let number: Number = Math.ceil(Math.random() * 3);
  return number;
}

function playerSelection(): Number {
  let input = prompt(
    "Make sure you are entering either rock, paper or scissor. the upper or lower case doesn't matter.",
    ''
  ).toLowerCase();
  switch (input) {
    case 'rock':
      return 1;
    case 'scissor':
      return 2;
    case 'paper':
      return 3;
    default:
      break;
  }
}

function playRound(playerSelection: Number, computerSelection: Number): Number {
  let player = playerSelection;
  let computer = computerSelection;
  if (player === 1 && computer === 2) {
    console.log('Rock got beaten by Paper! Computer wins');
    return 1;
  } else if (player === 2 && computer === 1) {
    console.log('Paper beats Rock! Player wins');
    return 2;
  } else if (player === 2 && computer === 3) {
    console.log('Paper got beaten by Scissor! Computer wins');
    return 1;
  } else if (player === 3 && computer === 2) {
    console.log('Scissor beats Paper! Player wins');
    return 2;
  } else if (player === 3 && computer === 1) {
    console.log('Scissor is beaten by Rock! Computer wins');
    return 1;
  } else if (player === 1 && computer === 3) {
    console.log('Rock beats Scissor! Player wins');
    return 2;
  }
  console.log('DRAW!');
  return 0;
}

function whoHasWon(playerPoints: Number, computerPoints: Number) {
  if (playerPoints === 3) {
    alert(
      'Player Won! You escaped the room unscathed! The event will accompany for a long time as a trauma'
    );
  } else if (computerPoints === 3) {
    alert(
      "The Computer Won! You are losing your limbs and become a part of the wall's decoration!"
    );
  }
}
/**
 * Is the main function that uses all the other functions to create a game.
 * Three rounds to win in order to determine the winner.
 */
function game() {
  console.log('We are playing a game, wether you like it or not');
  let playerPoints = 0;
  let computerPoints = 0;
  console.log("Let's play until one of us has won 3 rounds, okay?");
  while (playerPoints !== 3 && computerPoints !== 3) {
    let result: Number = playRound(playerSelection(), computerSelection());
    if (result === 1) {
      computerPoints++;
    } else if (result === 2) {
      playerPoints++;
    }
    console.log('Player VS Computer');
    console.log(playerPoints + ' : ' + computerPoints);
  }
  whoHasWon(playerPoints, computerPoints);
}

game();
