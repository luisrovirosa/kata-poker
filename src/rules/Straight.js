var BaseRule = require('./BaseRule.js');

function Straight() {
}
Straight.prototype = new BaseRule();

Straight.prototype.belongs = function (hand) {
    for (var i = 0; i < 4; i++) {
        if (-1 != this.compareCards(hand.getValueOfCard(i), hand.getValueOfCard(i + 1))) {
            return false;
        }
    }
    return true;
};

Straight.prototype.name = function () {
    return 'straight';
};

module.exports = Straight;
