/**
 * Scissors Rock and Paper. First as a Console text game.
 * 
 * It's a game that's played by at least two players.
 * More and it becomes a battle-royale
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

let playerPoints = 0;
let computerPoints = 0;

function computerSelection() {
    let number = Math.ceil(Math.random() * 3);
    return number;
}

function playerSelection() {
    let input;
    input = (prompt("Make sure you are entering either rock, scissor or paper. upper or lower case doesn't really matter, just make sure you write it wit the correct lettering", "")).toLowerCase();
    if (input === "rock") {
        return 1;
    } else if (input === "paper") {
        return 2;
    } else if (input === "scissor") {
        return 3;
    }

}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    if (player === 1 && computer === 2) {
        console.log("Computer wins");
        computerPoints++;
    } else if (player === 2 && computer === 1) {
        console.log("Player wins");
        playerPoints++;
    } else if (player === 2 && computer === 3) {
        console.log("Computer wins");
        computerPoints++;
    } else if (player === 3 && computer === 2) {
        console.log("Player wins");
        playerPoints++;
    } else if (player === 3 && computer === 1) {
        console.log("Computer wins");
        computerPoints++;
    } else if (player === 1 && computer === 3) {
        console.log("Player wins");
        playerPoints++;
    } else {
        console.log("DRAW!")
    }
}


for (let index = 0; index < 6; index++) {
    playRound(playerSelection(), computerSelection())
    console.log("player VS CPU");
    console.log(playerPoints + " : " + computerPoints)
}