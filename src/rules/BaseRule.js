var CompareValues = require('./CompareValues.js');

function BaseRule(){
    this.compareValues = new CompareValues();
}

BaseRule.prototype.compare = function(hand, otherHand){
    var numberOfCards = hand.calculateNumberOfCards();
    var numberOfCardsOtherHand = otherHand.calculateNumberOfCards();

    if (this.belongs(numberOfCards) || this.belongs(numberOfCardsOtherHand)){
        var diff = this.belongs(numberOfCards) - this.belongs(numberOfCardsOtherHand);
        if (diff){
            return diff;
        }
        var until = Math.min(this.until(), numberOfCards.length, numberOfCardsOtherHand.length);
        for (var i=0; i < until; i++){
            diff = this.compareValues.compare(numberOfCards[i]['k'], numberOfCardsOtherHand[i]['k']);
            if (diff){
                return diff;
            }
        }
    }
};

module.exports = BaseRule;
