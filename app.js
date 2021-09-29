/**
 * This is the conversion of JS into TS
 *
 * NEW: Adding buttons that listen and give points. No more console entering. HOORAY!
 * VAR is bad, so I changed it manually to let.
 * And I am gonna continue to program in JS.
 * I realized that TS is not good yet for me to use, until I sufficiently understand JS.
 */


/* Paper scissors game:
1. How it looks: Have a black screen.
2. Use the text area to ask the player if it wants to have the story with it or not.
2.1 Flash in red (gradient), when it's no.
2.2 Flash in magenta (gradient), when it's yes.
3. Start the game with a confirmation sound effect when any of the buttons are chosen.

Game starts with story:
4. The News sound happen. Blowing sounds, low volume
5. Add the img element and then slowly get the gradient from black to the original color.
5.1 Slowly release the text, maybe faster if the track is shorter.
5.2 Repeat the track if the player didn't continue the audio (press space).
0. mandatory confirmation button (space)
6. Doorbell and mud sfx.
7. use the chef page and trickle the text.
0. I need to rechange the text, basically it needs to be different to what I wrote.
8. okay, now I need to remove the img and continue with the text.
9. Bell sound.
10. Text, sfx till trash
11. show the garbage can image.
12. after store, get knocked sound.
13. Text, background.
14. start the action  (invert/colors).
15. insert buttons.
----
The real game:
Game mechanics:*/
const audioPath = "/media/audio/";
const audio = {
    'dumpster': `${audioPath}DumpsterSoundEffect.mp3`,
    'physical': `${audioPath}BodyImpactsSoundEffect.mp3`,
    'game': `${audioPath}clowningAround.mp3`,
    'microwave': `${audioPath}MicrowaveSoundEffect.mp3`,
    'doorbell': `${audioPath}mixkitdoorbelltone2864.wav`,
    'wetShoes': `${audioPath}WetShoesWalkingSoundEffect.wav`

}

const gameScript = {
        'gameMenu': "Do you want to start with the story?",
        'intro': {
            'copperMart': 'Copper Mart, 10:30pm',
            'news1': "\"Another citizen has suddenly become missing in the Markley District since last week Saturday, when the Autumn Festival was held.\n",
            'news2': "Relatives, Friends and Co-Workers are not sure about her last whereabouts and hadn't detected any suspicious behaviour before her becoming missing.\n",
            'news3': "If you know any hints that could help the MDPD in their efforts, please call us on our hotline to help us with an anonymous t-",
            'boss1': "\"Hey man, can't you try to get in less wet? LOOK AT THE FLOOR!",
            //picture of him
            'boss2': "\"Clean that shit after you have dried yourself up. Towel is on the chair",
            'boss3': "Charming as always, at least he is actually a decent boss under his act.",
            'change': "You changed your clothes after drying yourself.Your boss already changed to his usual clothes, waiting for your to check-in so he could leave his position.",
            'afterChange1': "\"Look I need you to make sure that you close shop early this night so you can throw the garbage out.\nAlso, throw out the food that expired, I don't mind if you eat it or take it home either.",
            'afterChange2': "You can have the coffee I brewed, but if you want something else, you have to pay for it. I am tired, see you tomorrow\n",
            'intro-end': "And thus, he left..."
        },
        'middle': {
            'text1': "You looked into the shelves and also the fridges, there were a few items that didn't sell despite it being 50% off.",
            'text2': "You set those aside and refilled the shelves with fresher ones. At least for a student, you couldn't say you lived only on ramen.",
            'text3': "As the night went on, the visitors who wanted to buy food or drinks became less and less until you decided it was time to close shop.",
            'garbage1': "You sweeped the place and collected the trash into a bag and went for the container outside the shop.",
            'garbage2': "Just as you were going back to the backdoor to get your backpack from the staffroom, you got shoved to the wall.",
            'punch1': "Facefirst to the door frame and several punches and kicks rained on your back.",
            'punch2': "You lost consciousness."
        },
        'game': {
            'intro': "You felt pain all over your body, groaning from the dull pain all over your body.",
            'wakingUp': "You woke up, but realized that you couldn't move at all. Bound to a chair.",
            'sound': "\"Oh I see you are slowly awake, can you hear me? Whatever I don't care.",
            // chainsaw sound
            'fug': "You heard the sound of a saw under your chair.",
            'rules1': "\"Honestly, you want out and it's simple: play a round of rock paper and scissors and you get out",
            'rules2': "Or... you don't and your are gonna get sawed in half. Oh yeah, you playing against another guy, gal, whatever.",
            'rules3': "If you manage to lose all three lives, that is. Win and we knock you out and you wake up JUUUST where we got you. Ok? Cool? Let's start!",
        }

    }
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

const gameScreen = document.querySelector('.screen');
let choice;
let playerPoints = 0;
let computerPoints = 0;
let whoWon = '';

/*Trying out the audio */
let promise = document.querySelector('audio');
audio.src = audio.game;
document.querySelector('audio').play();
console.log(audio.currentSrc());









function addImageToGameScreen(imagePath, gameScreen) {
    const image = document.createElement("img");
    image.alt = "GameScreen";
    image.srcset = imagePath;
    gameScreen.appendChild(image);
}

//addImageToGameScreen(images.chef, gameScreen);

//make the text appear to ask wether you want story or not
const gameText = document.querySelector('.game-text');
const textArea = document.createElement('p');
textArea.classList.add('.text-area');
textArea.textContent = "";


// i am trying now to make text appear.
const gameTextContainer = document.querySelector('.game-text')





/*

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
*/
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