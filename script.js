/**
* Rules: Deal 26 Cards to each Player to make a hand from a Deck of 52 cards.
* Iterate through the turns where each Player plays a Card.
* The Player who played the higher card is awarded a point.
* -Ties result in zero points for both Players.
* After all cards have been played, display the score and declare the winner.
* Game: Shuffle deck, draw cards, compare, award points, repeat until cards run out
*/
/**
 * A  Create a deck and two players
 *  Have a method to play the entire game
 * create deck
 * shuffle deck
 * pass cards
* Compare cards and award points
* Keep track of the game progress
* Determine and announce the winner
 */
class Card {
    constructor(suit, rank, value){
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    };
  
  display(){
    return `${this.rank} of ${this.suit}`
  }
  
  };
  
  
  
  
  class Deck {
    constructor(){
    this.deck = [];
    };
  
    createDeck(){
        const ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
  
        for(let i = 0; i < suits.length; i++){
            for(let x = 0; x < ranks.length; x++){
                let newCard = new Card(suits[i], ranks[x], x)
                this.deck.push(newCard)
            }
        }
        console.log(this.deck)
    }
  
    shuffle(){
        console.log("cards:" , this.deck)
        for (let i = 0; i < this.deck.length; i++) {
          const rnd = Math.random() * i | 0;
          const tmp = this.deck[i];
          this.deck[i] = this.deck[rnd];
          this.deck[rnd] = tmp;
        }
        return this.deck;
      };
  };
  
  let myDeck = new Deck()
  myDeck.createDeck()
  myDeck.shuffle()
  console.log(myDeck)
  
class Game {
 constructor() {
    this.player1 = {
        name: 'Player 1',
        score: 0,
        hand: []
    }

    this.player2 = {
        name: 'Player 2',
        score: 0,
        hand: []
    }
 }

 /**
 * Method to play game
 * pass out cards
 * take turns
 * base on number of cards
 * award points based on card value
 * log the winner
 */
 this.MAX_ROUNDS = 26; // Since each player gets 26 cards
    }

    playGame() {
        const deck = new Deck();
        deck.createDeck();
        deck.shuffle();

        // Deal 26 cards to each player
        while (deck.deck.length) {
            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());
        }

        // Play rounds
        for (let round = 1; round <= this.MAX_ROUNDS; round++) {
            console.log(`Round ${round}:`);

            // Draw a card for each player
            const card1 = this.player1.hand.shift();
            const card2 = this.player2.hand.shift();

            // Compare cards
            if (card1.value > card2.value) {
                this.player1.score++;
                console.log(`${this.player1.name} plays ${card1.display()} and wins this round.`);
            } else if (card2.value > card1.value) {
                this.player2.score++;
                console.log(`${this.player2.name} plays ${card2.display()} and wins this round.`);
            } else {
                console.log(`Both players play ${card1.display()} - It's a tie.`);
            }

            console.log(`Scores - ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}`);
        }

        // Determine and announce the winner
        if (this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} wins the game with ${this.player1.score} points!`);
        } else if (this.player2.score > this.player1.score) {
            console.log(`${this.player2.name} wins the game with ${this.player2.score} points!`);
        } else {
            console.log("The game is a tie!");
        }
    }


const game = new Game();
game.playGame();






