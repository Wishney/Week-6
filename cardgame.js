//class for player - name, hand[], score
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

//console.log(player);
let player1 = new Player('Whitney');
console.log("player1: ", player1)

let player2 = new Player('Said');
console.log("player2: ", player2)

//class for deck - suits, faceValue, ranks
//methods - create deck, shuffle, deal

class Deck {
    constructor() {
        //suit
        this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];

        //faceValue
        this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

        //rank
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        //full deck
        this.deck = [];
    }
    //create Deck
    createDeck() {
        //create a for loop to iterate over suits
        console.log(this.suits);
        for(let s = 0; s < this.suits.length; s++) {
            //console.log(this.suits[s]);
            //console.log("index;", s, "what is suits?", this.suits[s]);
            //create a for loop to iterate over faceValues
            for(let f = 0; f < this.faceValues.length; f++) {
                //console.log(this.faceValues[f])
                //console.log("what is ?", f, "what is face values?", this.faceValues[f]);
                //variable suit
                const suit = this.suits[s];
                const faceValue = this.faceValues[f];
                const rank = this.ranks[f];

                //push each card variable in the loop to the deck
                this.deck.push({suit, faceValue, rank})
                //console.log("what is this.deck doing?", this.deck);
            }
        }
        //console.log("printing deck: ",this.deck)
    }
    //shuffle deck
    shuffleDeck() {
        for(let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[j] = temp;
        }
    }
    //deal deck
    dealDeck() {
        console.log(player1.hand)
        player1.hand = this.deck.slice(0, 26);
        console.log("player1 hand - 26 cards: ",player1.hand)
        player2.hand = this.deck.slice(26, 52)
        console.log("player2 hand - 26 cards: ", player2.hand)

    }
}
let gameDeck = new Deck();
gameDeck.createDeck();
gameDeck.shuffleDeck();
gameDeck.dealDeck();
//console.log(gameDeck)


class Game {
    //methods

    //compare cards
    compareCards() {
        for (let round = 0; round < 26; round++) {
            //conditional statements to check which card is bigger at each round
            //player 1 winner?
            console.log(player1.name, player1.hand[round]);
            console.log(player2.name, player2.hand[round]);

            if(player1.hand[round].rank > player2.hand[round].rank) {
                //add to player1 score
                player1.score +=1;
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`${player1.name} is the winner!!
                
                
                `)
            } else if (player2.hand[round].rank > player1.hand[round].rank) {
                player2.score += 1;
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`${player2.name} is the winner!!
                
                
                `)

            } else {
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`${player1.name} and ${player2.name} tied this round!!
                
                
                `)
            }
        }
    }
    //determine winner
    determineWinner() {
        //check to see if player1 score is greater than player2 or tied
        if (player1.score > player2.score) {
            console.log(`${player1.name} is the winner!!!`)
        } else if (player2.score > player1.score) {
            console.log(`${player2.name} is the winner!!!`)  
        } else {
            console.log(`${player2.name} and ${player1.name} tied the game!`)
        }
    }
}

let playGame = new Game();
playGame.compareCards();
playGame.determineWinner();




