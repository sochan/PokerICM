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

/// Data analysing


// Cards: 2, 3, 4, 5, 6, 7, 8, 9, 10(T), Jack(J), Queen(Q), King (K), Ace(A) 
// Return: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
function GetCardVal(card){
    if (!isNaN(card))
        return parseInt(card);
    else {
        var cardValue = 0; 
        switch(card){
            case 'T':
                cardValue = 10;
                break;
            case 'J':
                cardValue = 11;
                break;
            case 'Q':
                cardValue = 12;
                break;
            case 'K':
                cardValue = 13;
                break;
            default:
                cardValue = 14;
        }
        return cardValue;
    }
}

//       
// Get IsRoyalFlush
// Return false if Ten, Jack, Queen, King and Ace in the same suit
function GetIsRoyalFlush(arr_cards_oneplayer){
    let flage = false;
    let first_suit = arr_cards_oneplayer[0][1];

    for (let i=0; i < arr_cards_oneplayer.length; i++)
    {
        let ele = arr_cards_oneplayer[i];
        if (GetCardVal(ele[0]) >= 10 && ele[1]=== first_suit){ 
            flage = true;
        }   
        else {
            flage = false;
            break;
        }
    }
    return flage;
} 

// GetStraightFlush
// All five cards in consecutive value order, with the same suit
// Return the highest card value; i.e 9C TC JC QC KC; it will return 13
function GetStraightFlush(arr_cards_oneplayer){
    let is_suit = false;
    let first_suit = arr_cards_oneplayer[0][1];
    let card_values = [];

    for (let i=0; i < arr_cards_oneplayer.length; i++)
    {
        var ele = arr_cards_oneplayer[i];
        card_values.push(GetCardVal(ele[0]));
        if (ele[1]=== first_suit){ 
            is_suit = true;
        }   
        else {
            is_suit = false;
            break;
        }
    }

    if (!is_suit)
        return 0;
    // Checking if Straight
    // Sort the values
    card_values.sort(function(a, b){return a - b});
    let is_straight = false;

    for (let i=0; i< card_values.length-1; i++){
        let itm1 = card_values[i];
        let itm2 = card_values[i+1];
        if (itm1+1 === itm2)
            is_straight = true;
        else {
            is_straight = false;
            break;
        }
    }
    if (is_straight)
        return card_values[card_values.length-1]; // return the max

    return 0;
}

// GetFourKind
// Four cards of the same value; 4C 4D 4S 4H KH
// Return: Card value of four of a kind
function GetFourKind(arr_cards_oneplayer){
    let arr_four_k =[];
    let card_values=[];
    for (let i=0; i < arr_cards_oneplayer.length; i++){
        card_values.push(arr_cards_oneplayer[i][0]);
    }

    // Sorting
    card_values.sort(function(a, b){return a - b});
    for(let i=0; i< card_values.length-1; i++){
        let itm1 = card_values[i];
        let itm2 = card_values[i+1];

        if (itm1 === itm2){
            if (!arr_four_k.includes(itm1))
                arr_four_k.push(itm1);
            arr_four_k.push(itm2);
        } else break;
    }
    if (arr_four_k.length===4)
        return arr_four_k[0];
    return 0;
}

// GetFullHouse
// Full house, Three of a kind and a Pair; 4C 4D 4S 5H 5D
// Return: {Three, Pair}
function GetFullHouse(arr_cards_oneplayer){
    let full_house = {Three:0, Pair:0};
    let arr1 =[]; // it might be a three or a pair
    let arr2=[];
    let card_values=[];
    for (let i=0; i < arr_cards_oneplayer.length; i++){
        card_values.push(arr_cards_oneplayer[i][0]);
    }
    // Sorting
    card_values.sort(function(a, b){return a - b});

    for (let i= 0; i< card_values.length -1; i++){
        let itm1 = card_values[i];
        let itm2 = card_values[i+1];
        if (itm1 === itm2)
        {
            if (arr2.length>0){
                if (!arr2.includes(itm1))
                    arr2.push(itm1);
                arr2.push(itm2);
            } else{
                if (!arr1.includes(itm1))
                    arr1.push(itm1);
                arr1.push(itm2);
            }
        } else if (arr2.length===0){
            arr2.push(itm2);
        }
    }

    if (arr1.length === 3 && arr2.length === 2)
    {
        full_house.Three = arr1[0];
        full_house.Pair = arr2[0];
    }

    if (arr2.length === 3 && arr1.length === 2)
    {
        full_house.Three = arr2[0];
        full_house.Pair = arr1[0];
    }
    
    console.log(card_values);

    console.log(arr1);
    console.log(arr2);

    console.log(full_house);

    return full_house;
}

// One line from poker-hands or one hand; input: 9C 9D 8D 7C 3C 2S KD TH 9H 8H
function OneHand(oneLineCards){

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

    var arr = oneLineCards.split(" ");
    var arr1 = arr.slice(0, 5);
    var arr2 = arr.slice(5, 10);
    // 10
    player1.IsRoyalFlush = GetIsRoyalFlush(arr1);
    player2.IsRoyalFlush = GetIsRoyalFlush(arr2);

    // 9
    if (!player1.IsRoyalFlush)
        player1.StraightFlush = GetStraightFlush(arr1);
    if (!player2.IsRoyalFlush)
        player2.StraightFlush = GetStraightFlush(arr2);

    // 8
    player1.FourKind = GetFourKind(arr1);
    player2.FourKind = GetFourKind(arr2);

    // 7
    player1.FullHouse = GetFullHouse(arr1);
    player2.FullHouse = GetFullHouse(arr2);
    
    console.log(player1);
    console.log(player2);
    console.log('The winner is player' + WhoWin(player1, player2));
} 
/// End Data analysing

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
//console.log(WhoWin(player1, player2));

OneHand("6C 8C 6H 6D 6S 3H 9D 2S 2C 3D");

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




app.get('/', (req, res) => res.send('Hello Poker!'))

app.listen(port, () => console.log(`Poker app listening at http://localhost:${port}`))