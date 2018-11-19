let shuffledArray = [];
let deck1 = [];
let playerDeck = [];
let compDeck = [];
let deck = [];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
let turn = 0;
let compScore = 0;
let playerScore = 0;


window.addEventListener("keydown",play);

function play(){
    let playerCard;
    let compCard;
    function gameOver(){
        if (playerScore > compScore){
            alert("Out of cards! You win with " + playerScore + " points. Comp has " + compScore + " points.");
            location.reload();
        } else {
            alert("Out of cards! Comp wins with " + compScore + " points. You have " + playerScore + " points.");
            location.reload();
        }
    }
    function compareCards(){
        let comp = compCard.substring(0, compCard.indexOf(" of")); 
        console.log("comp:  " + comp);
        let player = playerCard.substring(0, playerCard.indexOf(" of"));
        console.log("player:  " + player);
        if (values.indexOf(comp) === values.indexOf(player)){
            console.log("same cards played");
        } else if(values.indexOf(comp) > values.indexOf(player)){
            console.log("comp wins");
            compScore++;
        } else {
            console.log("player wins");
            playerScore++;
        }
        console.log(playerDeck.length - turn + " cards remaining.");
    }
    function selectCards(){
        if (turn < playerDeck.length + 1){
            playerCard = playerDeck[turn];
            compCard = compDeck[turn];
            turn++;
            if (turn > playerDeck.length){
                gameOver();
            } else {
                compareCards();
            }
        }
    }
    selectCards();
}
function init(){
function divideDeck(){
    var half_length = Math.ceil(deck1.length / 2);    
    playerDeck = shuffledArray.slice(0,half_length);
    compDeck = shuffledArray.slice(half_length, shuffledArray.length);
}
function shuffle(){
    // console.log(deck1);
    for (i=0; i<deck1.length; i++){
        shuffledArray.push(deck1[Math.floor(Math.random()*deck1.length)]);
    }
    divideDeck();
}
function createDeck(){
    for (i=0; i<suits.length; i++) {
        for (j=0; j<values.length; j++) {
            deck.push(values[j] + " of " + suits[i]);
        }
    }
    deck1 = deck;
    shuffle();
}
createDeck();
}
init();