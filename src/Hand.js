var Card = require('../src/Card.js');

function Hand(){
    this.cards = [];
}

Hand.create = function(handString){
    var hand = new Hand();
    hand.cards = handString.split(' ').map(function(cardString){
        return Card.create(cardString);
    }).sort(Card.sortDesc);
    return hand;
};

Hand.prototype.compareTo = function(otherHand){
    var i = 0, result = 0;
    do {
        result = this.cards[i].compareTo(otherHand.cards[i]);
    } while (result == 0 && ++i < 5);
    return result;
};

module.exports = Hand;
