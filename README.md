# PokerICM
A poker hand consists of a combination of five playing cards, ranked in the following ascending order of 10 rules with suit and the highest value to win. The cards are valued in the order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace (the highest).
Suits are: Diamonds (D), Hearts (H), Spades (S), Clubs (C).


## Run the app locally

1. [Install Node.js][]
1. cd into this project's root directory
1. Run `npm install` to install the app's dependencies
1. Run `node app.js poker-hands.txt` to start the app
1. Access the running app in a browser at <http://localhost:3000>

[Install Node.js]: https://nodejs.org/en/download/

## Model and the Main Concept

### Player1: 4H 4C 6S 7S KD (Pair of Fours)
```
var player1 = {
    name:'Player1',
    cards: [ '4H', '4C', '6S', '7S', 'KD' ],
    IsRoyalFlush:false,
    StraightFlush: 0,
    FourKind:0,
    FullHouse:{Three:0, Pair:0},
    Flush:0,
    Straight:0,
    ThreeKind:0,
    TwoPairs:{Pair1:0, Pair2:0}, 
    Pair:4,
    HighCard:[ 6, 7, 13 ]
};
```
### Player2: 2C 3S 9S 9D TD (Pair of Nines)
```
var player2 = {
    name:'Player2',
    cards: [ '2C', '3S', '9S', '9D', 'TD' ],
    IsRoyalFlush:false,
    StraightFlush: 0,
    FourKind:0,
    FullHouse:{Three:0, Pair:0},
    Flush:0,
    Straight:0,
    ThreeKind:0,
    TwoPairs:{Pair1:0, Pair2:0}, 
    Pair:9,
    HighCard:[ 2, 3, 10 ]
};
```
The winner is Player2

### Player1: 9H 9C 6S 7S KD (Pair of Nines)
```
var player1 = {
    name:'Player1',
    cards: [ '9H', '9C', '6S', '7S', 'KD' ],
    IsRoyalFlush:false,
    StraightFlush: 0,
    FourKind:0,
    FullHouse:{Three:0, Pair:0},
    Flush:0,
    Straight:0,
    ThreeKind:0,
    TwoPairs:{Pair1:0, Pair2:0}, 
    Pair:9,
    HighCard:[ 6, 7, 13 ]
};
```
### Player2: 2C 3S 9S 9D KH (Pair of Nines)
```
var player2 = {
    name:'Player2',
    cards: [ '2C', '3S', '9S', '9D', 'TD' ],
    IsRoyalFlush:false,
    StraightFlush: 0,
    FourKind:0,
    FullHouse:{Three:0, Pair:0},
    Flush:0,
    Straight:0,
    ThreeKind:0,
    TwoPairs:{Pair1:0, Pair2:0}, 
    Pair:9,
    HighCard:[ 2, 3, 13 ]
};
```
The winner is Player1, both players have the same pair of nine, then we compare their high cards as the following 13|13 then 7|3
