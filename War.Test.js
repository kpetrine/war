

const { expect } = require('chai');
const { Card, Deck } = require('./path-to-your-file'); // Adjust the path to where your classes are defined

// check deck class
// Arrange
describe('Deck Class', function() {
    let deck;

    beforeEach(function() {
        deck = new Deck();
        deck.createDeck();
    });

    //check deck
    // Arrange
    describe('createDeck()', function() {
        // Act
        it('should create a deck of 52 cards', function() {
    
            //Assert
            expect(deck.deck).to.have.lengthOf(52);
        });
 // Act
        it('should create cards with unique suits and ranks', function() {
            const suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
            const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            
            const cardCounts = new Map();
            deck.deck.forEach(card => {
                const key = `${card.suit}-${card.rank}`;
                cardCounts.set(key, (cardCounts.get(key) || 0) + 1);
            });

            suits.forEach(suit => {
                ranks.forEach(rank => {
                     //Assert
                    expect(cardCounts.get(`${suit}-${rank}`)).to.equal(1);
                });
            });
        });
    });

    // check shuffle
    // Arrange
    describe('shuffle()', function() {
         // Act
        it('should shuffle the deck so that the order of cards changes', function() {
            const originalDeck = [...deck.deck];
            deck.shuffle();
             //Assert
            expect(deck.deck).to.not.deep.equal(originalDeck);
        });
 // Act
        it('should not alter the number of cards in the deck after shuffling', function() {
            const originalLength = deck.deck.length;
            deck.shuffle();
             //Assert
            expect(deck.deck).to.have.lengthOf(originalLength);
        });
    });
});
