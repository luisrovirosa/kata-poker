var BaseRule = require('./BaseRule.js');

function FullHouse() {
}
FullHouse.prototype = new BaseRule();

FullHouse.prototype.belongs = function (hand) {
    return hand.getNumberOfCardFromGroup(0) == 3 && hand.getNumberOfCardFromGroup(1) == 2;
};

FullHouse.prototype.name = function () {
    return 'full house';
};

module.exports = FullHouse;
