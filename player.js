  //4. Two participants in the game. 
  //Track score and players.

  export default class Players {
    won = 0;
    /**
     * Creates an instance of the player class.
     * @param {String} name The name of the player
     */
    // Your code here
    // Hint: Use a constructor to initialize suit and value
    constructor(name) {
      this.name =name;
    }
/**
 * Player plays hand with top card.
 * @param {Array.<Card>} card The array of card
 * @returns The total value of the cards
 */
    play(hand) {
        let total = 0;
        for (let card of hand) {
           total += play.card();
        }

        this.score = total;
        return total;
    }
  }
