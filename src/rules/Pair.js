var BaseRule = require('./BaseRule.js');

function Pair() {
}
Pair.prototype = new BaseRule();

Pair.prototype.belongs = function (hand) {
    return hand.getNumberOfCardFromGroup(0) == 2;
};

Pair.prototype.name = function () {
    return 'pair';
};

module.exports = Pair;
