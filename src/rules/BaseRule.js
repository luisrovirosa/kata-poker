var CardValues = require('./CardValues.js');
var Result = require('../Result.js');

function BaseRule() {
    this.cardValues = new CardValues();
}

BaseRule.prototype.compare = function (hand, otherHand) {
    if (this.belongs(hand) || this.belongs(otherHand)) {
        var diff = this.belongs(hand) - this.belongs(otherHand);
        if (diff) {
            return this.createResult(diff);
        }
        var numberOfCards = hand.getCardsByGroups();
        var numberOfCardsOtherHand = otherHand.getCardsByGroups();
        var until = Math.min(this.until(), numberOfCards.length, numberOfCardsOtherHand.length);
        for (var i = 0; i < until; i++) {
            diff = this.cardValues.compare(numberOfCards[i]['k'], numberOfCardsOtherHand[i]['k']);
            if (diff) {
                var winningCard = diff > 0 ? numberOfCards[i]['k'] : numberOfCardsOtherHand[i]['k'];
                return this.createResult(diff, winningCard);
            }
        }
    }
};

BaseRule.prototype.createResult = function(diff, winningCard){
    var winner;
    if (diff < 0) {
        winner = "White";
    } else if (diff > 0) {
        winner = "Black";
    }
    return new Result(this, winner, winningCard);
};

BaseRule.prototype.until = function () {
    return 1;
};


module.exports = BaseRule;
