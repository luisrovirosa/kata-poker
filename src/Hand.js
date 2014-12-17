var Card = require('../src/Card.js');
var RuleCompareValues = require('../src/rules/CompareValues.js');

function Hand(){
    this.cards = [];
    this.ruleCompareValues = new RuleCompareValues();
}

Hand.create = function(handString){
    var hand = new Hand();
    hand.cards = handString.split(' ').map(function(cardString){
        return Card.create(cardString);
    }).sort(Card.sortDesc);
    return hand;
};


var cardOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
var compareCards = function(a,b){
    return cardOrder.indexOf(a) - cardOrder.indexOf(b);
};

Hand.prototype.compareTo = function(otherHand){
    // Count the number of cards
    var numberOfCards = calculateNumberOfCards(this.cards);
    var numberOfCardsOtherHand = calculateNumberOfCards(otherHand.cards);
    var i;

    var until = Math.min(numberOfCards.length, numberOfCardsOtherHand.length);
    for (i=0; i < until; i++){
        var result = numberOfCards.length - numberOfCardsOtherHand.length;
        if (result){
            return -(result);
        }
        result = numberOfCards[i]['v'] - numberOfCardsOtherHand[i]['v'];
        if (result){
            return result;
        }
        result = this.ruleCompareValues.resolve(numberOfCards[i]['k'], numberOfCardsOtherHand[i]['k']);
        if (result){
            return result;
        }
    }
};

function calculateNumberOfCards(cards){
    var numberOfCards = {};
    cards.forEach(function(card){
        numberOfCards[card.getValue()] = numberOfCards[card.getValue()] ? numberOfCards[card.getValue()] + 1: 1;
    });
    var sortDescByNumberOfCards = function(a, b) {
        return -(numberOfCards[a]-numberOfCards[b])*100 - compareCards(a,b);
    };
    numberOfCards = Object.keys(numberOfCards).sort(sortDescByNumberOfCards).map(function(k){
        return {k: k, v:numberOfCards[k]};
    });
    //console.log(numberOfCards);
    return numberOfCards;
}


module.exports = Hand;
