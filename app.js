'use strict';

const express = require('express');
const app = express();
const port = 3000;

// Check if Royal Flush
// return 10 or 0
function IsRoyalFlush(cards){

}

// it will be used to analyse a player's cards by dividing into the Poker's ten rules.
function AnalyseCards(cards){

}

//
function OneHand(player1, player2){

}

// who is the winner;
// return: 0, 1, 2; 0-tie, 1-Player1 wins, 2-Player2 wins
function WhoWin(player1, player2){

    // 10. Royal Flush
    // Tie in RoyalFlush
    if (player1.IsRoyalFlush && player2.IsRoyalFlush){
        return 0;
    } 
    // Player 1 win at Royal Flush
    if (player1.IsRoyalFlush)
        return 1;
    if (player2.IsRoyalFlush)
        return 2;

    // 9. StraightFlush
    if (player1.StraightFlush > player2.StraightFlush)
        return 1;
    if (player2.StraightFlush > player1.StraightFlush)
        return 2;

    // 8. Four Kind
    if (player1.FourKind > player2.FourKind)
        return 1;
    if (player2.FourKind > player1.FourKind)
        return 2;

    // 7. Full House; it should only test Three to see the winner but just follow the standard
    if (player1.FullHouse.Three > player2.FullHouse.Three)
        return 1;
    if (player2.FullHouse.Three > player1.FullHouse.Three)
        return 2;
    if (player1.FullHouse.Pair > player2.FullHouse.Pair) // never reach but if the rules with more than 4 suits;
        return 1;
    if (player2.FullHouse.Pair > player1.FullHouse.Pair) // for example p1.three:333 and p2.three:333; 
        return 2;
    
    // 6. Flush 
    if (player1.Flush > player2.Flush)
        return 1;
    if (player2.Flush > player1.Flush)
        return 2;
    
    // 5. Straight
    if (player1.Straight > player2.Straight)
        return 1;
    if (player2.Straight > player1.Straight)
        return 2;

    // 4. Three kind
    if (player1.ThreeKind > player2.ThreeKind)
        return 1;
    if (player2.ThreeKind > player1.ThreeKind)
        return 2;

    // 3. Two pairs
    if (player1.TwoPairs.Pair1 > player2.TwoPairs.Pair1) // p1.Pair1 > p1.Pair2 during the assignment;
        return 1;
    if (player2.TwoPairs.Pair1 > player1.TwoPairs.Pair1) 
        return 2;
    if (player1.TwoPairs.Pair2> player2.TwoPairs.Pair2) // if Pair1 tie; now compare Pair2
        return 1;
    if (player2.TwoPairs.Pair2 > player1.TwoPairs.Pair2) 
        return 2;

    // 2. Pair
    if (player1.Pair > player2.Pair)
        return 1;
    if (player2.Pair > player1.Pair)
        return 2;
    
    // 1. High card
    if (player1.HighCard > player2.HighCard)
        return 1;
    if (player2.HighCard > player1.HighCard)
        return 2;

    // by default no one is the winner; tie
    return 0;
}
/// Testing and simulation
var player1 = {
    name:'Player1',
    IsRoyalFlush:false,
    StraightFlush: 0,
    FourKind:0,
    FullHouse:{Three:0, Pair:0},
    Flush:0,
    Straight:0,
    ThreeKind:0,
    TwoPairs:{Pair1:0, Pair2:0}, 
    Pair:0,
    HighCard:9
};

var player2 = {
    name:'Player2',
    IsRoyalFlush:false,
    StraightFlush: 0,
    FourKind:0,
    FullHouse:{Three:0, Pair:0},
    Flush:0,
    Straight:0,
    ThreeKind:0,
    TwoPairs:{Pair1:0, Pair2:0}, 
    Pair:0,
    HighCard:9
};

// Who is the winner
console.log(WhoWin(player1, player2));

/// End Testing and simulation




// it will be used to begin the app
function Start(){
    // Check arguments in the console app
    if (process.argv.length < 3) {
        console.log('Please use: node ' + process.argv[1] + ' poker-hands.txt');
        process.exit(1);
    }

    // Read the file and print its contents.
    var fs = require('fs'), filename = process.argv[2];
    fs.readFile(filename, 'utf8', function(err, data) {

        if (err) throw err;

        console.log('OK: ' + filename);
        console.log(data);
    });
}




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Poker app listening at http://localhost:${port}`))