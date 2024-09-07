  //4. Two participants in the game. 
  //Track score and players.

  export default class Players {
    won = 0;
    
    constructor(name) {
      this.name =name;
      this.hand =[];
    }
/**
 * Player plays hand with top card.

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
