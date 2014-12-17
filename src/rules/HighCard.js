var CompareValues = require('./CompareValues.js');

function HighCard(){
    this.compareValues = new CompareValues();

}

function belongs(numberOfCards){
    return true;
}

HighCard.prototype.compare = function(hand, otherHand){
    var numberOfCards = hand.calculateNumberOfCards();
    var numberOfCardsOtherHand = otherHand.calculateNumberOfCards();

    if (belongs(numberOfCards) || belongs(numberOfCardsOtherHand)){
        var diff = belongs(numberOfCards) - belongs(numberOfCardsOtherHand);
        if (diff){
            return diff;
        }
        var until = Math.min(numberOfCards.length, numberOfCardsOtherHand.length);
        for (i=0; i < until; i++){
            var result = this.compareValues.compare(numberOfCards[i]['k'], numberOfCardsOtherHand[i]['k']);
            if (result){
                return result;
            }
        }
    }
};


module.exports = HighCard;
