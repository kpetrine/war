//2. Properties for suit and value


const STANDARD_CARDS = 52
export default  class card {
    /**
     * Creates an instance of the card class.
    * @param {Number} cards. The number of cards for the deck. IF not specified, defaults to 52.
  
constructor(ranks){}

const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
//could write #10 as 'X' to keep single digit
const suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
console.log("Card Suits Example:", suits);

toString() {
return'["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"]  ($[ this.value])}';
}
