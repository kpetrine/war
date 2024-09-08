    //5. - Create a deck and two players
    //- Have a method to play the entire game
    //- Compare cards and award points
    //- Keep track of the game progress
    //- Determine and announce the winner

    

      
      //6. Start the Game
//New game instance
// Call play method

class Game{
}
let game = new WarGame('Player 1', 'Player 2');
game.play();

const MAX_ROUNDS = 26;

let players = [
    new player('Player1'),
    new player('Player2'),
];

for (let round = 1; round <= MAX_ROUNDS; round++) {
 console.log('Round ${ round }:');
}
 //create for points and tie and no point
 if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
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


for(let player of players.sort((p1,p2) => p1.score > p2.score)) {
    console.log(`${ player } wins: ${ player.won }`)

}
// Your code here to create and start a new game
//The game itself will automatically play using console.log() to display turns, points, cards used, 
//and the outcome of the game. No user input via prompts is required.