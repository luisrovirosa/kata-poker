var BaseRule = require('./BaseRule.js');

function StraightFlush() {
}
StraightFlush.prototype = new BaseRule();

StraightFlush.prototype.belongs = function (hand) {
    for (var i = 0; i < 4; i++) {
        if (hand.getSuitOfCard(i) != hand.getSuitOfCard(i + 1) ||
            (-1 != this.compareCards(hand.getValueOfCard(i), hand.getValueOfCard(i + 1)))) {
            return false;
        }
    }
    return true;
};

StraightFlush.prototype.name = function () {
    return 'straight flush';
};

module.exports = StraightFlush;
