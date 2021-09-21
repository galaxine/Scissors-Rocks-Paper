/**
 * Scissors Rock and Paper. First as a Console text game.
 * 
 * It's a game that's played by at least two players.
 * More players and it becomes a battle-royale it isn't required so I will not implement it yet.
 * 
 * ---------------------------------------------------------------
 * 
 * Since this is  a single-player project, we need a computer player
 * ## Computer player:
 *  random numbers, 0-2 or 1-3 for the scissor, rock and papers
 * 
 * ---------------------------------------------------------------
 * 
 * We need to decide, if the comparison needs to be done over ints, or string.
 * 
 * The computer generates a random number => convert to string
 * Or take the player's input and assign it an int.
 * 
 * I prefer to use the numbers instead, it makes comparisons less of a hassle.
 * 
 * ---------------------------------------------------------------------
 * 
 * IF we  want to play rounds with it, we need to take ahold of the points.
 * So the player and the cpu can earn points
 * 
 */
/**
 * Returns a pseudo-randomly generated number between 1 and 3.
 * Is also rounded to give return a natural number
 * @returns Number
 */
function computerSelection() {
    let number = Math.ceil(Math.random() * 3);
    return number;
}
/**
 * Prompts the player an input. it will ignore anythin that isn't spelled:
 * * Rock
 * * Paper
 * * Scissor
 * returns numbers 1-3 by order
 * @returns Number
 */
function playerSelection() {
    let input = (prompt("Make sure you are entering either rock, paper or scissor. Upper or lower case doesn't really matter, just make sure you write it with the correct spelling.", "")).toLowerCase();
    if (input === "rock") {
        return 1;
    } else if (input === "paper") {
        return 2;
    } else if (input === "scissor") {
        return 3;
    }

}
/**
 * compares the player's choice against the computer's choice.
 * Rock = 1
 * Scissors = 2
 * Paper = 3
 * returns 1, if the Computer wins, 2 if it's the player.
 * Draw returns 0.
 * 
 * Also announces who won.
 * 
 * I am not sure if the strings would cause some weird "true false" magic, so i reverted to numbers.
 * @param {Number} playerSelection 
 * @param {Number} computerSelection 
 * @returns Number
 */
function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    if (player === 1 && computer === 2) {
        console.log("Rock got beaten by Paper! Computer wins");
        return 1;
    } else if (player === 2 && computer === 1) {
        console.log("Paper beats Rock! Player wins");
        return 2;
    } else if (player === 2 && computer === 3) {
        console.log("Paper got beaten by Scissor! Computer wins");
        return 1;
    } else if (player === 3 && computer === 2) {
        console.log("Scissor beats Paper! Player wins");
        return 2;
    } else if (player === 3 && computer === 1) {
        console.log("Scissor is beaten by Rock! Computer wins");
        return 1;
    } else if (player === 1 && computer === 3) {
        console.log("Rock beats Scissor! Player wins");
        return 2;
    }
    console.log("DRAW!");
    return 0;
}
/**
 * Is the main function that uses all the other functions to create a game.
 * Three rounds to win in order to determine the winner.
 */
function game() {
    console.log("We are playing a game, wether you like it or not");
    let playerPoints = 0;
    let computerPoints = 0;
    console.log("Let's play until one of us has won 3 rounds, okay?");
    while (true) {
        result = playRound(playerSelection(), computerSelection());
        if (result === 1) {
            computerPoints++;
        } else if (result === 2) {
            playerPoints++;
        }
        console.log("Player VS Computer");
        console.log(playerPoints + " : " + computerPoints);
        if (playerPoints === 3 || playerPoints === 3) {
            break;
        }
    }
    if (playerPoints === 3) {
        alert("Player Won! You escaped the room unscathed! The event will accompany for a long time as a trauma");
    } else {
        alert("The Computer Won! You are losing your limbs and become a part of the wall's decoration!");
    }
}

game();