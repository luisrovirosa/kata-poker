var Card = require('../src/Card.js');
var CompareValues = require('../src/rules/CompareValues.js');
var RuleThreeOfAKind = require('../src/rules/ThreeOfAKind.js');
var RuleTwoPairs = require('../src/rules/TwoPairs.js');
var RulePair = require('../src/rules/Pair.js');
var HighCard = require('../src/rules/HighCard.js');

function Hand(){
    this.cards = [];
    this.compareValues = new CompareValues();
    this.ruleThreeOfAKind = new RuleThreeOfAKind();
    this.ruleTwoPairs = new RuleTwoPairs();
    this.rulePair = new RulePair();
    this.ruleHighCard = new HighCard();
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
    var result;

    // Rules
    result = this.ruleThreeOfAKind.compare(this, otherHand);
    if (result){
        return result;
    }
    result = this.ruleTwoPairs.compare(this, otherHand);
    if (result){
        return result;
    }

    result = this.rulePair.compare(this, otherHand);
    if (result){
        return result;
    }

    result = this.ruleHighCard.compare(this, otherHand);
    if (result){
        return result;
    }

    result = numberOfCards.length - numberOfCardsOtherHand.length;
    if (result){
        return -(result);
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
