

const { expect } = require('chai');
const { Card, Deck } = require('./path-to-your-file'); // Adjust the path to where your classes are defined

// check deck class
describe('Deck Class', function() {
    let deck;

    beforeEach(function() {
        deck = new Deck();
        deck.createDeck();
    });

    //check deck
    describe('createDeck()', function() {
        it('should create a deck of 52 cards', function() {
            expect(deck.deck).to.have.lengthOf(52);
        });

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
                    expect(cardCounts.get(`${suit}-${rank}`)).to.equal(1);
                });
            });
        });
    });

    // check shuffle
    describe('shuffle()', function() {
        it('should shuffle the deck so that the order of cards changes', function() {
            const originalDeck = [...deck.deck];
            deck.shuffle();
            expect(deck.deck).to.not.deep.equal(originalDeck);
        });

        it('should not alter the number of cards in the deck after shuffling', function() {
            const originalLength = deck.deck.length;
            deck.shuffle();
            expect(deck.deck).to.have.lengthOf(originalLength);
        });
    });
});
