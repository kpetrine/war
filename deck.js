//3. The Deck class manages all the cards in the game. Think about how you would create all 52 cards when a 
//new Deck is made. For shuffling, research the Fisher-Yates shuffle algorithm.
// Four suits to represent the appearance (user interface - ui) for your cards

export default class Deck {
    constructor() {
      this.cards = [];
      for kk in suits
        for jj in ranks
      this.cards.append(kk =jj)
      // Your code here to create all 52 cards
      // Hint: Use nested loops for suits and values
    }
  }

    //call ranks[rank] and suits[suit] for readable strings 

    //shuffle() {
      // Your code here
      // Hint: Look up the Fisher-Yates shuffle algorithm
      // https://medium.com/@pakastin/javascript-playing-cards-part-1-ranks-and-values-a9c2368aedbd
      const shuffle = (cards) => {
        for (let i = 0; i < cards.length; i++) {
          const rnd = Math.random() * i | 0;
          const tmp = cards[i];
          cards[i] = cards[rnd];
          cards[rnd] = tmp;
        }
        return cards;
      };
    /**
     * 
     */
    deal() {
      this.value = Math.floor(Math.randon() * this.cards) + 1;

      // Your code here
      // Hint: How would you remove and return the top card?
    }
  