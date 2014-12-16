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
    for (var i = 0; i < 5; i++) {
        var result = this.cards[i].compareTo(otherHand.cards[i]);
        if (result != 0){
            return result;
        }
    }
};

module.exports = Hand;
