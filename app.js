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
 */

function computerDecides() {
    let number = Math.ceil(Math.random() * 3);
    return number;
}
// This is me testing the stuff over at the html. Never done dom, so I hope this looks ok. 
/*document.write("<ul>")
for (let index = 0; index < 5; index++) {
    document.write("<li> " + computerDecides() + " </li>")
}
document.write("</ul>")*/