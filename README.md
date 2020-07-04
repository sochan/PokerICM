# PokerICM
A poker hand consists of a combination of five playing cards, ranked in the following ascending order of 10 rules with highest value to win.

## Run the app locally

1. [Install Node.js][]
1. cd into this project's root directory
1. Run `npm install` to install the app's dependencies
1. Run `node app.js poker-hands.txt` to start the app
1. Access the running app in a browser at <http://localhost:3000>

[Install Node.js]: https://nodejs.org/en/download/

## Model

### Player1: 4H 4C 6S 7S KD (Pair of Fours)
```
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
    Pair:4,
    HighCard:13
};
```
### Player2: 2C 3S 9S 9D TD (Pair of Nines)
```
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
    Pair:9,
    HighCard:10
};
```