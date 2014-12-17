var Card = require('../src/Card.js');
var CompareValues = require('../src/rules/CompareValues.js');


var Rules = require('../src/rules/PokerRules.js');

function Hand(){
    this.cards = [];
    this.compareValues = new CompareValues();
    this.rules = new Rules();

}

Hand.create = function(handString){
    var hand = new Hand();
    hand.cards = handString.split(' ').map(function(cardString){
        return Card.create(cardString);
    }).sort(Card.sortDesc);
    return hand;
};

Hand.prototype.compareTo = function(otherHand){
    return this.rules.compare(this,otherHand);
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
