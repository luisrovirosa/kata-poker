var CompareValues = require('./CompareValues.js');

function ThreeOfAKind(){
    this.compareValues = new CompareValues();
}

ThreeOfAKind.prototype.compare = function (hand, otherHand){
    var numberOfCards = hand.calculateNumberOfCards();
    var numberOfCardsOtherHand = otherHand.calculateNumberOfCards();

    if (numberOfCards[0]['v'] == 3 ||  numberOfCardsOtherHand[0]['v'] == 3){
        var diff = numberOfCards[0]['v'] - numberOfCardsOtherHand[0]['v'];
        if (diff){
            return diff;
        }
        diff = this.compareValues.compare(numberOfCards[0]['k'], numberOfCardsOtherHand[0]['k']);
        if (diff){
            return diff;
        }
    }
};

module.exports = ThreeOfAKind;
