var Card = require('../src/Card.js');
var CompareValues = require('../src/rules/CompareValues.js');
var RuleThreeOfAKind = require('../src/rules/ThreeOfAKind.js');

function Hand(){
    this.cards = [];
    this.compareValues = new CompareValues();
    this.ruleThreeOfAKind = new RuleThreeOfAKind();
}

Hand.create = function(handString){
    var hand = new Hand();
    hand.cards = handString.split(' ').map(function(cardString){
        return Card.create(cardString);
    }).sort(Card.sortDesc);
    return hand;
};

Hand.prototype.compareTo = function(otherHand){
    // Count the number of cards
    var numberOfCards = this.calculateNumberOfCards();
    var numberOfCardsOtherHand = otherHand.calculateNumberOfCards();
    var i, result;

    // Rules
    result = this.ruleThreeOfAKind.compare(this, otherHand);
    if (result){
        return result;
    }


    result = numberOfCards.length - numberOfCardsOtherHand.length;
    if (result){
        return -(result);
    }
    var until = Math.min(numberOfCards.length, numberOfCardsOtherHand.length);
    for (i=0; i < until; i++){
        result = numberOfCards[i]['v'] - numberOfCardsOtherHand[i]['v'];
        if (result){
            return result;
        }
        result = this.compareValues.compare(numberOfCards[i]['k'], numberOfCardsOtherHand[i]['k']);
        if (result){
            return result;
        }
    }
};

Hand.prototype.calculateNumberOfCards = function(){
    var numberOfCards = {};
    this.cards.forEach(function(card){
        numberOfCards[card.getValue()] = numberOfCards[card.getValue()] ? numberOfCards[card.getValue()] + 1: 1;
    });
    var self = this;
    var sortDescByNumberOfCards = function(a, b) {
        return -(numberOfCards[a]-numberOfCards[b])*100 - self.compareValues.compare(a, b);
    };
    numberOfCards = Object.keys(numberOfCards).sort(sortDescByNumberOfCards).map(function(k){
        return {k: k, v:numberOfCards[k]};
    });
    //console.log(numberOfCards);
    return numberOfCards;
};


module.exports = Hand;
