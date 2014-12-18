var CardValues = require('./CardValues.js');
var Result = require('../Result.js');

function BaseRule() {
    this.cardValues = new CardValues();
}

BaseRule.prototype.compareHands = function (hand, otherHand) {
    if (!this.belongs(hand) && !this.belongs(otherHand)) {
        return;
    }

    var diff = this.belongs(hand) - this.belongs(otherHand);
    if (diff) {
        return createResult.call(this, diff);
    }

    var until = Math.min(this.until(), hand.getNumberOfGroups(), otherHand.getNumberOfGroups());
    for (var i = 0; i < until; i++) {
        var valueHand = hand.getValueFromGroup(i);
        var valueOtherHand = otherHand.getValueFromGroup(i);
        diff = this.compareCards(valueHand, valueOtherHand);
        if (diff) {
            var winningCard = diff > 0 ? valueHand : valueOtherHand;
            return createResult.call(this, diff, winningCard);
        }
    }
};

BaseRule.prototype.compareCards = function(value, otherValue){
    return this.cardValues.compare(value, otherValue);
};


BaseRule.prototype.until = function () {
    return 1;
};

function createResult (diff, winningCard){
    var winner = getWinner(diff);
    return new Result(this, winner, winningCard);
}
function getWinner(diff) {
    if (diff < 0) {
        return "White";
    } else if (diff > 0) {
        return "Black";
    }
}

module.exports = BaseRule;
