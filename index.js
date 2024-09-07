import card from  '/.card.js'
import player from '/.player.js'
import deck from '/.deck.js'
import wargame from '/.wargame.js'

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