var BaseRule = require('./BaseRule.js');

function FullHouse() {
}
FullHouse.prototype = new BaseRule();

FullHouse.prototype.belongs = function (hand) {
    return hand.getCardGroup(0).v == 3 && hand.getCardGroup(1).v == 2;
};

module.exports = FullHouse;
