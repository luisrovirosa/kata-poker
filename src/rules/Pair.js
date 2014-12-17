var CompareValues = require('./CompareValues.js');

function Pair(){
    this.compareValues = new CompareValues();
}

function belongs(numberOfCards){
    return numberOfCards[0]['v'] == 2;
}

Pair.prototype.compare = function(hand, otherHand){
    var numberOfCards = hand.calculateNumberOfCards();
    var numberOfCardsOtherHand = otherHand.calculateNumberOfCards();

    if (belongs(numberOfCards) || belongs(numberOfCardsOtherHand)){
        var diff = belongs(numberOfCards) - belongs(numberOfCardsOtherHand);
        if (diff){
            return diff;
        }
        diff = this.compareValues.compare(numberOfCards[0]['k'], numberOfCardsOtherHand[0]['k']);
        if (diff){
            return diff;
        }
    }
};

module.exports = Pair;
