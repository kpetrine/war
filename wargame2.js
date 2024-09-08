    //5. - Create a deck and two players
    //- Have a method to play the entire game
    //- Compare cards and award points
    //- Keep track of the game progress
    //- Determine and announce the winner

    

    constructor(player1Name, player2Name); {
        // Your code here to set up the game
      }
    
      play(); {
        // Your code here to run the game
        // Hint: Use a loop to keep playing rounds until the deck is empty
      }
    
      // You might need helper methods. What could they be?
    
    //6. Start the Game
//New game instance
// Call play method


let game = new WarGame('Player 1', 'Player 2');
game.play();

const MAX_ROUNDS = 26;

let players = [
  new player('Player1'),
  new player('Player2'),
];

for (let round = 1; round <= MAX_ROUNDS; round++) {
console.log('Round ${ round }:');

let highScorePlayer = null
  for(let player of players) {
  player.hand.push(card);  // This is how to get a card into the player.hand array.
  let total = player.play(hand);
  //console.log(player.score);
      //console.log((player.score > (highScorePlayer?.score || 0)));
      if(player.score > highScorePlayer?.score) {
          highScorePlayer = player;
      }
  console.log(`${ player.name } plays ${ total }   ${card.join(',',)}`);
}
console.log(` ${ highScorePlayer } wins the round! ${ highScorePlayer.score}`);
highScorePlayer.won++;
}

for(let player of players.sort((p1,p2) => p1.score > p2.score)) {
  console.log(`${ player } wins: ${ player.won }`)

}
// Your code here to create and start a new game
//The game itself will automatically play using console.log() to display turns, points, cards used, 
//and the outcome of the game. No user input via prompts is required.