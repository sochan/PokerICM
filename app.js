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

// Who is the winner
function WhoWin(player1, player2){
    console.log("Test");
    console.log(player1.name);
    console.log(player2.name);   
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
    HighCard:0
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
    HighCard:0
};

// Who is the winner
WhoWin(player1, player2);

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