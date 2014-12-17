var CompareValues = require('./CompareValues.js');

function BaseRule() {
    this.compareValues = new CompareValues();
}

BaseRule.prototype.compare = function (hand, otherHand) {

    if (this.belongs(hand) || this.belongs(otherHand)) {
        var diff = this.belongs(hand) - this.belongs(otherHand);
        if (diff) {
            return diff;
        }
        var numberOfCards = hand.getCardsByGroups();
        var numberOfCardsOtherHand = otherHand.getCardsByGroups();
        var until = Math.min(this.until(), numberOfCards.length, numberOfCardsOtherHand.length);
        for (var i = 0; i < until; i++) {
            diff = this.compareValues.compare(numberOfCards[i]['k'], numberOfCardsOtherHand[i]['k']);
            if (diff) {
                return diff;
            }
        }
    }
};

BaseRule.prototype.until = function () {
    return 1;
};

module.exports = BaseRule;
