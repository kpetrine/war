/**2. Properties for suit and value
* Deck has 52 cards, 
* 4 suits
* 13 ranks
* value
*
* Logic
* deck
* ways to compare card by value
*
* Deck class
* include array to store cards
* array to store ranks
* array to store suits
*
*For shuffling, use the Fisher-Yates shuffle algorithm
*/


//2. Properties for suit and value


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
//console.log(myDeck.deck[0].display())