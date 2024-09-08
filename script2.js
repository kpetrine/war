

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

    display() {
        return `${this.rank} of ${this.suit}`;
    }
}



class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck() {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];

        this.deck = [];
        for (let suit of suits) {
            for (let [value, rank] of ranks.entries()) {
                this.deck.push(new Card(suit, rank, value));
            }
        }
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        };

        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        };


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
}

const game = new Game();
game.playGame();
