var CompareValues = require('./CompareValues.js');

function TwoPairs(){
    this.compareValues = new CompareValues();

}

function belongs(numberOfCards){
    return numberOfCards[0]['v'] == 2 && numberOfCards[1]['v'] == 2;
}

TwoPairs.prototype.compare = function(hand, otherHand){
    var numberOfCards = hand.calculateNumberOfCards();
    var numberOfCardsOtherHand = otherHand.calculateNumberOfCards();

    if (belongs(numberOfCards) || belongs(numberOfCardsOtherHand)){
        var diff = belongs(numberOfCards) - belongs(numberOfCardsOtherHand);
        if (diff){
            return diff;
        }
        for (var i = 0; i < 2; i++){
            diff = this.compareValues.compare(numberOfCards[i]['k'], numberOfCardsOtherHand[i]['k']);
            if (diff){
                return diff;
            }
        }
    }
};

module.exports = TwoPairs;
